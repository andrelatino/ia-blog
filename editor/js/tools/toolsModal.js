
  
   function toolsOpenModal(button) {

    

    
    // disableContentEditable();

    localStorage.setItem('imageTypeIs', 'img-bg');
    
    const section = button.closest('section');
    const addSectionID = section.id;
    const textID = document.getElementById('toolbarSectionID');
    textID.textContent = addSectionID;


    const gridBoxId = getGridBoxIdFromSectionId(section.id);
    const gridBoxTxt = document.getElementById('gridBoxTxt')
    gridBoxTxt.textContent = gridBoxId;

    const addSectionIdToCss = document.getElementById('sectionID-text');
    const inputCssRules = document.getElementById('inputCssRules');
    addSectionIdToCss.textContent = addSectionID;
    inputCssRules.textContent = 'section#'+addSectionID;

    const buttonIdTxt = document.getElementById('buttonID-text');
    buttonIdTxt.textContent = 'ALL';
    

    getStyleIdInSection(addSectionID);
    extractElementTags(addSectionID);

    

    const elementIDtext = document.getElementById("elementID-text");
    elementIDtext.textContent = addSectionID;
    

    var dragToolbarModal = document.querySelector("#toolbarModal");
    var dragToolbarButton = document.querySelector("#toolbar-drag");
    makeElementDraggable(dragToolbarModal, dragToolbarButton);

    const openModal = document.getElementById('toolbarModal');
    const overlay = document.getElementById('overlay');
    openModal.style.visibility='visible';
    overlay.style.display = 'none'; 

  }

  function getGridBoxIdFromSectionId(sectionId) {
    const section = document.querySelector(`section[id="${sectionId}"]`);
    if (section) {
      const gridBox = section.querySelector('grid-box');
      if (gridBox) {
        return gridBox.getAttribute('id');
      }
    }
    return null;
  }

  

 
  
  function toolsCloseModal() {
    // find the modal and remove it from the DOM
    const openModal = document.getElementById('toolbarModal');
    const overlay = document.getElementById('overlay');
    openModal.style.visibility='hidden';
    overlay.style.display = 'none'; 
  }

  function getStyleIdInSection(sectionId) {
    // Obtener la sección por su ID
    const section = document.getElementById(sectionId);
    if (!section) {
        console.error('Sección no encontrada.');
        return;
    }

    // Obtener la etiqueta <style> dentro de la sección
    const styleTag = section.querySelector('style');
    if (!styleTag) {
        console.error('Etiqueta <style> no encontrada dentro de la sección.');
        return;
    }

    // Obtener el ID de la etiqueta <style>
    const styleId = styleTag.id;

    // Actualizar el contenido del <span> con el ID "styleID-text"
    const styleIdSpan = document.getElementById('styleID-text');
    if (styleIdSpan) {
        styleIdSpan.textContent = styleId ? styleId : 'No se encontró el ID del estilo';
    } else {
        console.error('Span con ID "styleID-text" no encontrado.');
    }
}

// Llamar a la función con el ID de la sección para obtener su ID de estilo y actualizar el contenido del <span>

function overlay_open() {
  document.getElementById("overlay_overlay").style.display = "block";
}
function overlay_close() {
  document.getElementById("overlay_overlay").style.display = "none";
}

  function deleteSection() {

    const textID = document.getElementById('toolbarSectionID');
    const sectionIdToDelete = textID.textContent; // Get the section ID from the <p> tag
  
    if (sectionIdToDelete) {
      const sectionToDelete = document.getElementById(sectionIdToDelete); // Find the section element
      if (sectionToDelete) {
        sectionToDelete.remove(); // Remove the section element
        textID.textContent = ''; // Clear the content of the <p> tag
      } else {
        console.error(`Section with ID "${sectionIdToDelete}" not found.`);
      }
    } else {
      console.error('Section ID not found in the <p> tag.');
    }

    toolsCloseModal();
  }

  function duplicateSection() {
    const textID = document.getElementById('toolbarSectionID');
    const sectionID = textID.textContent.trim(); // Get the section ID from the <p> tag and remove leading/trailing whitespace
  
    // Find the section with the specified ID
    const section = document.getElementById(sectionID);
  
    if (section) {
      const clonedSection = section.cloneNode(true);
      const clonedElements = clonedSection.querySelectorAll('[id]');
  
      const idMap = new Map();
      clonedElements.forEach(element => {
        const oldID = element.getAttribute('id');
        const newID = generateRandomID(7);
        element.setAttribute('id', newID);
        idMap.set(oldID, newID);
      });
  
      // Replace the section's id in the CSS
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
  
      // Insert the cloned section immediately after the current section
      section.insertAdjacentElement('afterend', clonedSection);
  
      // Scroll smoothly to the cloned section
      clonedSection.scrollIntoView({ behavior: "smooth" });
  
      return newSectionID;
    } else {
      console.log("Section with ID " + sectionID + " not found.");
      return null;
    }
  }

  function moveUpSection() {
    const textID = document.getElementById('toolbarSectionID');
    const sectionID = textID.textContent.trim(); // Get the section ID from the <p> tag and remove leading/trailing whitespace
  
    // Find the section with the specified ID
    const section = document.getElementById(sectionID);
  
    if (section) {
      const prevSection = section.previousElementSibling;
  
      if (prevSection) {
        prevSection.before(section);
        section.scrollIntoView({ behavior: "smooth" });
        // Uncomment the following line to save the page
        // savePage();
      } else {
        console.log("No previous sibling section found.");
      }
    } else {
      console.log("Section with ID " + sectionID + " not found.");
    }
  }

  function moveDownSection() {
    const textID = document.getElementById('toolbarSectionID');
    const sectionID = textID.textContent.trim(); // Get the section ID from the <p> tag and remove leading/trailing whitespace
  
    // Find the section with the specified ID
    const section = document.getElementById(sectionID);
  
    if (section) {
      const nextSection = section.nextElementSibling;
  
      if (nextSection) {
        nextSection.after(section);
        section.scrollIntoView({ behavior: "smooth" });
        // Uncomment the following line to save the page
        // savePage();
      } else {
        console.log("No next sibling section found.");
      }
    } else {
      console.log("Section with ID " + sectionID + " not found.");
    }
  }

  function exportSection() {
    const textID = document.getElementById('toolbarSectionID');
    const sectionID = textID.textContent.trim(); 
    const section = document.getElementById(sectionID);
    if (section) {
      let sectionHtml = section.innerHTML; // Get the innerHTML of the section
      const adminButtons = section.querySelector('.admin-buttons');
      if (adminButtons) {
        sectionHtml = sectionHtml.replace(adminButtons.outerHTML, ''); // Remove the admin-buttons div and its contents
      }
      sectionHtml = sectionHtml.trim().replace(/\n\s+/g, "");
       // Clean up the extra spaces and line breaks
      const sectionData = {
        sectionId: sectionID,
        sectionHtml: sectionHtml,
      };
      const dataStr = JSON.stringify(sectionData, null, 2);
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
      const exportFileName = `section-${sectionID}.json`;
      const downloadLink = document.createElement('a');
      downloadLink.setAttribute('href', dataUri);
      downloadLink.setAttribute('download', exportFileName);
      downloadLink.click();
    }
  }

  function addContentEditableSpan() {
    // Generate a new ID for the span element
    var newId = generateRandomID();
    // Create the new span element with the ID and contenteditable attribute
    var newSpan = document.createElement("span");
    newSpan.setAttribute("id", newId);
    newSpan.setAttribute("contenteditable", "true");
    // Add the new span element to the document
    document.body.appendChild(newSpan);
  }
  
  function addSpan() {
    if (window.getSelection) {
      var selection = window.getSelection();
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        if (selectedText) {
          var newNode = document.createElement("span");
          range.deleteContents();
          var newTextNode = document.createTextNode(selectedText);
          newNode.setAttribute("contenteditable", "true");
          newNode.setAttribute("id", generateRandomID());
          newNode.appendChild(newTextNode);
          range.insertNode(newNode);
          selection.removeAllRanges();
          selection.addRange(range);
          //savePage();
        } else {
          addContentEditableSpan();
        }
      }
    }
  }

  function removeSpan() {
    if (window.getSelection) {
      var selection = window.getSelection();
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        var parentNode = range.commonAncestorContainer.parentNode;
        var spanNode = parentNode.closest("span");
        if (spanNode && spanNode.nodeName === "SPAN") {
          var spanText = spanNode.textContent;
          if (selectedText === spanText) {
            var textNode = document.createTextNode(selectedText);
            spanNode.replaceWith(textNode);
            //savePage();
          }
        }
      }
    }
  }

  function addLink() {
    if (window.getSelection) {
      var selection = window.getSelection();
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        var parentNode = range.commonAncestorContainer.parentNode;
        var linkNode = parentNode.closest("a");
        if (linkNode && linkNode.nodeName === "A") {
          var linkUrl = prompt("Enter the URL for the link:", linkNode.getAttribute("href"));
          if (linkUrl) {
            linkNode.setAttribute("href", linkUrl);
          }
        } else {
          if (selectedText) {
            var linkUrl = prompt("Enter the URL for the link:", "http://");
            if (linkUrl) {
              var newNode = document.createElement("a");
              var uniqueId = generateRandomID();
              newNode.setAttribute("href", linkUrl);
              newNode.setAttribute("id", uniqueId);
              newNode.setAttribute("contenteditable", "true");
              newNode.appendChild(document.createTextNode(selectedText));
              range.deleteContents();
              range.insertNode(newNode);
            }
          }
        }
      }
    }
  }

  function removeLink() {
    if (window.getSelection) {
      var selection = window.getSelection();
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var node = range.commonAncestorContainer;
        while (node && node.nodeName !== "A") {
          node = node.parentNode;
        }
        if (node && node.nodeName === "A") {
          var parent = node.parentNode;
          var children = node.childNodes;
          for (var i = children.length - 1; i >= 0; i--) {
            parent.insertBefore(children[i], node);
          }
          parent.removeChild(node);
        }
      }
    }
  }

  function addImageLink() {
    var selectedElement = document.activeElement;
    if (selectedElement && selectedElement.tagName === 'IMG') {
        var linkNode = selectedElement.closest("a");
        if (linkNode && linkNode.nodeName === "A") {
            var linkUrl = prompt("Enter the URL for the link:", linkNode.getAttribute("href"));
            if (linkUrl) {
                linkNode.setAttribute("href", linkUrl);
            }
        } else {
            var linkUrl = prompt("Enter the URL for the link:", "http://");
            if (linkUrl) {
                var newNode = document.createElement("a");
                var uniqueId = generateRandomID();  // Ensure you have a function to generate a unique ID
                newNode.setAttribute("href", linkUrl);
                newNode.setAttribute("id", uniqueId);
                newNode.setAttribute("contenteditable", "true");
                selectedElement.parentNode.insertBefore(newNode, selectedElement);
                newNode.appendChild(selectedElement);
            }
        }
    }
}


  function generateRandomID() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var id = '';
    for (var i = 0; i < 7; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
    return id;
  }

 
  function showFullScreen() {
    const textID = document.getElementById('toolbarSectionID');
    const sectionId = textID.textContent; // Get the section ID
  
    // Find the section element with the given ID
    const sectionElement = document.getElementById(sectionId);
  
    if (!sectionElement) {
      // alert('Section not found');
      return;
    }
  
    const sectionContent = sectionElement.innerHTML; // Get the HTML content of the section
  
    const modalHTML = `
      <div class="fullscreen-modal-section">
        <div class="fullscreen-modal-content">
          <section id="${sectionId}">${sectionContent}</section>
          <button id="myButton" class="fullscreen-modal-close" onclick="closeFullscreenModal()">Close</button>
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
  
  function closeFullscreenModal() {
    var modalElement = document.querySelector('.fullscreen-modal-section');
    
    if (modalElement) {
      modalElement.remove(); // Remove the element from the DOM
    }
  }

  function createCodePreviewModal() {
    // Check if the modal already exists
    if (!document.getElementById('codePreviewModal')) {
        // Create the modal div
        var modal = document.createElement('div');
        modal.id = 'codePreviewModal';
        modal.style.display = 'none';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.background = 'rgba(0,0,0,0.8)';
        modal.style.zIndex = '1000';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.overflow = 'auto';

        // Create the <pre> element for code
        var pre = document.createElement('pre');
        pre.id = 'codePreview';
        pre.style.backgroundColor = 'white';
        pre.style.padding = '20px';
        pre.style.maxWidth = '80%';
        pre.style.maxHeight = '80%';
        pre.style.overflow = 'auto';
        modal.appendChild(pre);

        // Create the close button
        var closeButton = document.createElement('button');
        closeButton.onclick = closeCodePreview;
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.background = 'none';
        closeButton.style.border = 'none';
        closeButton.style.color = 'white';
        closeButton.style.fontSize = '24px';
        closeButton.innerHTML = '&times;';
        modal.appendChild(closeButton);

        // Append the modal to the body
        document.body.appendChild(modal);
    }
}

function showCodePreview() {
    createCodePreviewModal();
    const textID = document.getElementById('toolbarSectionID');
    const sectionId = textID.textContent; // Get the section ID
    var section = document.getElementById(sectionId);
    var code = section.outerHTML;
    document.getElementById('codePreview').textContent = code;
    document.getElementById('codePreviewModal').style.display = 'flex';
}

function closeCodePreview() {
    document.getElementById('codePreviewModal').style.display = 'none';
}
