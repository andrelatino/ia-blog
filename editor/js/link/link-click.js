document.addEventListener('click', function(event) {
    const link = event.target.closest("a[data-type='a-link']");
    
    if (link) {
        event.preventDefault(); // Evita que el enlace se siga inmediatamente

        // Rellenar el modal con los datos actuales
        document.getElementById('linkTitle').value = link.textContent;
        document.getElementById('linkUrl').value = link.getAttribute('href');
        document.getElementById('linkClass').value = link.className || '';

        // Seleccionar la opción correcta en el select
        const currentTarget = link.getAttribute('target') || '_self';
        document.getElementById('linkTarget').value = currentTarget;

        // Mostrar el modal
        document.getElementById('linkEditorModal').style.display = 'block';

        // Guardar cambios
        document.getElementById('saveChanges').onclick = function() {
            const newText = document.getElementById('linkTitle').value;
            const newUrl = document.getElementById('linkUrl').value;
            const newTarget = document.getElementById('linkTarget').value;
            const newClass = document.getElementById('linkClass').value;

            if (newText.trim() !== '') {
                link.textContent = newText;
            }
            
            if (newUrl.trim() !== '') {
                link.setAttribute('href', newUrl);
            }

            link.setAttribute('target', newTarget); // Establecer target basado en el select
            link.className = newClass.trim();

            // Ocultar el modal
            document.getElementById('linkEditorModal').style.display = 'none';
        };

        // Cancelar cambios
        document.getElementById('cancelEdit').onclick = function() {
            document.getElementById('linkEditorModal').style.display = 'none';
        };
    }
});
