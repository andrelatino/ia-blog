
// JS

var js_editor;
function js_params() {
  js_editor = ace.edit("js_code"); // Asegúrate de que el ID sea correcto
  js_editor.session.setMode("ace/mode/javascript"); // Cambiado de "ace/mode/js" a "ace/mode/javascript"
  js_editor.setTheme("ace/theme/twilight");
  js_editor.session.setUseWrapMode(true);
  js_editor.setOptions({
    readOnly: false,
    autoScrollEditorIntoView:true,
    useWorker:true,
    // enableAutoIndent:true,
    showPrintMargin: false,
  });
}
js_params();
function js_get(sectionId) {
  const section = document.getElementById(sectionId);
  const rawHtmlElements = section.querySelectorAll('[data-type="js"]');
  if (rawHtmlElements.length > 0) {
    const htmlContent = rawHtmlElements[0].innerHTML;
    js_editor.session.setValue(htmlContent); // Usa session.setValue en lugar de setValue directamente
  }
}
function js_update() {
  const sectionID = document.getElementById("toolbarSectionID").textContent;
  const section = document.getElementById(sectionID);
  const rawHtmlElement = section.querySelector('[data-type="js"]');
  if (rawHtmlElement) {
    const newHtmlContent = js_editor.session.getValue(); // Usa session.getValue
    rawHtmlElement.innerHTML = newHtmlContent;
    pageSaveData(); // Asume que esta función está definida en otra parte de tu código
  }
}
function js_open() {
  overlay_open(); // Asume que esta función está definida en otra parte de tu código
  // js_params();
  document.getElementById("js_editor").style.visibility = "visible";
  const getSectionID = document.getElementById("toolbarSectionID").textContent;
  js_get(getSectionID);
  js_clean()
}
function js_close() {
  overlay_close(); // Asume que esta función está definida en otra parte de tu código
  document.getElementById("js_editor").style.visibility = "hidden";
}
function js_clean() {
  const currentHtmlContent = js_editor.session.getValue();
  const beautifiedHtmlContent = js_beautify(currentHtmlContent, {
    // Configuración de js-beautify
    "indent_size": "2",
    "indent_char": " ",
    "max_preserve_newlines": "0",
    "preserve_newlines": true,
    "keep_array_indentation": false,
    "break_chained_methods": false,
    "indent_scripts": "normal",
    // "brace_style": "expand",
    "space_before_conditional": true,
    "unescape_strings": false,
    "jslint_happy": true,
    "end_with_newline": false,
    "wrap_line_length": "80",
    "indent_inner_html": true,
    "comma_first": false,
    "e4x": false
    // El resto de tu configuración...
  });
  js_editor.session.setValue(beautifiedHtmlContent);
}