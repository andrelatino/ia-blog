
var githubApi = localStorage.getItem('githubApi');
var pageUrl = localStorage.getItem('pageUrl');

if (pageUrl) {
    pageLoadData();
} else {
    console.log('create index.json');
}

// Optimiza la obtención de elementos del DOM y la reutilización de funciones
const getDomElement = id => document.getElementById(id);
const updateLocalStorage = (key, value) => localStorage.setItem(key, value);

//LOAD DATA
async function pageLoadData() {
    const url = pageUrl;
    const apiKey = githubApi;

    const headers = new Headers({
        'Authorization': `token ${apiKey}`
    });

    const requestOptions = {
        method: 'GET',
        headers: headers
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('Error al cargar el fichero desde la API de GitHub');
        }

        const data = await response.json();
        processGitHubResponse(data);
        
        loadStylesToGrid();
        loadScriptToGrid();
        
        image_FG_Click();
        video_FG_Click();

        
        
        
        
        
    } catch (error) {
        console.error('Error de red:', error);
    }
}


function processGitHubResponse(data) {
    const contenidoBase64 = data.content;
    updateLocalStorage('pageEncoded', contenidoBase64);
    const contenidoDecodificado = atob(contenidoBase64);
    updateLocalStorage('pageDecoded', contenidoDecodificado);
    updateLocalStorage('pageSha', data.sha);

    const decodedContent = decodeURIComponent(escape(contenidoDecodificado));
    const gridElement = getDomElement('grid-page');
    if (gridElement) {
        gridElement.innerHTML = encodeTextNodes(decodedContent);
    }

    console.log('Contenido del fichero:', decodedContent);
    
    
}

//UPDATE DATA
async function pageUpdateData(content) {
    showPreloader();
    const url = localStorage.getItem('pageUrl');
    const sha = localStorage.getItem('pageSha');
    const token = githubApi;

    // Convertimos el contenido a base64 manejando UTF-8
    function utf8ToBase64(str) {
        let utf8Bytes = new TextEncoder().encode(str);
        let base64String = btoa(String.fromCharCode(...utf8Bytes));
        return base64String;
    }

    const updateData = {
        message: 'Update',
        content: utf8ToBase64(content),  // Usamos la función utf8ToBase64 aquí
        sha: sha,
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
        updateLocalStorage('pageSha', jsonResponse.content.sha);
        showSuccess();
        

    } catch (error) {
        showFailure();
        console.error('Error al actualizar el archivo:', error);
    }
}


// Simplificación de la creación y guardado de datos
// Function to retrieve HTML content of 'grid-wrapper' and trim it for storage or processing
function pageCreateJson() {
    
    const gridContent = document.getElementById('grid-page').innerHTML;
    return gridContent.trim();
}

// Function to save data by updating existing content with newly generated JSON content
function pageSaveData() {
    const newJsonContent = pageCreateJson();
    pageUpdateData(newJsonContent); // Assuming pageUpdateData is correctly defined to handle updates
    console.log (newJsonContent);
}



// Unifica las funciones de codificación
function encodeToUnicodeEscape(str) {
    if (str.trim() === '') {
        return ''; // Return an empty string if input is empty or whitespace
    }
    
    return str.replace(/[\u007F-\uFFFF]/g, char => "\\u" + ("0000" + char.charCodeAt(0).toString(16)).slice(-4));
}


function encodeTextNodes(content) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    const walk = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walk.nextNode()) {
        node.nodeValue = encodeToUnicodeEscape(node.nodeValue);
    }
    return tempDiv.innerHTML;
}

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

const observer = new MutationObserver(mutations => {
    const gridDiv = getDomElement("grid-page");
    if (!gridDiv) return; // Asegúrate de que el elemento 'grid-body' exista

    observer.disconnect();  // Desconecta el observador inicial
    decodeTextNodes(gridDiv);  // Decodifica los nodos de texto existentes

    const childObserver = new MutationObserver(mutations => {
        decodeTextNodes(gridDiv);
    });
    childObserver.observe(gridDiv, { childList: true, subtree: true });
});

observer.observe(document.body, { childList: true, subtree: true });


function decodeDoubleEscapedUnicode(str) {
    const singleEscaped = str.replace(/\\\\u([a-fA-F0-9]{4})/g, "\\u$1");
    return singleEscaped.replace(/\\u([a-fA-F0-9]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}
//------------------------------------------------
// END: ENCODING
//------------------------------------------------

function loadStylesToGrid() {
    const gridPage = document.getElementById("grid-page");

    function createStyleIfNeeded(id, cssContent, position) {
        let styleElement = document.getElementById(id);
        if (!styleElement) {
            styleElement = document.createElement("style");
            styleElement.id = id;
            styleElement.type = "text/css";
            styleElement.setAttribute("data-type", "css");
            styleElement.setAttribute("data-size", id.split('-')[1].replace('.css', ''));
            styleElement.setAttribute("data-content", "page");
            styleElement.textContent = cssContent;

            // Insertar estilo en la posición específica
            if (gridPage.children[position]) {
                gridPage.insertBefore(styleElement, gridPage.children[position]);
            } else {
                gridPage.appendChild(styleElement);
            }
        } else {
            console.log("El estilo con ID '" + id + "' ya existe y no será duplicado.");
        }
    }

    function createGridBodyIfNeeded() {
        if (!document.querySelector("grid-body")) {
            const gridBody = document.createElement("grid-body");
            gridBody.id = 'grid-body';
            gridPage.appendChild(gridBody);
        }
    }

    // Contenido CSS para Laptop
    const laptopCSS = ``;
    // Contenido CSS para Tablet
    const tabletCSS = `@media screen and (min-width:641px) and (max-width:1024px) { /* Tablet */ }`;
    // Contenido CSS para Móvil
    const mobileCSS = `@media screen and (max-width:640px) { /* Mobile */ }`;

    // Crear o reutilizar estilos en el orden correcto
    createStyleIfNeeded("page-laptop.css", laptopCSS, 0); // Laptop primero
    createStyleIfNeeded("page-tablet.css", tabletCSS, 1); // Tablet segundo
    createStyleIfNeeded("page-mobile.css", mobileCSS, 2); // Móvil tercero
    createGridBodyIfNeeded();
}

// Llamar a la función cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", loadStylesToGrid);


function loadScriptToGrid() {
    const gridPage = document.getElementById("grid-page");

    function createScriptIfNeeded(id, jsContent) {
        // Buscar el script por ID
        let existingScript = document.getElementById(id);
        
        // Si el script ya existe, no hacer nada
        if (existingScript) {
            console.log("El script con ID '" + id + "' ya existe y no será duplicado.");
            return;
        }
        
        // Crear y configurar el nuevo script
        const scriptElement = document.createElement("script");
        scriptElement.id = id;
        scriptElement.type = "text/javascript";
        scriptElement.setAttribute("data-type", "js");
        scriptElement.textContent = jsContent;

        // Insertar el script en la posición deseada (al final si no se especifica posición)
        gridPage.appendChild(scriptElement);
    }

    // Contenido JavaScript para el script global
    const globalJS = ``;

    // Crear o reutilizar el script global
    createScriptIfNeeded("page-global.js", globalJS);
}

// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    loadScriptToGrid();
});


     
  function sectionSingleImage(image_ID) {
      show_Image_Modal();
  
      localStorage.setItem('imageIdIs', image_ID);
      localStorage.setItem('imageTypeIs', 'image-fg');
      // alert(pictureID);
      loadAllSingleImage();
      imageAllSingleButton();
    //   loadUnsplashImages();
    //   loadGithubImages();
  
  }
    
  function show_Image_Modal() {
      var divModal = document.getElementById("image-fg-modal");
      divModal.style.display = "grid";
  }
  function hide_FG_Modal() {
      var divModal = document.getElementById("image-fg-modal");
      divModal.style.display = "none";
  }
  
  function loadAllSingleImage() {
    const imageIdIs = localStorage.getItem('imageIdIs');
    const imageElement = document.getElementById(imageIdIs);
    const singleImageSrc = imageElement.getAttribute('src');
    const showSingleImage = document.getElementById('image-all-thumbnail');
    showSingleImage.src = singleImageSrc;
    // showSingleImage.removeAttribute('srcset');
  }
  
  function imageAllSingleButton(){
      
    localStorage.setItem('imageSize','All');
    // loadAllImage();
    
    var imageDivAll = document.getElementById("image-all"); imageDivAll.style.visibility = "visible";
    var imageDivM = document.getElementById("image-m"); imageDivM.style.visibility = "hidden";
    var imageDivXs = document.getElementById("image-xs"); imageDivXs.style.visibility = "hidden";
   
    
    var imageButtonAll = document.getElementById("image-btn-all"); 
        imageButtonAll.style.background = "#007dec";
    var imageButtonAllImg = document.querySelector("#image-btn-all img");
        imageButtonAllImg.style.filter = "invert(1)";
  
    var imageButtonM = document.getElementById("image-btn-m"); 
        imageButtonM.style.background = "white";
    var imageButtonMImg = document.querySelector("#image-btn-m img");
        imageButtonMImg.style.filter = "none";
    var imageButtonMClear = document.getElementById("image-btn-m-clear"); 
        imageButtonMClear .style.display = "none";
   
    var imageButtonXs = document.getElementById("image-btn-xs"); 
        imageButtonXs.style.background = "white"; 
    var imageButtonXsImg = document.querySelector("#image-btn-xs img");
        imageButtonXsImg.style.filter = "none";
    var imageButtonXsClear = document.getElementById("image-btn-xs-clear"); 
        imageButtonXsClear .style.display = "none";
  
  }
  
  

// (function() {
//     function modifyLinkUrl(link) {
//         // Obtener la URL actual del atributo href del enlace
//         const currentUrl = link.getAttribute('href');

//         // Solicitar nueva URL del enlace
//         const newUrl = prompt(`Link ID ${link.id}:`, currentUrl);
//         if (newUrl !== null) {
//             link.setAttribute('href', newUrl);
//         }
//     }

//     function initializeLinkEditing() {
//         document.addEventListener("dblclick", function(event) {
//             const link = event.target.closest("a");
//             if (link) {
//                 event.preventDefault();
//                 modifyLinkUrl(link);
//             }
//         });
//     }

//     document.addEventListener("DOMContentLoaded", function() {
//         initializeLinkEditing();
//     });

// })();

(function() {
    function modifySpanText(span) {
        // Obtener el texto actual del span sin comillas
        const currentText = span.textContent;

        // Solicitar nuevo texto para el span
        const newText = prompt(`Span ID : ${span.id}`, currentText);
        if (newText !== null) {
            span.textContent = newText;
        }
    }

    function initializeSpanEditing() {
        document.addEventListener("dblclick", function(event) {
            const span = event.target.closest("span[data-type='icon-fg']");
            if (span) {
                event.preventDefault();
                modifySpanText(span);
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        initializeSpanEditing();
    });

})();