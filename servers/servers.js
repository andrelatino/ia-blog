
// Función reutilizable para asignar el event listener de submit al formulario
function assignSubmitEventListener(formId, inputId, newId) { // Agrega newId como un tercer argumento
    document.getElementById(formId).addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir la presentación del formulario por defecto
        var inputValue = document.getElementById(inputId).value;
        console.log("Valor del input:", inputValue);
        github_check_api(inputValue, newId); // Utiliza newId aquí
    });
}

// Función para añadir contenido único al hacer clic en el botón
function addContent() {
    // Crear un elemento div con la clase "servers-content"
    var newContent = document.createElement("div");
    var newId = generateId();
    newContent.id = newId + "_div";
    newContent.className = "servers-items";

    // Generar contenido único utilizando comillas invertidas (template literals)
    newContent.innerHTML = `
        <img class="admin-sidebar-plugin-icon" class="servers-img" src="${generateIconUrl()}">
        <h2 id="${newId}_name">ApiKey</h2>
        <form id="${newId}_form">
            <input id="${newId}_input" class="servers-input" type="password" required>
            <button id="${newId}_btn" class="servers-button">Check API Key</button>
        </form>
    `;

    var grid = document.getElementById("grid");
    var addButton = document.getElementById("addButton");
    grid.insertBefore(newContent, addButton);

    assignSubmitEventListener(`${newId}_form`, `${newId}_input`, newId);
    // Guardar el contenido HTML del nuevo elemento en el localStorage
    // saveGridContentToLocalStorage();
}

function saveGridContentToLocalStorage() {
    var gridContent = document.getElementById("grid").innerHTML;
    var inputValues = {};

    // Recoger los valores de todos los inputs
    document.querySelectorAll('.servers-input').forEach(input => {
        inputValues[input.id] = input.value;
    });

    // Guardar tanto el HTML como los valores de los inputs
    var saveObject = { gridContent, inputValues };
    localStorage.setItem("gridContent", JSON.stringify(saveObject));
}


function loadGridContentFromLocalStorage() {
    // Recuperar el objeto guardado desde localStorage
    var saved = localStorage.getItem("gridContent");
    if (saved) {
        // Parsear el objeto guardado
        var saveObject = JSON.parse(saved);
        
        // Establecer el contenido HTML del grid
        document.getElementById("grid").innerHTML = saveObject.gridContent;

        // Iterar sobre los inputs guardados y restaurar sus valores
        if (saveObject.inputValues) {
            for (const [inputId, value] of Object.entries(saveObject.inputValues)) {
                var inputElement = document.getElementById(inputId);
                if (inputElement) {
                    inputElement.value = value; // Asignar el valor al input correspondiente
                }
            }
        }

        // Después de restaurar los valores, reasignar los manejadores de eventos a los formularios
        document.querySelectorAll('form').forEach(form => {
            const inputId = form.querySelector('input').id;
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                var inputValue = document.getElementById(inputId).value;
                console.log("Valor del input:", inputValue);
                github_check_api(inputValue);
            });
        });
    }
}



// Call the function to load the content from localStorage when the page is loaded
window.addEventListener("load", loadGridContentFromLocalStorage);




// Función para generar un icono aleatorio (reemplázala con tu lógica real)
function generateIconUrl() {
    // Aquí podrías tener una lista de URLs de iconos y seleccionar uno aleatoriamente
    return "../global/file/github.svg";
}

// Función para generar un título aleatorio (reemplázala con tu lógica real)
// function generateTitle() {
//     // Aquí podrías tener una lista de títulos y seleccionar uno aleatoriamente
//     return "Título Aleatorio";
// }

// Función para generar un ID único (reemplázala con tu lógica real)
function generateId() {
    // Aquí podrías generar un ID único de alguna manera (por ejemplo, usando un contador)
    return "id_" + Math.random().toString(36).substr(2, 9);
}

function github_check_api(apiKey, divId) {
    const accessToken = apiKey;

    fetch('https://api.github.com/user', {
        headers: {
            Authorization: `bearer ${accessToken}`
        }
    })
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            // Manejar otros estados como el error 401 aquí
            throw new Error('Failed to authenticate');
        }
    })
    .then(data => {
        // Ahora puedes usar divId para actualizar el h2 específico
        const userNameDisplay = document.getElementById(`${divId}_name`);
        if (userNameDisplay) {
            userNameDisplay.textContent = data.login; // Actualiza el h2 con el nombre de usuario de GitHub
        }

        // Guarda información en localStorage como antes
        localStorage.setItem('githubApi', apiKey);
        localStorage.setItem('githubUser', data.login); // Este es un buen lugar para guardar
        localStorage.setItem('githubApi',apiKey);
        localStorage.setItem('githubUser', data.login);
        localStorage.setItem('githubEmail','email@yoursite.com' );
        localStorage.setItem('githubBaseUrl', data.html_url);
        localStorage.setItem('githubRepoUrl', data.repos_url);
        // Continúa guardando otros datos como antes
        saveGridContentToLocalStorage();
    })
    .catch(error => {
        console.error('Error:', error);
        // Aquí podrías actualizar la UI para reflejar el error
    });
}

