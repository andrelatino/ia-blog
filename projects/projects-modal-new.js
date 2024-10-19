

  function modalNewHtml() {
    const modalHTML = `
      <div id="modalNewOverlay">
        <div id="modalContent" class="modal-content">
          <div class="sites-modal-header"> 
            <button style='display:none;'><img src="../global/file/drag.svg"></button>
            <p class="flipcard-title">New Site</p>
            <span id="modalNewClose" onclick="modalNewClose()"><img src="../global/file/close-white.svg"></span>
          </div>
          <div class="sites-modal-content">
            <input class='flipcard-input' type="text" id="newRepoNameInput" placeholder='Enter name'>
            
            <select id="selectChoice" class="flipcard-select" style="display:none;">
              <option value="" disabled selected>Create from : </option>
              <option value="blank" selected>Blank Site</option>
            </select>

            <select id="templateSelector" class="flipcard-select"></select>
            <button id="createSiteBtn" class='flipcard-button'>Create Site</button>
            <span id="message"></span>
          </div>
        </div>
      </div>
    `;

    // Create a modalDiv element
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = modalHTML;
    var footerElement = document.getElementsByTagName("footer")[0];
    footerElement.parentNode.insertBefore(modalDiv, footerElement);
  }
   // Create the modal when the page loads
   window.onload = modalNewHtml();

  function modalNewOpen() {
    const modalNewOverlay = document.getElementById("modalNewOverlay");
    const modalContent = document.getElementById("modalContent");
    modalNewOverlay.style.visibility = "visible";
    modalContent.style.visibility = "visible";
  }
  function modalNewClose() {
    const modalNewOverlay = document.getElementById("modalNewOverlay");
    const modalContent = document.getElementById("modalContent");
    modalNewOverlay.style.visibility = "hidden";
    modalContent.style.visibility = "hidden";
  }
  
  // function handleChoiceSelection() {
  //   var select = document.getElementById("selectChoice");
  //   var createSiteBtn = document.getElementById('createSiteBtn');

  //   select.addEventListener("change", function () {
  //         var selectedValue = select.value;

  //          if (selectedValue === "blank") {
  //           const createSiteBtn = document.getElementById('createSiteBtn');
  //           createSiteBtn.textContent = 'Create Blank Site';

  //           const templateSelector = document.getElementById('templateSelector');
  //           templateSelector.style.display = 'initial';
  //         } else if (selectedValue === "premium") {
  //           const createSiteBtn = document.getElementById('createSiteBtn');
  //           createSiteBtn.textContent = 'Create Premium Site';

  //           const templateSelector = document.getElementById('templateSelector');
  //           templateSelector.style.display = 'initial';
  //         }
  //       });
  
  //   createSiteBtn.addEventListener("click", function () {
  //     var selectedValue = select.value;
  
  //     if (selectedValue === "blank") {
  //       createBlankSite();
  //       // Call your custom function for Scratch Site here
  //     } else if (selectedValue === "premium") {
  //       // Call your custom function for Premium Site here
  //       createPremiumSite();
  //     }
  //   });
  // }

  // handleChoiceSelection();
  
  