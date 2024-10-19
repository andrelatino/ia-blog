
var githubApi = localStorage.getItem('githubApi');
var pageUrl = localStorage.getItem('pageUrl');

if (pageUrl){
    pageLoadData();
} else {
    console.log('create index.json');
}
//LOAD DATA
async function pageLoadData() {
    const url = pageUrl;
    const apiKey = githubApi; // Replace with your GitHub API key

    const headers = new Headers({
        'Authorization': `token ${apiKey}`
    });

    const requestOptions = {
        method: 'GET',
        headers: headers
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        
        if (response.ok) {
            // UPDATE LOCAL STORAGE VALUES
            const contenidoBase64 = data.content;
            localStorage.setItem('pageEncoded', contenidoBase64);

            const contenidoDecodificado = atob(contenidoBase64);
            localStorage.setItem('pageDecoded', contenidoDecodificado);

            localStorage.setItem('pageSha', data.sha);

            // Decode special characters in contenidoDecodificado
            const decodedContent = decodeURIComponent(escape(contenidoDecodificado));

            // Reemplaza el contenido del elemento con ID "grid" con decodedContent
            const gridElement = document.getElementById('grid');
            if (gridElement) {
                // Utiliza encodeTextNodes para asegurarte de que los caracteres especiales se representen correctamente
                gridElement.innerHTML = encodeTextNodes(decodedContent);
            }

            console.log('Contenido del fichero:');
            console.log(decodedContent);
        }

        
         else {
            console.error('Error al cargar el fichero desde la API de GitHub');
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
}

function encodeToUnicodeEscape(str) {
    return str.replace(/[\u007F-\uFFFF]/g, function(char) {
        return "\\u" + ("0000" + char.charCodeAt(0).toString(16)).slice(-4);
    });
}
function encodeTextNodes(content) {
    // Convert the string back to a DOM element for processing
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    const walk = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walk.nextNode()) {
        const rawText = node.nodeValue;
        const encodedText = encodeToUnicodeEscape(rawText);
        if (rawText !== encodedText) {
            node.nodeValue = encodedText;
        }
    }
    return tempDiv.innerHTML;
}

//UPDATE DATA
async function pageUpdateData(content) {
    showPreloader();
    const url = localStorage.getItem('pageUrl');
    const sha = localStorage.getItem('pageSha');
    const token = githubApi;
    const data = content;

    const updateData = {
        message: 'Update',
        content: btoa(data), // Encriptar el contenido en base64
        sha: sha, // SHA del archivo obtenido previamente
    };

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `token ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });

        if (!response.ok) {
            showFailure();
            throw new Error(`Error al actualizar el archivo: ${response.statusText}`);
        }

        const jsonResponse = await response.json();
        const newSha = jsonResponse.content.sha;
        console.log('Nuevo SHA:', newSha);
        localStorage.setItem('pageSha', newSha);
        console.log(jsonResponse);
        showSuccess();
    } catch (error) {
        showFailure();
        throw new Error(`Error al actualizar el archivo: ${error.message}`);
    }
}
function pageCreateJson() {
    const gridContent = document.getElementById('grid').innerHTML;
    const pageData = gridContent;
    return pageData.trim();
}
function pageSaveData() {
    const newJsonContent = pageCreateJson();
    pageUpdateData(newJsonContent);
    console.log(newJsonContent);
}


const observer0 = new MutationObserver(mutations => {
    const gridDiv = document.getElementById("grid");
    if (gridDiv) {
        // Once the grid is found, observe its child nodes
        observer0.disconnect();  // Disconnect the initial observer
        decodeTextNodes(gridDiv);  // Decode existing text nodes first
        const childObserver = new MutationObserver(childMutations => {
            // For each mutation, check and decode the text nodes of 'grid'
            decodeTextNodes(gridDiv);
        });
        childObserver.observe(gridDiv, { childList: true, subtree: true });
    }
});

observer0.observe(document.body, { childList: true, subtree: true });

function decodeTextNodes(element) {
    const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while(node = walk.nextNode()) {
        const rawText = node.nodeValue;
        const decodedText = decodeDoubleEscapedUnicode(rawText);
        if (rawText !== decodedText) {  // Only update if there was a change
            node.nodeValue = decodedText;
            console.log(decodedText);
        }
    }
}

function decodeDoubleEscapedUnicode(str) {
    // First handle the double backslashes for Unicode sequences
    const singleEscaped = str.replace(/\\\\u([a-fA-F0-9]{4})/g, "\\u$1");
    // Then decode the Unicode escape sequences
    return singleEscaped.replace(/\\u([a-fA-F0-9]{4})/g, function(_, hex) {
        return String.fromCharCode(parseInt(hex, 16));
    });
}