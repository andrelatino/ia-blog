

function ia_section() {
  const sectionID = document.getElementById('toolbarSectionID').textContent;
  const section = document.getElementById(sectionID);
  if (section.getAttribute('data-type') === 'section') {

      console.log(section.outerHTML);
      console.log(sectionID);
      localStorage.setItem('sectionHtml', section.outerHTML);
  }
}
function ia_openModal() {
  ia_section();
  const getModalID = document.getElementById('ia-div-modal');
  getModalID.style.display ="grid";
  // const hideToolbar = document.getElementById('toolbar-open');
  // hideToolbar.style.visibility="hidden";
}


function ia_closeModal(){
  localStorage.removeItem('sectionHtml');
  const closeChatModal = document.getElementById('ia-div-modal');
  closeChatModal.style.display = "none";
}

// Make the modal draggable
var ia_div_modal = document.getElementById("ia-div-modal");
var ia_button_drag = document.getElementById("ia-button-drag");
makeElementDraggable(ia_div_modal, ia_button_drag);