function importPage() {
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.json';
  fileInput.multiple = true; // Permitir la selección de múltiples archivos
  fileInput.onchange = function(event) {
    var files = event.target.files;
    Array.from(files).forEach(function(file) {
      var reader = new FileReader();
      reader.onload = function(event) {
        var sectionData = JSON.parse(event.target.result);
        var sectionsHtml = sectionData.pageHtml;

        var container = document.createElement('div'); // Crear un contenedor temporal
        container.innerHTML = sectionsHtml;

        var sections = container.querySelectorAll('section'); // Obtener todas las secciones
        console.log('Secciones encontradas:', sections.length);

        // Obtener el contenedor "grid-body"
        var grid = document.getElementById('grid-body');
        
        // Eliminar todas las secciones dentro de "grid-body"
        if (grid) {
          grid.innerHTML = ''; // Esto eliminará todas las secciones existentes
          console.log('Secciones existentes eliminadas');
        }

        // Recorrer cada sección y añadirla al "grid-body"
        Array.from(sections).forEach(function(section, index) {
          console.log('Procesando sección', index + 1);
          var sectionHtml = section.innerHTML;

          // Crear una nueva sección con el mismo ID y contenido
          var newSection = document.createElement('section');
          newSection.id = section.id;
          newSection.innerHTML = sectionHtml;

          // Agregar la nueva sección al contenedor "grid-body"
          if (grid) {
            grid.appendChild(newSection);
            console.log('Sección añadida con ID:', newSection.id);
          }

          //savePage(); // Guarda la página si es necesario
        });
      };
      reader.readAsText(file);
    });
  };
  fileInput.click();
}
