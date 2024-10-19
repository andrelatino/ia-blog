// Cargar los datos y mostrarlos en Highlight.js
codeLoadData();

async function codeLoadData() {
    const codeUrl = localStorage.getItem('codeUrl');
    const url = codeUrl;
    const apiKey = githubApi; // Reemplaza con tu clave de API de GitHub

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
            // Actualizar los valores de localStorage
            const contenidoBase64 = data.content;
            localStorage.setItem('codeEncoded', contenidoBase64);

            const contenidoDecodificado = atob(contenidoBase64);
            localStorage.setItem('codeDecoded', contenidoDecodificado);

            localStorage.setItem('codeSha', data.sha);

            // Mostrar el código en el elemento <code>
            const codeElement = document.querySelector('pre code');
            codeElement.textContent = contenidoDecodificado;

            // Resaltar el código con Highlight.js
            hljs.highlightElement(codeElement);

            console.log('Contenido del fichero:');
            console.log(contenidoDecodificado);
        } else {
            console.error('Error al cargar el fichero desde la API de GitHub');
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
}

// Actualizar los datos desde el editor (en este caso, el <code> no es editable)
function codeUpdateData(editorData) {
    showPreloader();
    const url = localStorage.getItem('codeUrl');
    const sha = localStorage.getItem('codeSha');
    const token = githubApi;
    const data = editorData;

    const updateData = {
        message: 'Update',
        content: btoa(data), // Codificar el contenido en base64
        sha: sha, // SHA del archivo obtenido previamente
    };

    return fetch(url, {
        method: 'PUT',
        headers: {
            Authorization: `token ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Convertir la respuesta en JSON
        } else {
            showFailure();
            throw new Error(`Error al actualizar el archivo: ${response.statusText}`);
        }
    })
    .then(jsonResponse => {
        const newSha = jsonResponse.content.sha; // Extraer el nuevo SHA de la respuesta
        console.log('Nuevo SHA:', newSha); // Registrar el nuevo SHA en la consola
        localStorage.setItem('codeSha', newSha);
        showSuccess();
    })
    .catch(error => {
        showFailure();
        throw new Error(`Error al actualizar el archivo: ${error.message}`);
    });
}

// Guardar los datos desde el área de código
document.getElementById('editor-save').addEventListener('click', function () {
    // Extraer el valor del código (el código no es editable en este caso)
    const editorValue = document.querySelector('pre code').textContent;
    console.log('editorValue: ' + editorValue);
    codeUpdateData(editorValue);
});
