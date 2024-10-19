function publishModalOpen() {
    // create the modal HTML
    var modalHtml = `
      <div class="modal-container-publish"> 
        <div class="modal-content-publish">
            <p id='title'>This action will override your content page online, are you sure you want to proceed?</p>
            <button id='publish' class="modal-button-publish" onclick="pagePublish()">Yes publish</button>
            <button id='close' onclick="publishModalClose(); closeOverlay();" class="close-button">
            <img src="./assets/svg/icons/close.svg"></button>
            <p id="message"></p>
        </div>
      </div>
    `;  
    // add the modal to the document body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }
  
  function publishModalClose() {
    const modal = document.querySelector('.modal-container-publish');
    if (modal) {
      modal.remove();
    }
  }