
function flexSectionDelete(sectionID) {
  // Obtener el elemento por su ID
  const section = document.getElementById(sectionID);

  // Verificar si el elemento existe antes de borrarlo
  if (section) {
    section.remove();
    console.log(`Elemento con ID "${sectionID}" ha sido eliminado.`);
  } else {
    console.log(`No se encontró ningún elemento con ID "${sectionID}".`);
  }
    
}

// Función para crear un H1
function add_flex_TITLE() {

  let content = `
    <h2 class="grid-title" contenteditable="true">Grid Title</h2>
  `;

  return content;
}

function add_flex_SUBTITLE() {

  let content = `
    <p class="grid-subtitle" contenteditable="true">Grid subtitle</p>
  `;

  return content;
}

function add_grid_icon() {
  const ICONID = generateRandomID(7);
  let content = `
    <grid-menu-item id="${ICONID}">
      <grid-menu-icon class="material-symbols-outlined">emoji_events</grid-menu-icon>
      <grid-menu-title>Menu</grid-menu-title>
    </grid-menu-item>
  `;

  return content;
}

// Función para crear un H1
function add_flex_h1() {
  const elementID = generateRandomID(7);
  let content = `<h1 id="${elementID}" class="grid-h1" contenteditable="true" style="grid-column: 1 / -1;">Titre h1</h1>`;
  return content;
}

// Función para crear un H2
function add_flex_h2() {
  const elementID = generateRandomID(7);
  let content = `<h2 id="${elementID}" class="grid-h2" contenteditable="true" style="grid-column: 1 / -1;">Titre h2</h2>`;
  return content;
}

function add_flex_h3() {
  const elementID = generateRandomID(7);
  let content = `<h3 id="${elementID}" class="grid-h3" contenteditable="true" style="grid-column: 1 / -1;">Titre h3</h3>`;
  return content;
}

function add_flex_h4() {
  const elementID = generateRandomID(7);
  let content = `<h4 id="${elementID}" class="grid-h4" contenteditable="true" style="grid-column: 1 / -1;">Titre h4</h4>`;
  return content;
}

function add_flex_h5() {
  const elementID = generateRandomID(7);
  let content = `<h5 id="${elementID}" class="grid-h5" contenteditable="true" style="grid-column: 1 / -1;">Titre h5</h5>`;
  return content;
}

function add_flex_h6() {
  const elementID = generateRandomID(7);
  let content = `<h6 id="${elementID}" class="grid-h6" contenteditable="true" style="grid-column: 1 / -1;">Titre h6</h6>`;
  return content;
}

function add_flex_p() {
  const elementID = generateRandomID(7);
  let content = `<p id="${elementID}" class="grid-p" contenteditable="true" style="grid-column: 1 / -1;">Titre p</p>`;
  return content;
}


function add_flex_a() {
  const elementID = generateRandomID(7);
  let content = `<a id="${elementID}" class="grid-a" contenteditable="true" style="grid-column: 1 / -1;">Titre a</a>`;
  return content;
}

function add_grid_box_cols() {
  const CONTAINERID = generateRandomID(7);
  const BOXID = generateRandomID(7);

  let content = `
  <grid-box-container id="${CONTAINERID}" class="grid-box-cols">
    <grid-box id="${BOXID}" contenteditable="true"></grid-box>
    <grid-edit class="grid-edit">
      ${addBox1Buttons(BOXID,CONTAINERID)}
    </grid-edit>
  </grid-box-container>  
  `;

  return content;
}

function add_grid_box() {
  const CONTAINERID = generateRandomID(7);
  const BOXID = generateRandomID(7);

  let content = `
  <grid-box-container id="${CONTAINERID}" >
    <grid-box id="${BOXID}" contenteditable="true"></grid-box>
    <grid-edit-box class="grid-edit-box no-export">
      ${addBox1Buttons(BOXID,CONTAINERID)}
    </grid-edit-box>
  </grid-box-container>  
  `;

  return content;
}

// Función para crear un párrafo (P)
function add_flex_OL() {

  let content = `
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
  `;

  return content;
}

// Función para crear un párrafo (P)
function add_flex_UL() {

  let content = `
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  `;

  return content;
}
function add_flex_IMG(){
  const imageID = generateRandomID(7); 
  let content = `
  <img id="${imageID}"
  contenteditable="true"
  src="https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHw2N3x8cGFzdGVsfGVufDB8MHx8fDE3MjU1NTMzNTZ8MA&ixlib=rb-4.0.3&w=1280&h=720&fit=crop" 
  data-type="image-fg" 
  loading="lazy">
  `;
  return content;
}

function add_flex_VID(){
  const videoID = generateRandomID(7); 
  let content = `

  <video id="${videoID}"
  autoplay 
  loop 
  muted 
  data-type="video-fg" 
  loading="lazy" 
  src="https://github.com/IAMEDIA360/videos/raw/main/1795203691-1.mp4">
  </video>    
  `;
  return content;
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

// Función para añadir contenido dinámicamente
function addContent(ID, content, position) {
  const element = document.getElementById(ID);
  element.insertAdjacentHTML(position, content);
}

// Función para remover un elemento por ID
function removeContent(ID) {
  const element = document.getElementById(ID);
  if (element) {
    element.remove();
  } else {
    console.error(`No se encontró ningún elemento con el ID: ${ID}`);
  }
}



// Otras funciones para generar contenido (add_GridBox2, add_flex_H1, etc.) permanecen igual

// Función para abrir el menú de opciones

function sectionGridItems(ID) {
  closeGridCols(); // Cerrar cualquier menú abierto antes de crear uno nuevo
  
  const menu = document.createElement('div');
  menu.className = 'grid-cols-modal';
  menu.innerHTML = `
    
  <div class = "grid-cols-buttons" data-type="grid-cols">
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_h1(), 'beforeend')">H1</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_h2(), 'beforeend')">H2</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_h3(), 'beforeend')">H3</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_h4(), 'beforeend')">H4</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_h5(), 'beforeend')">H5</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_h6(), 'beforeend')">H6</button>

    <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_p(), 'beforeend')">P</button>
    
    <button class = "grid-cols-button grid-cols-close" onclick="closeGridCols()">Close</button>
  </div>  
  `;
  document.body.appendChild(menu);
}

function openFlexItems(ID) {
  closeOptionsMenu(); // Cerrar cualquier menú abierto antes de crear uno nuevo
  
  const menu = document.createElement('div');
  menu.className = 'options-menu';
  menu.innerHTML = `
    
  <div class = "grid-tools" data-type="grid-tools">  

  <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_h1(), 'beforeend')">H1</button>
  <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_h2(), 'beforeend')">H2</button>
  <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_h3(), 'beforeend')">H3</button>
  <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_h4(), 'beforeend')">H4</button>
  <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_p(), 'beforeend')">P</button>
  <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_ol(), 'beforeend')">OL</button>
  <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_ul(), 'beforeend')">UL</button>
  <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_img(), 'beforeend')">IMG</button>
  <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_vid(), 'beforeend')">VID</button>
  <button class = "grid-tools-item" onclick="addContent('${ID}', add_flex_a(), 'beforeend')">BTN</button>
  <button class = "grid-tools-item" onclick="addContent('${ID}', add_grid_box(), 'beforeend')">BOX</button>
  <button class = "grid-tools-item" onclick="addContent('${ID}', add_grid_icon(), 'beforeend')">ICON</button>
    
  <button class="grid-tools-item grid-tools-close" onclick="closeOptionsMenu()">Cancelar</button>
  </div>  
  `;
  document.body.appendChild(menu);
}

// Función para cerrar el menú de opciones
function closeOptionsMenu() {
  const menu = document.querySelector('.options-menu');
  if (menu) {
    menu.remove();
  }
}
function add_flex_col_1() {
  const flexID1 = generateRandomID(7); 
  return `
    <flex-box1 id="${flexID1}" class="box flex-100-percent">
      ${addBox1Buttons(flexID1)}
      ${add_fake_div()}
    </flex-box1>
  `;
}
function add_flex_col_2() {
  const flexID1 = generateRandomID(7); // Genera un ID único para cada grid-flexID
  const flexID2 = generateRandomID(7); 
  return `
    <flex-box1 id="${flexID1}" class="box flex-50-percent">
      ${addBox1Buttons(flexID1)}
      ${add_fake_div()}
    </flex-box1>

    <flex-box1 id="${flexID2}" class="box flex-50-percent">
      ${addBox1Buttons(flexID2)}
      ${add_fake_div()}
    </flex-box1>

  `;
}
function add_flex_col_3() {
  const flexID1 = generateRandomID(7); // Genera un ID único para cada grid-flexID
  const flexID2 = generateRandomID(7); 
  const flexID3 = generateRandomID(7); 
  return `
    <flex-box1 id="${flexID1}" class="box flex-33-percent">
      ${addBox1Buttons(flexID1)}
      ${add_fake_div()}
    </flex-box1>

    <flex-box1 id="${flexID2}" class="box flex-33-percent">
      ${addBox1Buttons(flexID2)}
      ${add_fake_div()}
    </flex-box1>

    <flex-box1 id="${flexID3}" class="box flex-33-percent">
      ${addBox1Buttons(flexID3)}
      ${add_fake_div()}
    </flex-box1>
  
  `;
}
function add_flex_col_4() {
  const flexID1 = generateRandomID(7); // Genera un ID único para cada grid-flexID
  const flexID2 = generateRandomID(7); 
  const flexID3 = generateRandomID(7); 
  const flexID4 = generateRandomID(7); 
  return `
    <flex-box1 id="${flexID1}" class="box flex-33-percent">
      ${addBox1Buttons(flexID1)}
      ${add_fake_div()}
    </flex-box1>

    <flex-box1 id="${flexID2}" class="box flex-33-percent">
      ${addBox1Buttons(flexID2)}
      ${add_fake_div()}
    </flex-box1>

    <flex-box1 id="${flexID3}" class="box flex-33-percent">
      ${addBox1Buttons(flexID3)}
      ${add_fake_div()}
    </flex-box1>

    <flex-box1 id="${flexID4}" class="box flex-33-percent">
      ${addBox1Buttons(flexID4)}
      ${add_fake_div()}
    </flex-box1>
  `;
}
function add_flex_col_5() {
  const flexID1 = generateRandomID(7); // Genera un ID único para cada grid-flexID
  const flexID2 = generateRandomID(7); 
  const flexID3 = generateRandomID(7); 
  const flexID4 = generateRandomID(7);
  const flexID5 = generateRandomID(7); 
  return `
    <flex-box1 id="${flexID1}" class="box flex-33-percent">
      ${addBox1Buttons(flexID1)}
      ${add_fake_div()}
    </flex-box1>

    <flex-box1 id="${flexID2}" class="box flex-33-percent">
      ${addBox1Buttons(flexID2)}
      ${add_fake_div()}
    </flex-box1>

    <flex-box1 id="${flexID3}" class="box flex-33-percent">
      ${addBox1Buttons(flexID3)}
      ${add_fake_div()}
    </flex-box1>

    <flex-box1 id="${flexID4}" class="box flex-33-percent">
      ${addBox1Buttons(flexID4)}
      ${add_fake_div()}
    </flex-box1>

    <flex-box1 id="${flexID5}" class="box flex-33-percent">
      ${addBox1Buttons(flexID5)}
      ${add_fake_div()}
    </flex-box1>
  `;
}
function add_flex_resize() {
  const flexID1 = generateRandomID(7); 
  return `
    <flex-box1 id="${flexID1}" class="box resize-horizontal">
      ${addBox1Buttons(flexID1)}
      ${add_fake_div()}
    </flex-box1>
    
  `;
}

function add_flex_box1() {
  // alert('v3');
  const flexbox1ID = generateRandomID(7); 
  return `
    <flex-box1 id="${flexbox1ID}" class="flex-box1">
      ${addBox1Buttons(flexbox1ID)}
      ${add_fake_div()}
    </flex-box1>
    
  `;
}

function add_fake_div() {
  return `
    <div contenteditable="false" class="fake-div"></div>
  `;
}





// Función para manejar el clic en los detalles
document.addEventListener('click', function(event) {
  if (event.target.tagName === 'SUMMARY') {
    const allDetails = document.querySelectorAll('.toggle-details');
    allDetails.forEach(details => {
      if (details !== event.target.parentElement) {
        details.removeAttribute('open');
      }
    });
  }
});

// Función para cerrar el menú de opciones
function closeGridCols() {
  const menu = document.querySelector('.grid-cols-modal');
  if (menu) {
    menu.remove();
  }
}


function openAlignModal(boxID) {
  // Cerrar cualquier modal que esté abierto
  const modals = document.querySelectorAll('[id^="align-modal-"]');
  modals.forEach(modal => {
    modal.style.display = "none";
  });

  // Abrir el modal correspondiente
  document.getElementById(`align-modal-${boxID}`).style.display = "block";
}

function closeAlignModal(boxID) {
  document.getElementById(`align-modal-${boxID}`).style.display = "none";
}



function placeContent(BOXID, STYLE) {
  const container = document.getElementById(BOXID);
  if (container) {
    container.style.display = 'flex'; 
    container.style.placeContent = STYLE; 
  }
}


function changeBoxColor(BOXID, color) {
  const box = document.getElementById(BOXID);
  box.style.backgroundColor = color;  // Cambia el color de fondo al seleccionado

  // Actualiza el color del botón circular
  const colorPickerButton = document.querySelector(`label[for="color-picker-${BOXID}"]`);
  colorPickerButton.style.backgroundColor = color;
}





function flex_edit_box1_buttons(ID) {
  // Crea un div contenedor
  const div = document.createElement('div');
  div.className = 'box-edit-buttons';

  // Crea el botón de agregar
  const addButton = document.createElement('button');
  addButton.setAttribute('contenteditable', 'false');
  addButton.className = 'always-at-end no-export';
  addButton.innerHTML = '+';
  addButton.onclick = function() {
      openFlexItems(ID);
  };

  // Crea el botón de eliminar
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('contenteditable', 'false');
  deleteButton.className = 'delete-grid no-export';
  deleteButton.innerHTML = '-';
  deleteButton.onclick = function() {
      removeContent(ID);
  };

  // Añadir los botones al div
  div.appendChild(addButton);
  div.appendChild(deleteButton);

  // Retorna el div con los botones
  return div;
}

function padding(BOXID, min, preferred, max) {
  const container = document.getElementById(BOXID);
  if (container) {
    container.style.padding = `clamp(${min}, ${preferred}, ${max})`;
  }
}

function applyPadding(BOXID) {
  // Obtener los valores de los campos de entrada usando los IDs únicos generados
  const min = document.getElementById(`min-padding-${BOXID}`).value;
  const preferred = document.getElementById(`preferred-padding-${BOXID}`).value;
  const max = document.getElementById(`max-padding-${BOXID}`).value;

  // Llamar a la función padding con los valores obtenidos
  padding(BOXID, min, preferred, max);
}

function applyFlexProperties(BOXID, basis, shrink, grow) {
  const container = document.getElementById(BOXID);
  if (container) {
    container.style.flexBasis = basis;
    container.style.flexShrink = shrink;
    container.style.flexGrow = grow;
  }
}

function setFlexProperties(BOXID) {
  const basis = document.getElementById(`flex-basis-${BOXID}`).value;
  const shrink = document.getElementById(`flex-shrink-${BOXID}`).value;
  const grow = document.getElementById(`flex-grow-${BOXID}`).value;

  applyFlexProperties(BOXID, basis, shrink, grow);
}



function addBox1Buttons(BOXID, CONTAINERID) {
  return `
  
    
    <div contenteditable="false" class="section-info">Box</div>
    <button 
      contenteditable="false" 
      class="no-export" 
      onclick="openFlexItems('${BOXID}')">
      +
    </button>
    <button 
      contenteditable="false"
      class="delete-grid no-export"
      onclick="removeContent('${CONTAINERID}')">
      -
    </button>
    <button 
      contenteditable="false" 
      class="align-items-button no-export" 
      onclick="openAlignModal('${BOXID}')">
      &#8942;
    </button>

    <div id="align-modal-${BOXID}" class="align-modal" style="display:none">
      <div class="align-modal-content">

      <details class="toggle-details">
      <summary>Flex Direction</summary>

        <div class="flexDirection">
          
          <button 
            data-boxid="${BOXID}" 
            data-category="flexDirection"
            data-style="row"
            onclick="flexDirection('${BOXID}', 'row')">row</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="flexDirection"
            data-style="column"
            data-choice="selected"
            onclick="flexDirection('${BOXID}', 'column')">column</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="flexDirection"
            data-style="row-reverse"
            onclick="flexDirection('${BOXID}', 'row-reverse')">row-reverse</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="flexDirection"
            data-style="column-reverse"
            onclick="flexDirection('${BOXID}', 'column-reverse')">column-reverse</button>
        </div>

        </details>

        <details class="toggle-details">
          <summary>Flex Wrap</summary>

        <div class="flexWrap">
          
          <button 
            data-boxid="${BOXID}" 
            data-category="flexWrap"
            data-style="nowrap" 
            onclick="flexWrap('${BOXID}', 'nowrap')">nowrap</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="flexWrap"
            data-style="wrap"
            data-choice="selected"
            onclick="flexWrap('${BOXID}', 'wrap')">wrap</button>
        </div>

        </details>

        <details class="toggle-details">
          <summary>Background Color</summary>

        <div class="flexColor">
          
          <label for="color-picker-${BOXID}" 
          class="color-picker-button no-export" 
          style="background-color: #ffffff; border-radius: 50%; width: 25px; height: 25px; display: inline-block; border: 2px solid #000;">
          </label>
    
          <input 
          type="color" 
          id="color-picker-${BOXID}" 
          class="color-picker no-export" 
          oninput="changeBoxColor('${BOXID}', this.value)" 
          value="#ffffff" 
          style="display: none;">
          </div>

        </details>

        <details class="toggle-details">
            <summary>Space</summary>
            <div class="Padding">
              
              <label for="min-padding-${BOXID}">Min:</label>
              <input type="text" id="min-padding-${BOXID}" value="35px">

              <label for="preferred-padding-${BOXID}">Preferred:</label>
              <input type="text" id="preferred-padding-${BOXID}" value="3vw">

              <label for="max-padding-${BOXID}">Max:</label>
              <input type="text" id="max-padding-${BOXID}" value="50px">

              <button onclick="applyPadding('${BOXID}')">Set Padding</button>
            </div>
          </details>

          <details class="toggle-details">
          <summary>Flex Properties</summary>
          <div class="FlexProperties">

            <label for="flex-basis-${BOXID}">Flex Basis:</label>
            <input type="text" id="flex-basis-${BOXID}" value="0">

            <label for="flex-shrink-${BOXID}">Flex Shrink:</label>
            <input type="text" id="flex-shrink-${BOXID}" value="1">

            <label for="flex-grow-${BOXID}">Flex Grow:</label>
            <input type="text" id="flex-grow-${BOXID}" value="1">

            <button onclick="setFlexProperties('${BOXID}')">Set Flex Properties</button>
          </div>
        </details>


        <details class="toggle-details">
          <summary>Place Content</summary>

        <div class="placeContent">
          
          <button 
            data-boxid="${BOXID}" 
            data-category="placeContent"
            data-style="start"
            data-choice="selected"
            onclick="placeContent('${BOXID}', 'start')">start</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="placeContent"
            data-style="start center"
            onclick="placeContent('${BOXID}', 'start center')">start center</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="placeContent"
            data-style="start end" 
            onclick="placeContent('${BOXID}', 'start end')">start end</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="placeContent"
            data-style="center start" 
            onclick="placeContent('${BOXID}', 'center start')">center start</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="placeContent"
            data-style="center" 
            onclick="placeContent('${BOXID}', 'center')">center</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="placeContent"
            data-style="center end" 
            onclick="placeContent('${BOXID}', 'center end')">center end</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="placeContent"
            data-style="end start" 
            onclick="placeContent('${BOXID}', 'end start')">end start</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="placeContent"
            data-style="end center" 
            onclick="placeContent('${BOXID}', 'end center')">end center</button>
          <button 
            data-boxid="${BOXID}" 
            data-category="placeContent"
            data-style="end end" 
            onclick="placeContent('${BOXID}', 'end')">end</button>
        </div>
        </details>

        

        <span class="align-close" onclick="closeAlignModal('${BOXID}')">&times;</span>
      </div>
    </div>
  
  `;
}

function showContent(tabId) {
      var tabs = document.querySelectorAll('.tab-content');
      tabs.forEach(function(tab) {
        tab.classList.remove('active');
      });
      document.getElementById(tabId).classList.add('active');
    }

function updateButtonStyles(buttons, selectedButton) {
  buttons.forEach(button => {
    if (button === selectedButton) {
      button.setAttribute('data-choice', 'selected');
    } else {
      button.removeAttribute('data-choice');
    }
  });
}
function flexDirection(BOXID, STYLE) {
  const container = document.getElementById(BOXID);
  const buttons = document.querySelectorAll(`button[data-boxid="${BOXID}"][data-category="flexDirection"]`);
  
  if (container) {
    container.style.display = 'flex'; 
    container.style.flexDirection = STYLE; 
    
    const selectedButton = document.querySelector(`button[data-boxid="${BOXID}"][data-category="flexDirection"][data-style="${STYLE}"]`);
    updateButtonStyles(buttons, selectedButton);
  }
}

function flexWrap(BOXID, STYLE) {
  const container = document.getElementById(BOXID);
  const buttons = document.querySelectorAll(`button[data-boxid="${BOXID}"][data-category="flexWrap"]`);
  
  if (container) {
    container.style.flexWrap = STYLE;

    const selectedButton = document.querySelector(`button[data-boxid="${BOXID}"][data-category="flexWrap"][data-style="${STYLE}"]`);
    updateButtonStyles(buttons, selectedButton);
  }
}

function placeContent(BOXID, STYLE) {
  const container = document.getElementById(BOXID);
  const buttons = document.querySelectorAll(`button[data-boxid="${BOXID}"][data-category="placeContent"]`);
  
  if (container) {
    container.style.placeContent = STYLE;

    const selectedButton = document.querySelector(`button[data-boxid="${BOXID}"][data-category="placeContent"][data-style="${STYLE}"]`);
    updateButtonStyles(buttons, selectedButton);
  }
}



