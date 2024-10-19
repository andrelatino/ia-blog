function itemsLinks(gridBoxId, addButtonId) {
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
    const itemsLinks =  generateRandomID(7);
    const customItemHTML = `  
    <grid-item id="${itemsLinks}">
        <a id="${generateRandomID(7)}" href="#" data-type="a-link">Lorem </a>
        <button class="no-export button-delete-item" onclick="deleteItem('${itemsLinks}')">-</button>
    </grid-item>
    `;

    // Crear un elemento temporal para contener el HTML
    const tempElement = document.createElement('a');
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
