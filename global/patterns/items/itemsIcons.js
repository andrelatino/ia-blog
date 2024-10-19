function itemsIcons(gridBoxId, addButtonId, iconName) {
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
    const customItemHTML = `  
      <grid-item id="${gridItem}">
        <item-head id="${generateRandomID(7)}">
          <span id="${generateRandomID(7)}" class="material-symbols-outlined" data-type="icon-fg">'${iconName}'</span>
        </item-head>
        <item-body id="${generateRandomID(7)}">
          <item-desc id="${generateRandomID(7)}" contenteditable="true">Lorem</item-title>
        </item-body>
        <button class="no-export grid-delete-item" onclick="deleteItem('${gridItem}')">-</button>
      </grid-item>
    `;

    // Crear un elemento temporal para contener el HTML
    const tempElement = document.createElement('div');
    tempElement.innerHTML = customItemHTML;
    const newItem = tempElement.firstElementChild;
    // Insertar el nuevo ítem justo antes del botón 'Add'
    gridBox.insertBefore(newItem, addButton);
    // Desplazar la vista al nuevo ítem
    // newItem.scrollIntoView({ behavior: "smooth" });
}

function deleteItem(itemId) {
  const item = document.getElementById(itemId);
  if (item) {
      item.remove();
  } else {
      console.error("Item to delete not found.");
  }
}