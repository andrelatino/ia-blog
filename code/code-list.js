// var fileUrl; // Asegúrate de que estas variables estén definidas correctamente en tu contexto
// var editor; // Declarar la variable editor en un ámbito global
// var githubApi; // Declarar la variable para el token de la API de GitHub

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const encodedValue = getUrlParameter('id');
const decodedValues = JSON.parse(atob(encodedValue));

for (const item of decodedValues) {
    var fileName = item.fileName;
    var fileUrl = item.fileUrl;
    var fileType = item.fileType;
    var fileSha = item.fileSha;
    var fileToUpdate = item.fileToUpdate;

    console.log('fileName:', fileName);
    console.log('fileUrl:', fileUrl);
    console.log('fileType:', fileType);
    console.log('fileSha:', fileSha);
    console.log('fileToUpdate:', fileToUpdate);
}

function githubRawFile() {
    let localData = localStorage.getItem('codeData');

    if (localData) {
        initializeEditor(localData);
    } else if (fileUrl) {
        fetch(fileUrl)
            .then(response => response.text())
            .then(data => {
                localStorage.setItem('codeData', data);
                initializeEditor(data);
            })
            .catch(error => {
                console.error('Error fetching raw file content:', error);
            });
    } else {
        console.error('Repo raw URL is not available in local storage.');
    }
}

function initializeEditor(data) {
    editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
        mode: fileType, // Utilizar fileType para el modo de CodeMirror
        lineWrapping: true,
        lineNumbers: true,
        theme: "material",
    });

    editor.setValue(data);
}

function handleSaveClick() {
    if (!editor) {
        console.error('Editor is not initialized.');
        return;
    }

    const editorValue = editor.getValue();
    const url = fileToUpdate;
    const token = githubApi;
    const data = editorValue;
    const sha = fileSha;

    updateGitHubFile(url, token, data, sha)
      .then(message => {
        console.log(message);
        localStorage.setItem('codeData', editorValue); // Actualizar localStorage después de guardar
      })
      .catch(error => {
        console.error(error);
      });

    console.log('Contenido del editor de CodeMirror:', editorValue);
}

document.getElementById('editor-save').addEventListener('click', handleSaveClick);

function updateGitHubFile(url, token, data, sha) {
    const apiUrl = `${url}`;
  
    const updateData = {
      message: 'Actualización del archivo',
      content: btoa(data), // Codificar el contenido en base64
      sha: sha, // SHA del archivo previamente obtenido
    };
  
    return fetch(apiUrl, {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
    .then(response => {
      if (response.ok) {
        return 'Archivo actualizado con éxito';
      } else {
        throw new Error(`Error al actualizar el archivo: ${response.statusText}`);
      }
    })
    .catch(error => {
      throw new Error(`Error al actualizar el archivo: ${error.message}`);
    });
}

githubRawFile();
