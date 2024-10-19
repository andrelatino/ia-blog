 
  function sectionButtons() {
    return `
    <div class="admin-buttons">
      <div class="section-toolbar">
          <div class="tooltip">
            <button class="delete-section" onclick="sectionDelete(this);">
              <img src="./assets/svg/icons/delete.svg">
              <span class="tooltiptext">Delete</span>
            </button>
          </div>

          <div class="tooltip">
            <button class="duplicate-section" onclick="sectionDuplicate(this);">
              <img src="./assets/svg/icons/duplicate.svg">
              <span class="tooltiptext">Duplicate</span>
            </button>
          </div>

          <div class="tooltip">
            <button class="move-up-section" onclick="sectionMoveUp(this);">
              <img src="./assets/svg/icons/up.svg">
              <span class="tooltiptext">Move up</span>
            </button>
          </div>

          <div class="tooltip">
            <button class="move-down-section" onclick="sectionMoveDown(this);">
              <img src="./assets/svg/icons/down.svg">
              <span class="tooltiptext">Move down</span>
            </button>
          </div>

          <div class="tooltip">
            <button class="export-section" onclick="sectionExport(this);">
              <img src="./assets/svg/icons/export.svg">
              <span class="tooltiptext">Export</span>
            </button>
          </div> 

          <div class="tooltip">
            <button class="replace-section" onclick="sectionReplace(this);">
              <img src="./assets/svg/icons/import.svg">
              <span class="tooltiptext">Import</span>
            </button>
          </div> 

          <div class="tooltip">
            <button class="image-section" onclick="sectionImage(this); imageAllButton();">
              <img src="./assets/svg/icons/image.svg">
              <span class="tooltiptext">BG Image</span>
            </button>
          </div>

          <div class="tooltip">
            <button class="responsive-section" onclick="showSectionModal(this);">
              <img src="./assets/svg/icons/resize4.svg">
              <span class="tooltiptext">Full Screen</span>
            </button>
          </div>    
      </div>

      <div class="section-settings">
        <button class="toolbar-open" class="responsive-section" onclick="showSectionToolbar(this);">
          <img src="./assets/svg/icons/settings.svg">
        </button>

        <button class="toolbar-close" class="responsive-section" onclick="hideSectionToolbar(this);">
          <img src="./assets/svg/icons/close-dark.svg">
        </button>
      </div>
    </div> 
    `;
  }
  // sectionButtons();
  function sectionDelete(button) {
    const section = button.closest('section');
    if (!section) {
      console.error('Could not find closest section element.');
      return null;
    }
    const sectionId = section.id;
    section.remove();  
    return sectionId;
  }
  function sectionDuplicate(button) {
    const section = button.closest('section');
    if (!section) {
      console.error('Could not find closest section element.');
      return null;
    }
  
    const clonedSection = section.cloneNode(true);
    const clonedElements = clonedSection.querySelectorAll('[id]');
  
    const idMap = new Map();
    clonedElements.forEach(element => {
      const oldID = element.getAttribute('id');
      const newID = generateRandomID(7);
      element.setAttribute('id', newID);
      idMap.set(oldID, newID);
    });
  
    // replace the section's id in the CSS
    const oldSectionID = section.getAttribute('id');
    const newSectionID = generateRandomID(7);
    idMap.set(oldSectionID, newSectionID);
  
    const style = clonedSection.querySelector('style');
    if (style) {
      let cssText = style.textContent;
      idMap.forEach((newID, oldID) => {
        cssText = cssText.replace(new RegExp(`\\b${oldID}\\b`, 'g'), newID);
      });
      style.textContent = cssText;
    }
  
    clonedSection.setAttribute('id', newSectionID);
    section.insertAdjacentElement('afterend', clonedSection);
  
    // Scroll smoothly to the cloned section
    clonedSection.scrollIntoView({ behavior: "smooth" });
  
    return newSectionID;
  }
  function sectionMoveUp(button) {
    const section = button.closest('section');
    const prevSection = section.previousElementSibling;
    prevSection.before(section);
    section.scrollIntoView({ behavior: "smooth" });
    //savePage();
  }
  function sectionMoveDown(button) {
    const section = button.closest('section');
    const nextSection = section.nextElementSibling;
    nextSection.after(section);
    section.scrollIntoView({ behavior: "smooth" });
  }
  function sectionExport(button) {
    const findClosestSection = button.closest('section');
    const sectionId = findClosestSection.id;
    const section = document.getElementById(sectionId);
    if (section) {
      let sectionHtml = section.innerHTML; // Get the innerHTML of the section
      const adminButtons = section.querySelector('.admin-buttons');
      if (adminButtons) {
        sectionHtml = sectionHtml.replace(adminButtons.outerHTML, ''); // Remove the admin-buttons div and its contents
      }
      sectionHtml = sectionHtml.trim().replace(/\n\s+/g, "");
       // Clean up the extra spaces and line breaks
      const sectionData = {
        sectionId: sectionId,
        sectionHtml: sectionHtml,
      };
      const dataStr = JSON.stringify(sectionData, null, 2);
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
      const exportFileName = `section-${sectionId}.json`;
      const downloadLink = document.createElement('a');
      downloadLink.setAttribute('href', dataUri);
      downloadLink.setAttribute('download', exportFileName);
      downloadLink.click();
    }
  }
  function sectionReplace(button) {
    const section = button.closest('section');
    const currentSectionId = section.id;
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.onchange = function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        const sectionData = JSON.parse(event.target.result);
        const sectionHtml = sectionData.sectionHtml;
        const newSectionId = `${generateRandomID(7)}`;
        const newSection = document.createElement('section');
        newSection.id = newSectionId;
        newSection.innerHTML = sectionHtml;
  
        // Generate new IDs for the section and its child elements
        const oldIds = new Set();
        newSection.querySelectorAll('[id]').forEach((element) => {
          oldIds.add(element.id);
        });
        let newIds = new Map();
        oldIds.forEach((oldId) => {
          const newId = generateRandomID(7);
          newIds.set(oldId, newId);
        });
  
        // Update the IDs in the section and its child elements
        newSection.id = newIds.get(currentSectionId) || newSectionId;
        newSection.querySelectorAll('[id]').forEach((element) => {
          const oldId = element.id;
          const newId = newIds.get(oldId) || generateRandomID(7);
          element.id = newId;
        });
  
        // Update the CSS styles with the new IDs
        const style = newSection.querySelector('style');
        if (style) {
          const oldCssText = style.textContent;
          let newCssText = oldCssText;
          newIds.forEach((newId, oldId) => {
            newCssText = newCssText.replace(new RegExp(oldId, 'g'), newId);
          });
          style.textContent = newCssText;
        }

        section.parentNode.replaceChild(newSection, section);
  
        // Add custom HTML code at the end of the new section
        const customHtml = sectionButtons();
        addCustomHTMLToSection(newSectionId, customHtml);
        //savePage();
      };
      reader.readAsText(file);
    };
    fileInput.click();
  }
  function addCustomHTMLToSection(sectionId, html) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.insertAdjacentHTML('beforeend', html.trim());
    }
  }
  function showSectionModal(button) {
    const section = button.closest('section');
    if (!section) {
      console.error('Could not find closest section element.');
      return null;
    }
    const sectionId = section.id;
    const sectionContent = '<section id="' + sectionId + '">' + section.innerHTML + '</section>';
  
    const modalHTML = `
      <div class="fullscreen-modal-section">
        <div class="fullscreen-modal-content">
          ${sectionContent}
          <button id="myButton" class="fullscreen-modal-close" onclick="closeModal()">Size</button>
        </div>
      </div>
    `;
  
    const modalStyle = `
      .fullscreen-modal-section {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 9999999;
        display: flex;
        justify-content: center;
        align-items: center;
      }
  
      .fullscreen-modal-content {
        overflow: auto;
      }
  
      .fullscreen-modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        color: #000;
        font-size: 20px;
        cursor: pointer;
        display: grid;
        grid-template-columns: 1fr;
        height: 35px;
        width: 35px;
        place-content: center;
        background: red;
        padding: 10px;
        font-size: 16px;
        border-radius: 10px;
        color: white;
      }
    `;
  
    const modal = document.createElement('div');
    modal.innerHTML = modalHTML;
  
    const style = document.createElement('style');
    style.textContent = modalStyle;
  
    document.body.appendChild(modal);
    document.head.appendChild(style);
    document.body.style.overflow = 'hidden';
  
    addButtonMediaQuery('myButton');
  }
  function closeModal() {
    const modalSection = document.querySelector('.fullscreen-modal-section');
    if (modalSection) {
      modalSection.remove();
      document.body.style.overflow = 'auto';
    }
  }
  function addButtonMediaQuery(buttonID) {

    
    const button = document.getElementById(buttonID);
    const mediaQueries = [
      { query: '(max-width: 640px)', text: 'XS' },
      { query: '(min-width: 641px) and (max-width: 768px)', text: 'S' },
      { query: '(min-width: 769px) and (max-width: 1024px)', text: 'M' },
      { query: '(min-width: 1025px) and (max-width: 1280px)', text: 'L' },
      { query: '(min-width: 1281px)', text: 'XL' }
    ];
  
    function handleResize() {
      for (const { query, text } of mediaQueries) {
        if (window.matchMedia(query).matches) {
          button.textContent = text;
          return; // Exit the loop after the first matching query
        }
      }
      button.textContent = 'Button'; // Default text if no matching query
    }
  
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
  
    // Cleanup function to remove the event listener
    return function() {
      window.removeEventListener('resize', handleResize);
    };
  }

  function showSectionToolbar(button) {
    const section = button.closest('section');
    alert (section.id);

    var toolbar = document.getElementById("toolbar-sidebar");
        toolbar.style.visibility = "visible";
        // If you want to change the position, you can adjust the right property
        toolbar.style.right = "0"; // Change this value as needed


    // const sectionToolbar = section.querySelector('.section-toolbar');
    // const toolbarOpen = section.querySelector('.toolbar-open');
    // const toolbarClose = section.querySelector('.toolbar-close');
    // sectionToolbar.style.visibility = 'visible';
    // toolbarOpen.style.visibility = 'hidden';
    // toolbarClose.style.visibility = 'visible';
  }

  function hideSectionToolbar(button) {
    const section = button.closest('section');
    const sectionToolbar = section.querySelector('.section-toolbar');
    const toolbarOpen = section.querySelector('.toolbar-open');
    const toolbarClose = section.querySelector('.toolbar-close');
    sectionToolbar.style.visibility = 'hidden';
    toolbarOpen.style.visibility = 'visible';
    toolbarClose.style.visibility = 'hidden';
  }
  