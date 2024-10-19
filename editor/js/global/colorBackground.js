function colorModal(sectionId) {
    const modalStyles = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;

    const modal = document.createElement('div');
    modal.id = "color-modal"
    modal.style.cssText = modalStyles;

    // Background color picker for grid items
    const gridColor = createColorPicker('Grid BG', 'gridColor', () => 
        updateColor(sectionId, 'bg-color', 'backgroundColor', 'gridColor'));

    // Border color picker for border grids
    const gridTitle = createColorPicker('Grid Title', 'gridTitle', () =>
    updateColor(sectionId, 'grid-title', 'color', 'gridTitle'));

    // Border color picker for border grids
    const gridDesc = createColorPicker('Grid Desc', 'gridDesc', () =>
    updateColor(sectionId, 'grid-desc', 'color', 'gridDesc'));

    // Text color picker for text items
    const itemsColor = createColorPicker('Grid Items', 'itemsColor', () =>
        updateColor(sectionId, 'grid-item', 'backgroundColor', 'itemsColor'));

    // Border color picker for border items
    const itemTitle = createColorPicker('Item Title', 'itemTitle', () =>
        updateColor(sectionId, 'item-title', 'color', 'itemTitle'));

          // Border color picker for border items
    const itemDesc = createColorPicker('Item Desc', 'itemDesc', () =>
    updateColor(sectionId, 'item-desc', 'color', 'itemDesc'));

    // Append all pickers to modal
    modal.appendChild(gridColor);
    modal.appendChild(gridTitle);
    modal.appendChild(gridDesc);
    modal.appendChild(itemsColor);
    modal.appendChild(itemTitle);
    modal.appendChild(itemDesc);

    // Append modal to body
    document.body.appendChild(modal);
}

function createColorPicker(labelText, pickerId, eventHandler) {
    const wrapper = document.createElement('div');
    wrapper.className = "wrapper";
    const label = document.createElement('label');
    label.textContent = labelText;
    const colorPicker = document.createElement('input');
    colorPicker.className = "inputcolor";
    colorPicker.type = 'color';
    colorPicker.id = pickerId;
    colorPicker.name = pickerId;
    colorPicker.addEventListener('input', eventHandler);
    
    wrapper.appendChild(colorPicker);
    wrapper.appendChild(label);
    return wrapper;
}

function updateColor(sectionId, elementSelector, cssProperty, pickerId) {
    const selectedColor = document.getElementById(pickerId).value;
    const section = document.getElementById(sectionId);
    if (section) {
        const elements = section.querySelectorAll(elementSelector);
        elements.forEach(element => {
            element.style[cssProperty] = selectedColor;
        });
    } else {
        console.error('Section not found!');
    }
}
function callColorTest(){
    const getSectionID = document.getElementById('toolbarSectionID').textContent;
    colorModal(getSectionID);
}

document.addEventListener('DOMContentLoaded', function() {
    // Assuming toolbarSectionID is an input field or any element with contentEditable true
    const toolbarSection = document.getElementById('toolbarSectionID');

    // Listen for input changes on the specified element
    toolbarSection.addEventListener('input', function() {
        const getSectionID = toolbarSection.textContent;  // or toolbarSection.value if it's an input field
        colorModal(getSectionID);
    });
});
