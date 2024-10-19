// CSS

var props_editor;

function props_params() {
  props_editor = ace.edit("props_code"); // Asegúrate de que el ID sea correcto
  props_editor.session.setMode("ace/mode/css"); // Cambiado de "ace/mode/js" a "ace/mode/javascript"
  props_editor.setTheme("ace/theme/twilight");
  props_editor.session.setUseWrapMode(true);
  props_editor.setShowPrintMargin(false);
  props_editor.setOption("useWorker", false);
  props_editor.resize(true);
}
props_params();
// function props_get(sectionId) {
//   const section = document.getElementById(sectionId);
//   const rawHtmlElements = section.querySelectorAll('[data-type="css"]');
//   if (rawHtmlElements.length > 0) {
//     const htmlContent = rawHtmlElements[0].innerHTML;
//     props_editor.session.setValue(htmlContent); // Usa session.setValue en lugar de setValue directamente
//   }
// }

function props_get(sectionId, elementId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    console.error('Sección no encontrada:', sectionId);
    return;
  }

  const cssStyleElement = section.querySelector('style[data-type="css"]');
  if (cssStyleElement) {
    const cssContent = cssStyleElement.textContent; // Extrae el contenido CSS

    // Construye una expresión regular para buscar la regla CSS específica para el ID dado
    const regex = new RegExp(`#${elementId}\\s*{[^}]*}`, 'g');
    const matches = cssContent.match(regex);

    if (matches && matches.length > 0) {
      // Si se encuentra la regla, procesa cada coincidencia (aunque debería haber solo una)
      matches.forEach(match => {
        console.log(match); // Haz algo con cada regla encontrada, por ejemplo, mostrarla en el editor ACE
        props_editor.session.setValue(match); // Asumiendo que quieres mostrar la última coincidencia encontrada
      });
    } else {
      console.warn(`No se encontró la regla CSS para el ID: ${elementId}`);
      // Manejar el caso de no encontrar la regla
    }
  } else {
    console.warn('No se encontró el elemento de estilo CSS en la sección:', sectionId);
    // Manejar este caso adecuadamente
  }
}

function props_update() {
  const sectionID = document.getElementById("toolbarSectionID").textContent;
  const section = document.getElementById(sectionID);
  const rawHtmlElement = section.querySelector('[data-type="css"]');
  if (rawHtmlElement) {
    const newHtmlContent = props_editor.session.getValue(); // Usa session.getValue
    rawHtmlElement.innerHTML = newHtmlContent;
    pageSaveData(); // Asume que esta función está definida en otra parte de tu código
  }
}
function props_open() {
  overlay_open(); // Asume que esta función está definida en otra parte de tu código
  // props_params();
  document.getElementById("props_editor").style.visibility = "visible";
  const getSectionID = document.getElementById("toolbarSectionID").textContent;
  props_get(getSectionID, getSectionID );
  props_clean()
}
function props_close() {
  overlay_close(); // Asume que esta función está definida en otra parte de tu código
  document.getElementById("props_editor").style.visibility = "hidden";
}
function props_clean() {
  const currentHtmlContent = props_editor.session.getValue();
  const beautifiedHtmlContent = css_beautify(currentHtmlContent, {
    // Configuración de js-beautify
    "indent_size": "2",
    "indent_char": " ",
    "max_preserve_newlines": "-1",
    "preserve_newlines": false,
    "keep_array_indentation": false,
    "break_chained_methods": false,
    "indent_scripts": "keep",
    "brace_style": "none",
    "space_before_conditional": false,
    "unescape_strings": false,
    "jslint_happy": false,
    "end_with_newline": true,
    "wrap_line_length": "0",
    "indent_inner_html": false,
    "comma_first": false,
    "e4x": false,
    "indent_empty_lines": false
    // El resto de tu configuración...
  });
  props_editor.session.setValue(beautifiedHtmlContent);
}