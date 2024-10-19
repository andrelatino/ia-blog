
// var fileUrl;
// var editor; // Declarar la variable editor en un ámbito global

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
  if (!fileUrl) {
      console.error('Repo raw URL is not available in local storage.');
      return;
  }

  fetch(fileUrl)
      .then(response => response.text())
      .then(data => {
          editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
              mode: '', // Use the fileType for the CodeMirror mode
              lineWrapping: true,
              lineNumbers: true,
              theme: "material",
          });

          // Set initial CSS content
          editor.setValue(data);
      })
      .catch(error => {
          console.error('Error fetching raw file content:', error);
      });
}

githubRawFile();

function handleSaveClick() {
  if (!editor) {
      console.error('Editor is not initialized.');
      return;
  }

  // Obtener el valor del editor de CodeMirror
  const editorValue = editor.getValue();
  const url = fileToUpdate;
  const token = githubApi;
  const data = editorValue;
  const sha = fileSha;

  updateGitHubFile(url, token, data, sha)
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error(error);
    });



  // Colocar aquí tu lógica para utilizar el valor (por ejemplo, actualizar el archivo en GitHub)
  console.log('Contenido del editor de CodeMirror:', editorValue);
}

// Agregar un controlador de eventos al botón "SAVE"
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