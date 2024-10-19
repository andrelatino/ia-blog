// CSS

var css_page_editor;

function css_page_params() {
  css_page_editor = ace.edit("css_page_code"); // Asegúrate de que el ID sea correcto
  css_page_editor.session.setMode("ace/mode/css"); // Cambiado de "ace/mode/js" a "ace/mode/javascript"
  css_page_editor.setTheme("ace/theme/twilight");
  css_page_editor.session.setUseWrapMode(true);
  // css_page_editor.setShowPrintMargin(false);
  css_page_editor.resize(false);
  css_page_editor.setOptions({
    readOnly: false,
    autoScrollEditorIntoView:false,
    useWorker:false,
    // enableAutoIndent:true,
    showPrintMargin: false,
    maxLines: 30,
    
  });
}
css_page_params();

function css_page_open(cssPageID, cssSize) {
  // Ensure the overlay and initial setup functions are defined
  if (typeof overlay_open !== 'function' || typeof css_page_clean !== 'function') {
      console.error("Required functions are not defined.");
      return;
  }

  overlay_open();
  document.getElementById('css_page_size').textContent = cssSize;
  document.getElementById('css_page_id').textContent = cssPageID;
  document.getElementById('css_page_title').textContent = 'Page css ' + cssSize;
  document.getElementById("css_page_editor").style.visibility = "visible";
  css_page_clean();

  // Safely attempt to access and update the editor's content
  const existingStyleTag = document.getElementById(cssPageID);
  if (existingStyleTag) {
      const cssContent = existingStyleTag.textContent;
      if (typeof css_page_editor.session.setValue === 'function') {
          css_page_editor.session.setValue(cssContent);
      } else {
          console.error("Editor session setValue function is not available.");
      }
      console.log("Loaded CSS content:", cssContent);
  } else {
      console.error("The style tag with ID " + cssPageID + " does not exist.");
  }
}


function css_page_update() {
  
  // Ensure the editor session and pageSaveData functions are defined
  if (typeof css_page_editor.session.getValue !== 'function' || typeof pageSaveData !== 'function') {
      console.error("Required editor functions or pageSaveData are not defined.");
      return;
  }
  const cssPageID = document.getElementById('css_page_id').textContent;
  const styleTag = document.getElementById(cssPageID);

  if (!styleTag) {
      console.error("No style tag found with ID:", cssPageID);
      return;
  }

  const newCssContent = css_page_editor.session.getValue();
  styleTag.textContent = newCssContent;
  console.log("CSS content updated for style ID:", cssPageID);
  pageSaveData();  // Assumes this function is defined elsewhere and handles data saving
}




function css_page_close() {
  overlay_close(); // Asume que esta función está definida en otra parte de tu código
  document.getElementById("css_page_editor").style.visibility = "hidden";
}
function css_page_clean() {
  const currentHtmlContent = css_page_editor.session.getValue();
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
  css_page_editor.session.setValue(beautifiedHtmlContent);
}