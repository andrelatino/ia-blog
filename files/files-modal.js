
  function filesModalHtml() {

    // filesModal HTML content
    const filesModalHTML = `
      <div id="filesModalOverlay">
        <div id="filesModalContent" class="filesModal-content">
          <div class="sites-filesModal-header">
            <button style="display:none;"><img src="../global/file/drag.svg"></button>
            <p class="file-title">New file</p>
            <span class="close" onclick="filesModalClose()"><img src="../global/file/close-white.svg"></span>
          </div>
          <div class="sites-filesModal-content">
         
            <select id="selectDirOrFile">
              <option value="File">File</option>
            </select>

            <input id="pageName" type="text" class="sites-inputs" placeholder="Nom">
            <button id="createNewButton" onclick="createFile()">Add new file</button>
            <span id="file-message"></span>
          </div>
        </div>
      </div>
    `;
  
    // Create a filesModalDiv element
    const filesModalDiv = document.createElement('div');
    filesModalDiv.innerHTML = filesModalHTML;
    var footerElement = document.getElementsByTagName("footer")[0];
    footerElement.parentNode.insertBefore(filesModalDiv, footerElement);
  }

  // filesModalHtml();
  
  function filesModalOpen() {
    const filesModalOverlay = document.getElementById("filesModalOverlay");
    const filesModalContent = document.getElementById("filesModalContent");
    filesModalOverlay.style.visibility = "visible";
    filesModalContent.style.visibility = "visible";
  }
  
  function filesModalClose() {
    const filesModalOverlay = document.getElementById("filesModalOverlay");
    const filesModalContent = document.getElementById("filesModalContent");
    filesModalOverlay.style.visibility = "hidden";
    filesModalContent.style.visibility = "hidden";
  }
  // Create the filesModal when the page loads
  window.onload = filesModalHtml;
