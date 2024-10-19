// Función para crear el HTML de grid-box1 con un ID específico

function add_box_1_12() {
  console.log('add_GridBox1()');
  const box1 = generateRandomID(7); // Genera un ID único para cada grid-box1
  
  return `
    <grid-box1 id="${box1}" style="grid-column: span 1;">
    <!-- grid-box1 -->
      <p class="grid-id-info no-export">grid-box1 : ${box1}</p>
      <div class="grid-edit-buttons"> 
        <button 
            contenteditable="false" 
            class="always-at-end no-export" 
            onclick="openOptionsMenu('${box1}')">
            +
        </button>
        <button 
          contenteditable="false"
          class="delete-grid no-export"
          onclick="removeContent('${box1}')">
          -
        </button>
      </div>
    </grid-box1>
  `;
}


function add_box_2_12() {
  const box1 = generateRandomID(7); // Genera un ID único para cada grid-box1
  
  return `
    <grid-box1 id="${box1}" style="grid-column: span 2;">
    <!-- grid-box1 -->
      <p class="grid-id-info no-export">grid-box1 : ${box1}</p>
      <div class="grid-edit-buttons"> 
        <button 
            contenteditable="false" 
            class="always-at-end no-export" 
            onclick="openOptionsMenu('${box1}')">
            +
        </button>
        <button 
          contenteditable="false"
          class="delete-grid no-export"
          onclick="removeContent('${box1}')">
          -
        </button>
      </div>
    </grid-box1>
  `;
}

function add_BOX1() {
  console.log('add_GridBox1()');
  const box1 = generateRandomID(7); // Genera un ID único para cada grid-box1
  
  return `
    <grid-box1 id="${box1}" style="grid-column: span 12;">
    <!-- grid-box1 -->
      <p class="grid-id-info no-export">grid-box1 : ${box1}</p>
      <div class="grid-edit-buttons"> 
        <button 
            contenteditable="false" 
            class="always-at-end no-export" 
            onclick="openOptionsMenu('${box1}')">
            +
        </button>
        <button 
          contenteditable="false"
          class="delete-grid no-export"
          onclick="removeContent('${box1}')">
          -
        </button>
      </div>
    </grid-box1>
  `;
}

function add_BOX2() {
  console.log('add_GridBox1()');
  const box1 = generateRandomID(7);
  const box2 = generateRandomID(7);
  
  return `
    <grid-box1 id="${box1}" style="grid-column: span 6;">
    <!-- grid-box1 -->
      <p class="grid-id-info no-export">grid-box1 : ${box1}</p>
      <div class="grid-edit-buttons"> 
        <button 
            contenteditable="false" 
            class="always-at-end no-export" 
            onclick="openOptionsMenu('${box1}')">
            +
        </button>
        <button 
          contenteditable="false"
          class="delete-grid no-export"
          onclick="removeContent('${box1}')">
          -
        </button>
      </div>
    </grid-box1>
    <grid-box1 id="${box2}" style="grid-column: span 6;">
    <!-- grid-box2 -->
      <p class="grid-id-info no-export">grid-box1 : ${box2}</p>
      <div class="grid-edit-buttons"> 
        <button 
            contenteditable="false" 
            class="always-at-end no-export" 
            onclick="openOptionsMenu('${box2}')">
            +
        </button>
        <button 
          contenteditable="false"
          class="delete-grid no-export"
          onclick="removeContent('${box2}')">
          -
        </button>
      </div>
    </grid-box1>
  `;
}

function add_BOX3() {
  console.log('add_GridBox3()');
  const box1 = generateRandomID(7);
  const box2 = generateRandomID(7);
  const box3 = generateRandomID(7);
  
  return `
    <grid-box1 id="${box1}" style="grid-column: span 4;">
    <!-- grid-box1 -->
      <p class="grid-id-info no-export">grid-box1 : ${box1}</p>
      <div class="grid-edit-buttons"> 
        <button 
            contenteditable="false" 
            class="always-at-end no-export" 
            onclick="openOptionsMenu('${box1}')">
            +
        </button>
        <button 
          contenteditable="false"
          class="delete-grid no-export"
          onclick="removeContent('${box1}')">
          -
        </button>
      </div>
    </grid-box1>
    <grid-box1 id="${box2}" style="grid-column: span 4;">
    <!-- grid-box2 -->
      <p class="grid-id-info no-export">grid-box1 : ${box2}</p>
      <div class="grid-edit-buttons"> 
        <button 
            contenteditable="false" 
            class="always-at-end no-export" 
            onclick="openOptionsMenu('${box2}')">
            +
        </button>
        <button 
          contenteditable="false"
          class="delete-grid no-export"
          onclick="removeContent('${box2}')">
          -
        </button>
      </div>
    </grid-box1>
    <grid-box1 id="${box3}" style="grid-column: span 4;">
    <!-- grid-box2 -->
      <p class="grid-id-info no-export">grid-box1 : ${box3}</p>
      <div class="grid-edit-buttons"> 
        <button 
            contenteditable="false" 
            class="always-at-end no-export" 
            onclick="openOptionsMenu('${box3}')">
            +
        </button>
        <button 
          contenteditable="false"
          class="delete-grid no-export"
          onclick="removeContent('${box3}')">
          -
        </button>
      </div>
    </grid-box1>
  `;
}

// Función para crear el HTML de grid-box2 con un ID específico
// function add_GridBox2(option) {
//   const gridbox2ID = generateRandomID(7); 
//   console.log('add_GridBox2()');
  
//   let content = `
//     <grid-box2 id="${gridbox2ID}" data-type="grid-box2"></grid-box2>
//   `;

//   return content;
// }

// Función para crear un H1
function add_H1() {

  let content = `
    <h1 class="style="grid-column: span 12;"">Este es un H1</h1>
  `;

  return content;
}

// Función para crear un H2
function add_H2() {

  let content = `
    <h2>Este es un H2</h2>
  `;

  return content;
}

function add_H3() {

  let content = `
    <h3>Este es un H3</h2>
  `;

  return content;
}
function add_H4() {

  let content = `
    <h4>Este es un H4</h4>
  `;

  return content;
}
// Función para crear un párrafo (P)
function add_P() {

  let content = `
    <p>Intellectum est enim mihi quidem in multis, et maxime in me ipso, sed paulo ante in omnibus, cum M. Marcellum senatui reique publicae concessisti, commemoratis praesertim offensionibus, te auctoritatem huius ordinis dignitatemque rei publicae tuis vel doloribus vel suspicionibus anteferre</p>
  `;

  return content;
}

// Función para crear un párrafo (P)
function add_OL() {

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
function add_UL() {

  let content = `
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  `;

  return content;
}
function add_IMG(){
  let content = `
  <img id='${imageID}' src="https://images.unsplash.com/photo-1502622796232-e88458466c33?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHwyOHx8Y29sb3JzfGVufDB8MHx8fDE3MTY2NjQ0NjJ8MA&amp;ixlib=rb-4.0.3&amp;w=200&amp;h=200&amp;fit=crop"  data-type="image-fg" loading="lazy"></img>
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



// Otras funciones para generar contenido (add_GridBox2, add_H1, etc.) permanecen igual

// Función para abrir el menú de opciones
function openOptionsMenu(ID) {
  closeOptionsMenu(); // Cerrar cualquier menú abierto antes de crear uno nuevo
  
  const menu = document.createElement('div');
  menu.className = 'options-menu';
  menu.innerHTML = `
    
  <div class = "grid-tools" data-type="grid-tools">  
    
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_H1(), 'beforeend')">H1</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_H2(), 'beforeend')">H2</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_H3(), 'beforeend')">H3</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_H4(), 'beforeend')">H4</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_P(), 'beforeend')">P</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_OL(), 'beforeend')">OL</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_UL(), 'beforeend')">UL</button>
    <button class = "grid-tools-item" onclick="addContent('${ID}', add_IMG(), 'beforeend')">IMG</button>
    
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

function addGridCols(ID) {
  closeGridCols(); // Cerrar cualquier menú abierto antes de crear uno nuevo
  
  const menu = document.createElement('div');
  menu.className = 'grid-cols-modal';
  menu.innerHTML = `
    
  <div class = "grid-cols-buttons" data-type="grid-cols">
  
    
    <button class = "grid-cols-button" onclick="addContent('${ID}', add_box_1_12(), 'beforeend')">COL 1/12</button>
    <button class = "grid-cols-button" onclick="addContent('${ID}', add_box_2_12(), 'beforeend')">COL 2/12</button>

    <button class = "grid-cols-button" onclick="addContent('${ID}', add_BOX1(), 'beforeend')">1 COL</button>
    <button class = "grid-cols-button" onclick="addContent('${ID}', add_BOX2(), 'beforeend')">2 COLS</button>
    <button class = "grid-cols-button" onclick="addContent('${ID}', add_BOX3(), 'beforeend')">3 COLS</button>
    
    
    <button class="grid-cols-button grid-cols-close" onclick="closeGridCols()">Cancelar</button>
  </div>  
  `;
  document.body.appendChild(menu);
}

// Función para cerrar el menú de opciones
function closeGridCols() {
  const menu = document.querySelector('.grid-cols-modal');
  if (menu) {
    menu.remove();
  }
}
