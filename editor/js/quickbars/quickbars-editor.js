

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




function applySpan() {
    // Recuperar la selección actual
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);

        // Crear un nuevo span con un ID único y una clase CSS "is-span"
        const span = document.createElement('span');
        span.id = generateRandomID(7);
        span.classList.add('is-span'); // Añadir la clase "is-span"

        // Envolver el texto seleccionado con el span
        range.surroundContents(span);

        // Actualizar el contenido de <p class="template-id"> con el nuevo ID y tagName del span
        const templateElement = document.querySelector('p.template-id');
        if (templateElement) {
            templateElement.textContent = span.id; // Solo mostrar el ID
        } else {
            console.error('No se encontró el elemento con la clase "template-id".');
        }

        // Actualizar el tagName y el ID en el quickbar si está presente
        const quickbarTagDisplay = document.querySelector('.template-tag');
        const quickbarIdDisplay = document.querySelector('.template-id');
        if (quickbarTagDisplay) {
            quickbarTagDisplay.textContent = `${span.tagName.toLowerCase()}#`;
        }
        if (quickbarIdDisplay) {
            quickbarIdDisplay.textContent = span.id;
        }
    } else {
        console.error('No se ha seleccionado ningún texto.');
    }
}



function removeSpan() {
    // Recuperar la selección actual
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedContent = range.commonAncestorContainer;

        // Buscar el ID del <p> con la clase "template-id"
        const templateElement = document.querySelector('p.template-id');
        if (!templateElement) {
            console.error('No se ha encontrado el elemento con la clase "template-id".');
            return;
        }

        // Verificar si el contenido seleccionado está dentro de un span con el mismo ID
        let parentSpan = selectedContent.nodeType === 3 ? selectedContent.parentNode : selectedContent;
        if (parentSpan.tagName === 'SPAN' && parentSpan.id === templateElement.textContent.trim()) {
            // Si es un span con el ID correcto, eliminarlo y mantener el contenido interno
            const parent = parentSpan.parentNode;
            while (parentSpan.firstChild) {
                parent.insertBefore(parentSpan.firstChild, parentSpan);
            }
            parent.removeChild(parentSpan);
        } else {
            console.warn('El contenido seleccionado no está dentro de un span con el ID especificado.');
        }
    } else {
        console.error('No se ha seleccionado ningún texto.');
    }
}
function deleteElement() {
    // Obtener el ID del elemento que se va a eliminar
    const templateIdElement = document.querySelector('.template-id');
    const elementId = templateIdElement ? templateIdElement.textContent.trim() : '';

    if (elementId) {
        // Encontrar el elemento por su ID
        const elementToDelete = document.getElementById(elementId);

        if (elementToDelete) {
            // Eliminar el elemento del DOM
            elementToDelete.remove();
            console.log(`Elemento con ID ${elementId} eliminado.`);
        } else {
            console.error(`No se encontró ningún elemento con el ID ${elementId}.`);
        }
    } else {
        console.error('No se ha proporcionado ningún ID válido.');
    }
}

function clearStyles() {
    // Recuperar la selección actual
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);

        // Obtener todos los elementos dentro de la selección
        const selectedElements = range.cloneContents().querySelectorAll('*');
        
        // Recopilar IDs de los elementos seleccionados
        const elementIDs = new Set();

        // Iterar sobre cada elemento seleccionado
        selectedElements.forEach(element => {
            if (element.id) {
                elementIDs.add(element.id); // Guardar el ID si existe
            }

            // Eliminar el atributo style si existe
            if (element.hasAttribute('style')) {
                console.log(`Limpiando estilo del elemento: <${element.tagName.toLowerCase()}> con ID: ${element.id}`);
                element.removeAttribute('style');
            }
        });

        // Ahora, limpiar estilos de todos los elementos que coincidan con los IDs dentro del documento
        elementIDs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                console.log(`Limpiando estilos del elemento con ID: ${id}`);
                element.removeAttribute('style');
            }
        });

        // Limpiar también el contenedor principal si tiene estilos
        const templateElement = document.querySelector('p.template-id');
        if (templateElement) {
            const containerID = templateElement.textContent.trim();
            const container = document.getElementById(containerID);
            if (container && container.hasAttribute('style')) {
                console.log(`Limpiando estilo del contenedor: <${container.tagName.toLowerCase()}> con ID: ${containerID}`);
                container.removeAttribute('style');
            }
        }
    } else {
        console.error('No se ha seleccionado ningún texto.');
    }
}
function clearAll() {
    // Recuperar la selección actual
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);

        // Obtener todos los elementos dentro de la selección
        const selectedElements = range.cloneContents().querySelectorAll('*');
        
        // Recopilar IDs de los elementos seleccionados
        const elementIDs = new Set();

        // Iterar sobre cada elemento seleccionado
        selectedElements.forEach(element => {
            if (element.id) {
                elementIDs.add(element.id); // Guardar el ID si existe
            }

            // Eliminar el atributo style si existe
            if (element.hasAttribute('style')) {
                console.log(`Limpiando estilo del elemento: <${element.tagName.toLowerCase()}> con ID: ${element.id}`);
                element.removeAttribute('style');
            }
        });

        // Limpiar estilos y eliminar spans de todos los elementos que coincidan con los IDs dentro del documento
        elementIDs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                // Limpiar estilos si el elemento tiene el atributo 'style'
                if (element.hasAttribute('style')) {
                    console.log(`Limpiando estilos del elemento con ID: ${id}`);
                    element.removeAttribute('style');
                }
                
                // Si es un span, eliminar el span y mantener su contenido interno
                if (element.tagName.toLowerCase() === 'span') {
                    console.log(`Eliminando span con ID: ${id}`);
                    const parent = element.parentNode;
                    while (element.firstChild) {
                        parent.insertBefore(element.firstChild, element);
                    }
                    parent.removeChild(element);
                }
            }
        });

        // Limpiar también el contenedor principal si tiene estilos
        const templateElement = document.querySelector('p.template-id');
        if (templateElement) {
            const containerID = templateElement.textContent.trim();
            const container = document.getElementById(containerID);
            if (container && container.hasAttribute('style')) {
                console.log(`Limpiando estilo del contenedor: <${container.tagName.toLowerCase()}> con ID: ${containerID}`);
                container.removeAttribute('style');
            }
        }
    } else {
        console.error('No se ha seleccionado ningún texto.');
    }
}



function clearAllFormat() {
    // Recuperar la selección actual
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);

        // Obtener el elemento padre del rango seleccionado
        const container = range.commonAncestorContainer.nodeType === 3 ? range.commonAncestorContainer.parentNode : range.commonAncestorContainer;

        // Iterar sobre todos los nodos hijos del contenedor y limpiar estilos
        container.querySelectorAll('span').forEach(span => {
            // Reemplazar el span con su contenido interno
            while (span.firstChild) {
                span.parentNode.insertBefore(span.firstChild, span);
            }
            span.remove();
        });

        // Limpiar todos los atributos de estilo (style) de los nodos dentro del contenedor
        container.querySelectorAll('*').forEach(element => {
            element.removeAttribute('style');
        });
    } else {
        console.error('No se ha seleccionado ningún texto.');
    }
}




document.addEventListener('DOMContentLoaded', () => {
const editor = document.getElementById('grid-page');
const quickbarTemplate = document.getElementById('quickbar-editor');

if (!editor || !quickbarTemplate) {
    console.error('No se encontró el elemento con ID "grid-page" o "quickbar".');
    return;
}

//----------SELECT AND CLICK ELEMENTS v3 ---------//

// Función para mostrar el quickbar y actualizar ID y tagName
function showQuickbar(event) {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && selection.toString().trim().length > 0) {
        removeQuickbar();

        // Clona el contenido del template y crea un nuevo div para el quickbar
        const quickbarClone = quickbarTemplate.content.cloneNode(true);
        const quickbarDiv = document.createElement('div');
        quickbarDiv.id = 'quickbar-container';
        quickbarDiv.appendChild(quickbarClone);

        // Añade el quickbar al body
        document.body.appendChild(quickbarDiv);

        // Calcula la posición del quickbar
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        quickbarDiv.style.position = 'absolute';
        quickbarDiv.style.left = `${rect.left + window.scrollX}px`;
        quickbarDiv.style.top = `${rect.top + window.scrollY - quickbarDiv.offsetHeight - 10}px`;
        quickbarDiv.style.display = 'block';

        // Recuperar y mostrar detalles del elemento seleccionado
        showQuickbarDetails(range, quickbarDiv);
    }
}

// Nueva función para mostrar el tagName y actualizar el ID en el quickbar y en <p class="template-id">
function showQuickbarDetails(range, quickbarDiv) {
    let element = range.commonAncestorContainer;

    // Si el nodo seleccionado es un nodo de texto, sube al nodo padre
    if (element.nodeType === Node.TEXT_NODE) {
        element = element.parentElement;
    }

    // Determinar si la selección es únicamente un `span`
    let selectedElement = element;

    // Si el rango de selección abarca exactamente un `span`, no subir al padre
    if (selectedElement.tagName === 'SPAN' && range.toString().trim() === selectedElement.textContent.trim()) {
        // Mostrar el `span` seleccionado si se selecciona completamente
        selectedElement = element;
    } else {
        // Ignorar `span` y buscar el elemento padre (h1-h6, p, etc.)
        while (selectedElement && selectedElement.tagName === 'SPAN') {
            selectedElement = selectedElement.parentElement;
        }
    }

    // Obtener el ID y tagName del elemento seleccionado más relevante
    const elementId = selectedElement.id || '(sin ID)';
    const tagName = selectedElement.tagName || '(sin tag)';

    // Actualizar el tagName en el quickbar
    const quickbarTagDisplay = quickbarDiv.querySelector('.template-tag');
    if (quickbarTagDisplay) {
        quickbarTagDisplay.textContent = tagName ? `${tagName}#` : '(sin tag)';
    }

    // Actualizar el ID en el quickbar si existe
    const quickbarIdDisplay = quickbarDiv.querySelector('.template-id');
    if (quickbarIdDisplay) {
        quickbarIdDisplay.textContent = elementId !== '(sin ID)' ? elementId : 'Elemento sin ID';
    }

    // Actualizar el <p class="template-id"> con el ID del elemento seleccionado
    const templateElement = document.querySelector('p.template-id');
    if (templateElement) {
        templateElement.textContent = elementId !== '(sin ID)' ? elementId : range.toString().trim();
    }
}

// Detecta el evento de selección de texto (mouseup)
editor.addEventListener('mouseup', (event) => {
    setTimeout(() => {
        showQuickbar(event);
    }, 0);
});

// Detecta el evento de doble clic (dblclick)
editor.addEventListener('dblclick', (event) => {
    setTimeout(() => {
        // Forzar la selección completa solo si se hace doble clic sobre un span
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);

            // Solo forzar la selección completa si es un span
            if (range.startContainer.parentElement.tagName === 'SPAN') {
                const spanElement = range.startContainer.parentElement;
                const wordRange = document.createRange();
                wordRange.selectNodeContents(spanElement);

                selection.removeAllRanges();
                selection.addRange(wordRange);
            }
        }

        // Llamar a la función `showQuickbar` para mostrar el quickbar de manera correcta
        showQuickbar(event);
    }, 0);
});




//----------SELECT AND CLICK ELEMENTS---------//


//FUNCIONES




window.applyColor = function() {
    // Recuperar el ID almacenado en el quickbar
    const quickbarIdDisplay = document.querySelector('.template-id');
    if (!quickbarIdDisplay) {
        console.error('No se encontró el contenedor del ID en el quickbar.');
        return;
    }
    
    // Extraer el ID del texto almacenado
    const elementId = quickbarIdDisplay.textContent;

    // Verificar si el elemento tiene un ID válido
    if (!elementId) {
        console.error('El elemento seleccionado no tiene un ID válido. No se puede aplicar el color.');
        return;
    }

    // Obtener el elemento por su ID
    const targetElement = document.getElementById(elementId);
    if (!targetElement) {
        console.error(`No se encontró un elemento con ID: ${elementId}`);
        return;
    }

    // Crear un input de tipo color
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.style.position = 'absolute';
    colorInput.style.opacity = 0;

    // Añadir el input temporalmente al documento
    document.body.appendChild(colorInput);

    // Evento de cambio de color
    colorInput.addEventListener('input', () => {
        const color = colorInput.value;

        // Aplicar el color al estilo del elemento con el ID recuperado
        targetElement.style.color = color;

        removeQuickbar();
    });

    // Disparar el input de color
    colorInput.click();

    // Eliminar el input de color después de abrirlo
    colorInput.addEventListener('blur', () => {
        colorInput.remove();
    });
}









window.applyAlign = function(alignment) {
    // Recuperar el ID almacenado en el quickbar
    const quickbarIdDisplay = document.querySelector('.template-id');
    if (!quickbarIdDisplay) {
        console.error('No se encontró el contenedor del ID en el quickbar.');
        return;
    }
    
    // Extraer el ID del texto almacenado
    const elementId = quickbarIdDisplay.textContent;
    
    // Verificar si el elemento tiene un ID válido
    if (!elementId) {
        console.error('El elemento seleccionado no tiene un ID válido. No se puede aplicar la alineación.');
        return;
    }

    // Obtener el elemento por su ID para aplicar la alineación
    const targetElement = document.getElementById(elementId);
    if (!targetElement) {
        console.error(`No se encontró un elemento con ID: ${elementId}`);
        return;
    }

    // Aplica la alineación directamente al estilo del elemento
    const validAlignments = ['left', 'center', 'right', 'justify'];
    if (validAlignments.includes(alignment)) {
        targetElement.style.textAlign = alignment;
    } else {
        console.error(`Alineación no válida: ${alignment}`);
    }

    removeQuickbar();
};

window.applyLineHeight = function(lineHeight) {
    // Recuperar el ID almacenado en el quickbar
    const quickbarIdDisplay = document.querySelector('.template-id');
    if (!quickbarIdDisplay) {
        console.error('No se encontró el contenedor del ID en el quickbar.');
        return;
    }
    
    // Extraer el ID del texto almacenado
    const elementId = quickbarIdDisplay.textContent;
    
    // Verificar si el elemento tiene un ID válido
    if (!elementId) {
        console.error('El elemento seleccionado no tiene un ID válido. No se puede aplicar el line-height.');
        return;
    }

    // Obtener el elemento por su ID para aplicar el line-height
    const targetElement = document.getElementById(elementId);
    if (!targetElement) {
        console.error(`No se encontró un elemento con ID: ${elementId}`);
        return;
    }

    // Verifica si el elemento es un <p>, <h1>, <h2>, ..., <h6>
    const validTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
    if (validTags.includes(targetElement.tagName)) {
        // Aplica el line-height directamente al estilo del elemento
        targetElement.style.lineHeight = lineHeight;
    } else {
        console.error('El elemento seleccionado no es un elemento de texto válido para aplicar line-height.');
    }

    removeQuickbar();
};

// Aplica el texto seleccionado (h1-h6, lista desordenada, lista ordenada)
window.applyText = function(tag) {
    // Recuperar el ID almacenado en el quickbar
    const quickbarIdDisplay = document.querySelector('.template-id');
    if (!quickbarIdDisplay) {
        console.error('No se encontró el contenedor del ID en el quickbar.');
        return;
    }
    
    // Extraer el ID del texto almacenado
    const elementId = quickbarIdDisplay.textContent;

    // Verificar si el elemento tiene un ID válido
    if (!elementId) {
        console.error('El elemento seleccionado no tiene un ID válido. No se puede aplicar el formato de texto.');
        return;
    }

    // Obtener el elemento por su ID para aplicar el cambio de texto
    const targetElement = document.getElementById(elementId);
    if (!targetElement) {
        console.error(`No se encontró un elemento con ID: ${elementId}`);
        return;
    }

    // Si el tag es una lista (ul o ol), insertar el contenido dentro de una lista
    if (tag === 'ul' || tag === 'ol') {
        targetElement.innerHTML = `<${tag}><li>${targetElement.innerHTML}</li></${tag}>`;
    } else {
        // Cambia el tipo de bloque manteniendo atributos
        const newElement = document.createElement(tag);
        newElement.innerHTML = targetElement.innerHTML;

        // Copiar todos los atributos (ID, clases, estilos, etc.) del elemento original
        for (const attr of targetElement.attributes) {
            newElement.setAttribute(attr.name, attr.value);
        }

        // Reemplazar el elemento original con el nuevo tag
        targetElement.replaceWith(newElement);
    }

    removeQuickbar();
};



window.applyFormat = function(format) {
        // Recuperar el ID almacenado en el quickbar
        const quickbarIdDisplay = document.querySelector('.template-id');
        if (!quickbarIdDisplay) {
            console.error('No se encontró el contenedor del ID en el quickbar.');
            return;
        }
        
        // Extraer el ID del texto almacenado
        const elementId = quickbarIdDisplay.textContent;
    
        // Verificar si el elemento tiene un ID válido
        if (!elementId) {
            console.error('El elemento seleccionado no tiene un ID válido. No se puede aplicar el formato.');
            return;
        }
    
        // Obtener el elemento por su ID
        const targetElement = document.getElementById(elementId);
        if (!targetElement) {
            console.error(`No se encontró un elemento con ID: ${elementId}`);
            return;
        }
    
        // Aplicar o eliminar el formato del estilo del elemento usando CSS
        switch (format) {
            case 'bold':
                targetElement.style.fontWeight = 
                    targetElement.style.fontWeight === 'bold' ? 'normal' : 'bold';
                break;
            case 'italic':
                targetElement.style.fontStyle = 
                    targetElement.style.fontStyle === 'italic' ? 'normal' : 'italic';
                break;
            case 'underline':
                targetElement.style.textDecoration = 
                    targetElement.style.textDecoration === 'underline' ? 'none' : 'underline';
                break;
            case 'strikethrough':
                targetElement.style.textDecoration = 
                    targetElement.style.textDecoration === 'line-through' ? 'none' : 'line-through';
                break;
            default:
                console.error(`El formato ${format} no es válido.`);
        }
    }
    

   
    
    // Elimina cualquier quickbar existente
    function removeQuickbar() {
        const existingQuickbar = document.getElementById('quickbar-container');
        if (existingQuickbar) {
            existingQuickbar.remove();
        }
    }

    // Oculta el quickbar si se hace clic fuera de él o del editor
    document.addEventListener('click', (event) => {
        if (!event.target.closest('#quickbar-container') && event.target !== editor) {
            removeQuickbar();
        }
    });
});


