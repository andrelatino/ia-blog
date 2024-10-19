// Cambiar las importaciones de ES Module a CommonJS para evitar errores de módulo
import { chatAssistant, blogExpert } from './quickbars-roles.js';

function openIaAssistant(section_id, grid_content_id){
    console.log('section_id:', section_id, 'grid_content_id:', grid_content_id);
    openIaModal(section_id, grid_content_id);
    
}
// Haz que la función sea globalmente accesible
window.openIaAssistant = openIaAssistant;

function openIaModal(section_id, grid_content_id) {

    const getSectionHtml = document.getElementById(grid_content_id).innerHTML;



    // Crea el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'ia-container';
    modalContainer.style.position = 'fixed';
    modalContainer.style.top = '50%';
    modalContainer.style.left = '50%';
    modalContainer.style.transform = 'translate(-50%, -50%)';
    modalContainer.style.zIndex = '1000';
    modalContainer.style.backgroundColor = 'white';
    modalContainer.style.padding = '0';
    modalContainer.style.borderRadius = '8px';
    modalContainer.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.1)';
    modalContainer.style.width = '100%';
    modalContainer.style.maxWidth = '600px';
    modalContainer.style.fontFamily = 'system-ui';

    // Crea el contenido del modal
    modalContainer.innerHTML = `
    <div id="ai-anwser">
        <p id="resultText"></p>
        <div id="resultHTML">${getSectionHtml}</div>
        <div class="ai-buttons">
            <button id="ai-insert-btn">Insérer</button>
            <button id="ai-replace-btn">Remplacer</button>
        </div>
    </div>

    <div id="ai-chat">
    <div class="ai-title">
        <img src="${iconAssistant}">
        <h2 class="ai-header">AI Assistant</h2>
        <select id="ai-select">
            <option value="@chat">Chat</option>
            <option value="@blog">Blog</option>
        </select>
        <button id="ai-close"><img src="../global/file/close.svg"></button>
    </div>
        <div class="ai-ask">
            <input id="promptInput" type="text"/>
            <button id="generateBtn">SEND</button>
            
        </div>

        <div class="ai-ids">
            <div class="sectionID">${section_id}</div>
            <div class="contentID">${grid_content_id}</div>
        </div>
    </div>

    `;

    // Agrega el contenedor al cuerpo del documento
    document.body.appendChild(modalContainer);

    // Lógica para el botón "Generate"
    document.getElementById('generateBtn').addEventListener('click', () => {
    // Obtener el valor del select (ya que está oculto, es solo para obtener la opción)
    const selectValue = document.getElementById('ai-select').value.trim();

    // Obtener el HTML del div resultHTML (recuperarlo y convertirlo a una cadena)
    const resultHTML = document.getElementById('resultHTML').innerHTML.trim();

    // Obtener el texto del input
    const inputText = document.getElementById('promptInput').value.trim().toLowerCase();

    if (!inputText) {
        alert('Por favor ingresa algún texto.');
        return;
    }

    // Inicializar la variable fullText
    let fullText;

    // Verificar si el valor del select es "@blog"
    if (selectValue === '@blog') {
        // Si es "@blog", combinar solo el valor del select y el texto del input
        fullText = `${selectValue} ${inputText}`;
    } else {
        // Si no es "@blog", combinar el valor del select, el texto del input y el HTML del div
        fullText = `${selectValue} ${inputText} ${resultHTML}`;
    }

    console.log('fullText: ' + fullText);

    // Llamar a la función de manejo de texto con el texto combinado
    handleTextProcessing(fullText);
});


    // Agrega un listener para el evento 'click'
    document.getElementById('ai-insert-btn').addEventListener('click', () => {
        // Obtén el contenido del div de origen
        const sourceDiv = document.getElementById('resultHTML');
        const contentToInsert = sourceDiv.innerHTML;
        
        // Verificar y agregar IDs y contenteditable a los elementos si no tienen
        const updatedContent = addIdsToHtmlElements(contentToInsert);
        
        // Obtén el div destino por su ID
        const targetDiv = document.getElementById(grid_content_id);
        
        // Inserta el contenido al final del div destino
        targetDiv.insertAdjacentHTML('beforeend', updatedContent);
        closeIaModal(modalContainer);
    });

    // Agrega un listener para el evento 'click'
    document.getElementById('ai-replace-btn').addEventListener('click', () => {
        // Obtén el contenido del div de origen
        const sourceDiv = document.getElementById('resultHTML');
        const contentToInsert = sourceDiv.innerHTML;
        
        // Verificar y agregar IDs y contenteditable a los elementos si no tienen
        const updatedContent = addIdsToHtmlElements(contentToInsert);
        
        // Obtén el div destino por su ID
        const targetDiv = document.getElementById(grid_content_id);
        
        // Reemplaza el contenido del div destino con el contenido del div de origen
        targetDiv.innerHTML = updatedContent;
        closeIaModal(modalContainer);
    });

     // Agrega un listener para el evento 'click'
     document.getElementById('ai-close').addEventListener('click', () => {
        closeIaModal(modalContainer);
    });
}


function closeIaModal(modalContainer) {
    // Remueve el modal del DOM
    if (modalContainer && modalContainer.parentNode) {
        modalContainer.parentNode.removeChild(modalContainer);
    }
}

// Función para manejar la respuesta y ejecutar la función adecuada directamente
async function handleTextProcessing(inputText) {
    console.log ('handleTextProcessing(inputText)');
    // Definir palabras clave para cada función
    const keywordsMapping = {
        chat: ["@chat"],
        blog: ["@blog"]
    };
    
    // Verificar si el texto contiene palabras clave específicas
    const containsKeyword = (keywords) => keywords.some(keyword => inputText.includes(keyword));

    let result;
    document.getElementById('resultText').textContent = "Procesando tu solicitud...";

    try {
        // Llamar a la función adecuada basada en la palabra clave detectada
        if (containsKeyword(keywordsMapping.chat)) {
            result = await chatAssistant(inputText);
            
        } else if (containsKeyword(keywordsMapping.blog)) {
            result = await blogExpert(inputText);
            
        }  else {
            // Si no hay palabras clave, responde con el asistente normal
            result = await asistenteModerador(inputText);
            document.getElementById('resultText').textContent = `${result}`;
        }
    } catch (error) {
        console.error('Error procesando el texto:', error);
        document.getElementById('resultText').textContent = 'Ocurrió un error. Por favor intenta de nuevo.';
    }
}

// Función para generar un ID aleatorio
function generateRandomID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
// Función para agregar IDs y contenteditable a los elementos HTML si no tienen
function addIdsToHtmlElements(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const elements = doc.body.querySelectorAll('*');

    elements.forEach(element => {
        // Evitar añadir contenteditable si es un <article> o tiene ciertos data-type
        const dataType = element.getAttribute('data-type');
        if (element.tagName.toLowerCase() !== 'article' && 
            dataType !== 'content' && 
            dataType !== 'post-meta' && 
            dataType !== 'post-cover' && 
            dataType !== 'post-body') {
            
            if (!element.id) {
                element.id = generateRandomID(7);
            }
            if (!element.hasAttribute('contenteditable')) {
                element.setAttribute('contenteditable', 'true');
            }
        }
    });

    return doc.body.innerHTML;
}





function askAI() {
    console.log('AskIA()');
    const elementID = document.querySelector('p.template-id').textContent.trim(); // Asegúrate de eliminar espacios extra si los hay
    const elementHTML = document.getElementById(elementID).outerHTML;
    openAskIA(elementID, elementHTML);
}
window.askAI = askAI;

function openAskIA(ID, HTML) {
    console.log('openAskIA(ID, HTML)');
    // Crea el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'ia-container';
    modalContainer.style.position = 'fixed';
    modalContainer.style.top = '50%';
    modalContainer.style.left = '50%';
    modalContainer.style.transform = 'translate(-50%, -50%)';
    modalContainer.style.zIndex = '1000';
    modalContainer.style.backgroundColor = 'white';
    modalContainer.style.padding = '0';
    modalContainer.style.borderRadius = '8px';
    modalContainer.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.1)';
    modalContainer.style.width = '100%';
    modalContainer.style.maxWidth = '600px';
    modalContainer.style.fontFamily = 'system-ui';

    // Crea el contenido del modal
    modalContainer.innerHTML = `
    <div id="ai-anwser">
        <p id="resultText"></p>
        <div id="resultHTML">${HTML}</div>
        <div class="ai-buttons">
            <button id="ai-replace-btn">Remplacer</button>
        </div>
    </div>

    <div id="ai-chat">
    <div class="ai-title">
        <img src="${iconAssistant}">
        <h2 class="ai-header">AI Assistant</h2>
        <select id="ai-select">
            <option value="@chat">Chat</option>
        </select>
        <button id="ai-close"><img src="../global/file/close.svg"></button>
    </div>
        <div class="ai-ask">
            <input id="promptInput" type="text"/>
            <button id="generateBtn">SEND</button>
        </div>

        <div class="ai-ids">
            <div class="htmlID">${ID}</div>
        </div>
    </div>
    `;

    // Agrega el contenedor al cuerpo del documento
    document.body.appendChild(modalContainer);

    // Lógica para el botón "Generate"
    document.getElementById('generateBtn').addEventListener('click', () => {
        // Obtener el valor del select (ya que está oculto, es solo para obtener la opción)
        const selectValue = document.getElementById('ai-select').value.trim();

        // Obtener el HTML del div resultHTML (recuperarlo y convertirlo a una cadena)
        const resultHTML = document.getElementById('resultHTML').innerHTML.trim();

        // Obtener el texto del input
        const inputText = document.getElementById('promptInput').value.trim().toLowerCase();

        if (!inputText) {
            alert('Por favor ingresa algún texto.');
            return;
        }

        // Combinar el valor del select, el HTML del div y el texto del input
        const fullText = `${selectValue} ${inputText} ${resultHTML} `;
        console.log ('fullText'+ fullText);

        // Llamar a la función de manejo de texto con el texto combinado
        handleTextProcessing(fullText);
    });

    // Lógica para el botón "Remplacer"
    document.getElementById('ai-replace-btn').addEventListener('click', () => {
        // Obtén el contenido del div de origen
        const sourceDiv = document.getElementById('resultHTML');
        const contentToInsert = sourceDiv.innerHTML;
        
        // Verificar y agregar IDs y contenteditable a los elementos si no tienen
        const updatedContent = addIdsToHtmlElements(contentToInsert);
        
        // Reemplaza el contenido del elemento con el ID original
        const targetDiv = document.getElementById(ID);
        
        if (targetDiv) {
            targetDiv.outerHTML = updatedContent; // Actualiza el HTML del elemento destino con el nuevo contenido
        } else {
            console.error(`No se encontró ningún elemento con el ID: ${ID}`);
        }
        
        closeIaModal(modalContainer);
    });

    // Lógica para el botón de cierre
    document.getElementById('ai-close').addEventListener('click', () => {
        closeIaModal(modalContainer);
    });
}


function editorMenu() {
    /** NAV BOTTOM */
  var overlay = document.createElement('div'); // Create an overlay
  overlay.className = 'overlay'; // Add a class for styling
  overlay.id = 'overlay'; // Add an id for styling
  overlay.style.display = 'none'; // Initially hide the overlay
  
  var gridWrapper = document.getElementById('grid-wrapper'); // Get the grid-wrapper element
  gridWrapper.appendChild(overlay); // Append the overlay to the grid-wrapper
  
    var openBtn = document.createElement('button');
    openBtn.innerHTML = '<img id="menu" src="../global/file/add-white.svg">';
    openBtn.className = 'nav-style open-editor-btn';
    document.body.appendChild(openBtn);
  
    var closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<img id="menu" src="../global/file/add-white.svg">';
    closeBtn.className = 'nav-style close-editor-btn';
    document.body.appendChild(closeBtn);
  
    var popup = document.createElement('div');
    popup.innerHTML = `
      <div id="popup" class="mobile-box">
        <div id="ai-chat">
          <div class="ai-title">
              <select id="ai-select">
                  <option value="@blog">Blog</option>
              </select>
              <button id="menu-page-save" class="navigation" onclick="pageSaveData()">
                  <img class="editor-icons" src="./assets/svg/icons/save.svg">
              </button>
              <button class="navigation" onclick="pagePublish()">
                  <img class="editor-icons" src="./assets/svg/icons/publish2.svg">
                  
              </button>
              <button class="navigation" onclick="settingsOpenSidebar()">
                 <img class="editor-icons" src="./assets/svg/icons/page-settings.svg">
                 
              </button>
          </div>
          <div class="ai-ask">
              <input id="promptInput" type="text" placeholder="Ecrit un article sur....">
              <button id="generateBtn">SEND</button>
          </div>
  
          
        </div>
  
      </div>
    `;
    popup.style.display = 'none';
    document.body.appendChild(popup);
  
    openBtn.addEventListener('click', function() {
      popup.style.display = 'block';
      // overlay.style.display = 'block'; // Show the overlay
      openBtn.style.display = 'none';
      closeBtn.style.display = 'grid';
    });
  
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
      // overlay.style.display = 'none'; // Hide the overlay
      openBtn.style.display = 'grid';
      closeBtn.style.display = 'none';
    });

  
  }
  window.askAI = editorMenu();

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generateBtn').addEventListener('click', () => {
      // Obtener el texto del input
      const inputText = document.getElementById('promptInput').value.trim().toLowerCase();

      if (!inputText) {
          alert('Por favor ingresa algún texto.');
          return;
      }
      blogExpert(inputText);
    });
  });