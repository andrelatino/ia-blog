
  function directoriesModalHtml() {

    // directoriesModal HTML content
    const directoriesModalHTML = `
      <div id="directoriesModalOverlay">
        <div id="directoriesModalContent" class="directoriesModal-content">
          <div class="sites-directoriesModal-header">
            <button style="display:none;"><img src="../global/file/drag.svg"></button>
            <p class="dir-title">New page</p>
            <span class="close" onclick="directoriesModalClose()"><img src="../global/file/close-white.svg"></span>
          </div>
          <div class="sites-directoriesModal-content">
         
            <select id="selectDirOrFile">
              
              <option value="Page">Page</option>
              
            </select>

            <input id="pageName" type="text" class="sites-inputs" placeholder="Name">
            <button id="createNewButton" onclick="createContent()">Add New Page</button>
            <span id="dir-message"></span>
          </div>
        </div>
      </div>
    `;
  
    // Create a directoriesModalDiv element
    const directoriesModalDiv = document.createElement('div');
    directoriesModalDiv.innerHTML = directoriesModalHTML;
    var footerElement = document.getElementsByTagName("footer")[0];
    footerElement.parentNode.insertBefore(directoriesModalDiv, footerElement);
  }

  directoriesModalHtml();
  
  function directoriesModalOpen() {
    const directoriesModalOverlay = document.getElementById("directoriesModalOverlay");
    const directoriesModalContent = document.getElementById("directoriesModalContent");
    directoriesModalOverlay.style.visibility = "visible";
    directoriesModalContent.style.visibility = "visible";
  }
  
  function directoriesModalClose() {
    const directoriesModalOverlay = document.getElementById("directoriesModalOverlay");
    const directoriesModalContent = document.getElementById("directoriesModalContent");
    directoriesModalOverlay.style.visibility = "hidden";
    directoriesModalContent.style.visibility = "hidden";
  }
  // Create the directoriesModal when the page loads
  window.onload = directoriesModalHtml;
