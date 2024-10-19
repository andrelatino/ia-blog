// CSS

var css_editor;

function css_params() {
  css_editor = ace.edit("css_code"); // Asegúrate de que el ID sea correcto
  css_editor.session.setMode("ace/mode/css"); // Cambiado de "ace/mode/js" a "ace/mode/javascript"
  css_editor.setTheme("ace/theme/twilight");
  css_editor.session.setUseWrapMode(true);
  // css_editor.setShowPrintMargin(false);
  css_editor.resize(false);
  css_editor.setOptions({
    readOnly: false,
    autoScrollEditorIntoView:false,
    useWorker:false,
    // enableAutoIndent:true,
    showPrintMargin: false,
    maxLines: 30,
    
  });
}
css_params();

function css_get(sectionId, cssSize) {
  const section = document.getElementById(sectionId);
  const rawCssElements = section.querySelectorAll(`[data-type="css"][data-size="${cssSize}"][data-content="section"]`);
  if (rawCssElements.length > 0) {
    const htmlContent = rawCssElements[0].innerHTML;
    css_editor.session.setValue(htmlContent);
  }
}

function css_update() {
  const cssSize = document.getElementById('css_size').textContent;
  // alert(cssSize);
  const sectionID = document.getElementById("toolbarSectionID").textContent;
  const section = document.getElementById(sectionID);
  const rawCssElements = section.querySelector(`[data-type="css"][data-size="${cssSize}"][data-content="section"]`);
  if (rawCssElements) {
    const newHtmlContent = css_editor.session.getValue(); // Usa session.getValue
    rawCssElements.innerHTML = newHtmlContent;
    pageSaveData(); // Asume que esta función está definida en otra parte de tu código
  }
}
function css_open(cssSize) {
  
  
  overlay_open(); // Asume que esta función está definida en otra parte de tu código
  // css_params();
  document.getElementById('css_size').textContent = cssSize;
  document.getElementById('css_title').textContent = 'Css '+cssSize;
  document.getElementById("css_editor").style.visibility = "visible";
  const getSectionID = document.getElementById("toolbarSectionID").textContent;
  css_get(getSectionID, cssSize);
  css_clean();
}
function css_close() {
  overlay_close(); // Asume que esta función está definida en otra parte de tu código
  document.getElementById("css_editor").style.visibility = "hidden";
}
function css_clean() {
  const currentHtmlContent = css_editor.session.getValue();
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
  css_editor.session.setValue(beautifiedHtmlContent);
}