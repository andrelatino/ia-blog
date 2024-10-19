//HTML

var html_editor;

function html_params() {
   html_editor = ace.edit("html_editor"); // Ajusta el ID aquí para coincidir con tu nuevo contenedor
   html_editor.session.setMode("ace/mode/html");
   html_editor.setTheme("ace/theme/twilight");
   // html_editor.session.getUseWrapMode(true);
   html_editor.setShowPrintMargin(false);
}
html_params();

function html_get(sectionId) {
   const section = document.getElementById(sectionId);
   // Verificar si el propio section tiene el atributo data-type="html"
   if (section.getAttribute('data-type') === 'html') {
      // Si el propio section es el elemento deseado, usar innerHTML
      html_editor.session.setValue(section.innerHTML);
   } else {
      // De lo contrario, buscar dentro del section como antes
      const rawHtmlElements = section.querySelectorAll('[data-type="html"]');
      if (rawHtmlElements.length > 0) {
         const htmlContent = rawHtmlElements[0].innerHTML; // Usar innerHTML para incluir el elemento en sí
         html_editor.session.setValue(htmlContent);
      }
   }
}

function html_update() {
   const sectionID = document.getElementById("toolbarSectionID").textContent;
   const section = document.getElementById(sectionID);
   if (section.getAttribute('data-type') === 'html') {
      // Reemplazar el elemento completo si este es el objetivo
      section.innerHTML = html_editor.session.getValue();
   } else {
      const rawHtmlElement = section.querySelector('[data-type="html"]');
      if (rawHtmlElement) {
         // Esta parte es más compleja si necesitas reemplazar innerHTML, ya que afecta al propio rawHtmlElement
         // Podrías necesitar una lógica adicional aquí para manejar este caso correctamente
         const newHtmlContent = html_editor.session.getValue();
         rawHtmlElement.innerHTML = newHtmlContent;
      }
   }
   pageSaveData(); // Asume que esta función está definida en otra parte de tu código
}

function html_open() {
   overlay_open(); // Asume que esta función está definida en otra parte de tu código
   // html_params();
   document.getElementById("editorHtml").style.visibility = "visible";
   const getSectionID = document.getElementById("toolbarSectionID").textContent;
   html_get(getSectionID);
   html_clean()
}

function html_close() {
   overlay_close(); // Asume que esta función está definida en otra parte de tu código
   document.getElementById("editorHtml").style.visibility = "hidden";
}

function html_clean() {
   const currentHtmlContent = html_editor.session.getValue();
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
   html_editor.session.setValue(beautifiedHtmlContent);
}

// https://github.com/beautifier/js-beautify