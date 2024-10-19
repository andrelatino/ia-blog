function products175x100(gridBoxId, addButtonId, gridItemImage) {

  function randomNumberID(length) {
    var result = '';
    var characters = '1234567890'; // Debe ser una cadena de texto
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

    const gridBox = document.getElementById(gridBoxId);
    if (!gridBox) {
      console.error("Grid box element not found.");
      return;
    }
  
    // Suponiendo que el ID del botón es 'addButton'
    const addButton = document.getElementById(addButtonId);
    if (!addButton) {
      console.error("Add button not found.");
      return;
    }
  
    const gridItem = generateRandomID(7);
    const prodID = randomNumberID(10);
    const prodName = generateRandomID(7);
    const prodPrice = generateRandomID(7);
    

    const customItemHTML = `  
      <grid-item id="${gridItem}">
        <item-head id="${generateRandomID(7)}">
          <img id="${generateRandomID(7)}" src="${gridItemImage}" height="200" width="200" data-type="image-fg" loading="lazy">
        </item-head>
        <item-body id="${generateRandomID(7)}">
          <product-id id="${prodID}" style="display:none;">${prodID}</product-id>
          <product-name id="${prodName}" class="product-name" contenteditable="true">Lorem ipsum</product-name>
          <product-details id="${prodName}" class="product-details" contenteditable="true">Lorem ipsum</product-details>
          <product-price class="product-price" id="${prodPrice}" contenteditable="true">100</product-price>
        </item-body>
        <item-footer id="${generateRandomID(7)}">
          <button id="${generateRandomID(7)}" class="add-to-cart" onClick="getProductDetails('${prodID}', '${prodName}', '${prodPrice}')" ><span contenteditable="true">Add to cart</span></button>
        </item-footer>
        <button class="no-export grid-delete-item" onclick="deleteItem('${gridItem}')">-</button>
      </grid-item>
    `;

    // Crear un elemento temporal para contener el HTML
    const tempElement = document.createElement('div');
    tempElement.innerHTML = customItemHTML;
    const newItem = tempElement.firstElementChild;
  
    // Insertar el nuevo ítem justo antes del botón 'Add'
    gridBox.insertBefore(newItem, addButton);

  }
  

function deleteItem(itemId) {
  const item = document.getElementById(itemId);
  if (item) {
      item.remove();
  } else {
      console.error("Item to delete not found.");
  }
}