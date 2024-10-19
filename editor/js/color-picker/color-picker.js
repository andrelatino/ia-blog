

let picker_currentElementId = '';
let picker_currentElement = null;

// Abrir el modal y mostrar el ID del elemento a colorear
function picker_openModal(elementId) {
  picker_currentElementId = elementId;
  picker_currentElement = document.getElementById(elementId);
  
  // Crear el modal desde el template si no existe
  if (!document.getElementById('picker_colorModal')) {
    const template = document.getElementById('picker_colorModalTemplate');
    const modalClone = template.content.cloneNode(true);
    document.body.appendChild(modalClone);
  }

  document.getElementById('picker_elementId').textContent = elementId;
  document.getElementById('picker_colorModal').style.display = 'block';

  // Cargar valores actuales del color y transparencia
  const computedColor = window.getComputedStyle(picker_currentElement).backgroundColor;
  const rgba = computedColor.match(/\d+/g);
  const hexColor = picker_rgbToHex(rgba[0], rgba[1], rgba[2]);
  const alphaValue = rgba[3] ? rgba[3] / 255 : 1;

  document.getElementById('picker_colorPicker').value = hexColor;
  document.getElementById('picker_alphaRange').value = alphaValue;
  picker_updateAlphaPercentage(alphaValue * 100); // Actualizamos porcentaje de transparencia

  // Añadir evento listener al slider si no existe
  const alphaRange = document.getElementById('picker_alphaRange');
  if (!alphaRange.hasAttribute('data-listener-added')) {
    alphaRange.addEventListener('input', picker_previewColor);
    alphaRange.setAttribute('data-listener-added', 'true');
  }
}

// Cerrar el modal
function picker_closeModal() {
  document.getElementById('picker_colorModal').style.display = 'none';
}

// Vista previa en tiempo real con porcentaje de transparencia
function picker_previewColor() {
  const color = document.getElementById('picker_colorPicker').value;
  const alpha = document.getElementById('picker_alphaRange').value;
  const rgbaColor = picker_hexToRGBA(color, alpha);
  
  // Detectar si el elemento es un contenedor (div) o un elemento de texto (h1, p, etc.)
  const tagName = picker_currentElement.tagName.toLowerCase();
  if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || tagName === 'h4' || tagName === 'h5' || tagName === 'h6' )  {
    picker_currentElement.style.color = rgbaColor;
  } else {
    picker_currentElement.style.backgroundColor = rgbaColor;
  }
  picker_updateAlphaPercentage(alpha * 100);
}


// Aplicar el color final y cerrar modal
function picker_applyColor() {
  picker_previewColor();
  picker_closeModal();
}

// Convertir hexadecimal a RGBA
function picker_hexToRGBA(hex, alpha) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Convertir RGB a HEX
function picker_rgbToHex(r, g, b) {
  return "#" + picker_componentToHex(r) + picker_componentToHex(g) + picker_componentToHex(b);
}

function picker_componentToHex(c) {
  let hex = parseInt(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// Actualizar el porcentaje de transparencia
function picker_updateAlphaPercentage(alpha) {
  document.getElementById('picker_alphaPercentage').textContent = Math.round(alpha) + '%';
}

// Cerrar el modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
  const modal = document.getElementById('picker_colorModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}