// JS

var js_page_editor;

function js_page_params() {
  js_page_editor = ace.edit("js_page_code"); // Asegúrate de que el ID sea correcto
  js_page_editor.session.setMode("ace/mode/javascript"); // Cambiado de "ace/mode/js" a "ace/mode/javascript"
  js_page_editor.setTheme("ace/theme/twilight");
  js_page_editor.session.setUseWrapMode(true);
  js_page_editor.setOptions({
    readOnly: false,
    autoScrollEditorIntoView:true,
    useWorker:true,
    // enableAutoIndent:true,
    showPrintMargin: false,
  });
}
js_page_params();

function js_page_open(jsPageID, jsSize) {
  // Ensure the overlay and initial setup functions are defined
  if (typeof overlay_open !== 'function' || typeof js_page_clean !== 'function') {
      console.error("Required functions are not defined.");
      return;
  }

  overlay_open();
  document.getElementById('js_page_size').textContent = jsSize;
  document.getElementById('js_page_id').textContent = jsPageID;
  document.getElementById('js_page_title').textContent = 'Page js ' + jsSize;
  document.getElementById("js_page_editor").style.visibility = "visible";
  js_page_clean();

  // Safely attempt to access and update the editor's content
  const existingStyleTag = document.getElementById(jsPageID);
  if (existingStyleTag) {
      const jsContent = existingStyleTag.textContent;
      if (typeof js_page_editor.session.setValue === 'function') {
          js_page_editor.session.setValue(jsContent);
      } else {
          console.error("Editor session setValue function is not available.");
      }
      console.log("Loaded JS content:", jsContent);
  } else {
      console.error("The style tag with ID " + jsPageID + " does not exist.");
  }
}


function js_page_update() {
  
  // Ensure the editor session and pageSaveData functions are defined
  if (typeof js_page_editor.session.getValue !== 'function' || typeof pageSaveData !== 'function') {
      console.error("Required editor functions or pageSaveData are not defined.");
      return;
  }
  const jsPageID = document.getElementById('js_page_id').textContent;
  const styleTag = document.getElementById(jsPageID);

  if (!styleTag) {
      console.error("No style tag found with ID:", jsPageID);
      return;
  }

  const newCssContent = js_page_editor.session.getValue();
  styleTag.textContent = newCssContent;
  console.log("JS content updated for style ID:", jsPageID);
  pageSaveData();  // Assumes this function is defined elsewhere and handles data saving
}




function js_page_close() {
  overlay_close(); // Asume que esta función está definida en otra parte de tu código
  document.getElementById("js_page_editor").style.visibility = "hidden";
}
function js_page_clean() {
  const currentHtmlContent = js_page_editor.session.getValue();
  const beautifiedHtmlContent = js_beautify(currentHtmlContent, {
    // Configuración de js-beautify
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
  js_page_editor.session.setValue(beautifiedHtmlContent);
}