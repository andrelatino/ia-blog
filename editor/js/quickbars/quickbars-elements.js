
function detectEnterKey() {
    // Agregar un event listener al documento entero
    document.addEventListener('keydown', function(event) {
        // Verificar si la tecla presionada es "Enter"
        if (event.key === 'Enter') {
            // Verificar si el evento se originó dentro de un elemento contenteditable
            const target = event.target;
            if (target.hasAttribute('contenteditable') && target.getAttribute('contenteditable') === 'true') {
                event.preventDefault(); // Prevenir el comportamiento predeterminado de "Enter"
                console.log('Se ha presionado "Enter" en un elemento contenteditable.');
                
                // Mostrar opciones para elegir entre p y h1
                showTagOptions(target);
            }
        }
    });
}

// Función para mostrar opciones de tag
function showTagOptions(targetElement) {
    // Crear un menú de opciones si no existe
    let tagOptions = document.getElementById('tag-options');
    if (!tagOptions) {
        tagOptions = document.createElement('div');
        tagOptions.id = 'tag-options';
        tagOptions.classList.add('tag-options');
        tagOptions.innerHTML = `
            <button onclick="insertTag('p', '${targetElement.id}')">Insertar P</button>
            <button onclick="insertTag('h1', '${targetElement.id}')">Insertar H1</button>
        `;
        document.body.appendChild(tagOptions);
    }

    // Posicionar el menú cerca del elemento de texto
    const rect = targetElement.getBoundingClientRect();
    tagOptions.style.position = 'absolute';
    tagOptions.style.left = `${rect.left + window.scrollX}px`;
    tagOptions.style.top = `${rect.bottom + window.scrollY}px`;
    tagOptions.style.display = 'block';
}

// Función para insertar el tag seleccionado
function insertTag(tag, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
        // Crear el nuevo elemento con un ID generado por generateRandomID
        const newElement = document.createElement(tag);
        newElement.id = generateRandomID(7); // Usar la función existente para generar un ID
        newElement.setAttribute('contenteditable', 'true');
        newElement.textContent = `Nuevo ${tag.toUpperCase()}`;
        
        // Insertar el nuevo elemento después del elemento objetivo
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);

        console.log(`Nuevo elemento <${tag}> con ID ${newElement.id} insertado.`);
        hideTagOptions(); // Ocultar el menú de opciones
    }
}


// Función para ocultar el menú de opciones
function hideTagOptions() {
    const tagOptions = document.getElementById('tag-options');
    if (tagOptions) {
        tagOptions.style.display = 'none';
    }
}

// Llamar a la función para activar la detección de "Enter"
detectEnterKey();

