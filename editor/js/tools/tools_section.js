
// SECTION

var section_editor;
function section_params() {
  section_editor = ace.edit("section_code"); // Ajusta el ID aquí para coincidir con tu nuevo contenedor
  section_editor.session.setMode("ace/mode/html");
  section_editor.setTheme("ace/theme/twilight");
  section_editor.setShowPrintMargin(false);
  // section_editor.setOptions({
  //   readOnly: false,
  //   autoScrollEditorIntoView:false,
  //   useWorker:false,
  //   enableAutoIndent:true,
  // });
}
section_params();

function section_get(sectionId) {
  const section = document.getElementById(sectionId);
  if (section.getAttribute('data-type') === 'section') {
    section_editor.session.setValue(section.outerHTML);
  } else {
    const rawHtmlElements = section.querySelectorAll('[data-type="section"]');
    if (rawHtmlElements.length > 0) {
      const htmlContent = rawHtmlElements[0].outerHTML; // Usar outerHTML para incluir el elemento en sí
      section_editor.session.setValue(htmlContent);
    }
  }
}
function section_update() {
  const sectionID = document.getElementById("toolbarSectionID").textContent;
  const section = document.getElementById(sectionID);
  // Verifica si el propio section es el objetivo
  if (section.getAttribute('data-type') === 'section') {
    // Actualiza el outerHTML del section directamente
    section.outerHTML = section_editor.session.getValue();
  } else {
    // Si no, busca el primer elemento hijo que coincida y actualiza su outerHTML
    const rawHtmlElement = section.querySelector('[data-type="section"]');
    if (rawHtmlElement) {
      const newHtmlContent = section_editor.session.getValue();
      rawHtmlElement.outerHTML = newHtmlContent;
    }
  }
  pageSaveData(); // Asume que esta función está definida en otra parte de tu código
}

function section_open() {
  const sectionID = document.getElementById("toolbarSectionID").textContent;
  // toolbarDelete(sectionID);
  overlay_open(); // Asume que esta función está definida en otra parte de tu código
  // section_params();
  document.getElementById("section_editor").style.visibility = "visible";
  const getSectionID = document.getElementById("toolbarSectionID").textContent;
  section_get(getSectionID);
  section_clean()
}
function section_close() {
  const sectionID = document.getElementById("toolbarSectionID").textContent;
  // toolbarAdd(sectionID);
  overlay_close(); // Asume que esta función está definida en otra parte de tu código
  document.getElementById("section_editor").style.visibility = "hidden";

}
function section_clean() {
  const currentHtmlContent = section_editor.session.getValue();
  const beautifiedHtmlContent = html_beautify(currentHtmlContent, {
    "indent-size": "2",
    "indent-char": " ",
    "indent-with-tabs":false,
    "end-with-newline":false,
    "preserve-newlines":false,
    "max-preserve-newlines": "1",
    "indent-inner-html": true,
    "brace-style":"collapse",
    "indent-scripts":"keep",
    "wrap-line-length":"0",
    "wrap-attributes":"auto",
    "wrap-attributes-min-attrs": "1",
    "wrap-attributes-indent-size":"2",
    "inline":""
  });
  section_editor.session.setValue(beautifiedHtmlContent);
}
