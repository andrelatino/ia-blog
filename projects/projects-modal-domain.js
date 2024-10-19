
  function modalDomainHtml() {
    // CSS styles
    const domainOverlayCss = `
        visibility:hidden;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 9999;
    `;
  
    const domainContentCss = `
        visibility:hidden;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: auto;
        padding: 0;
        margin: 0;
        z-index: 999999;
        box-shadow: 1px 1px 16px #8080806e;
        min-height: 250px;
        max-width: 375px;
        background: white;
        padding: 20px;
        border-radius:10px;
    `;
  
    const modalDomainCloseCss = `
        position: absolute;
        right: -25px;
        top: -25px;
        width: 50px;
        padding:10px;
        background: red!important;
        border-radius: 50%;
        height: 50px!important;
    `;
  
    // Modal HTML content
    const domainHTML = `
      <div id="domainOverlay" style="${domainOverlayCss}">
        <div id="domainContent" class="domain-content" style="${domainContentCss}">
          <div class="sites-domain-header"> 
            <p>Custom Domain</p>
            <span class="close" style="${modalDomainCloseCss}" onclick="modalDomainClose()"><img src="../global/file/close-white.svg"></span>
          </div>
          <div class="sites-domain-content">
            <p>Before adding a custom domain, set up four A records to point to these IPs:</p>
            <ul>
              <li>185.199.108.153</li>
              <li>185.199.109.153</li>
              <li>185.199.110.153</li>
              <li>185.199.111.153</li>
            </ul>
            <input id="inputNameValue" type="text" class="sites-inputs" placeholder="site.com">
            <input id="inputDescriptionValue" type="text" class="sites-inputs" placeholder="Description">
            <button id="createRepoButton" onclick="createDomain()">Check domain</button>
            <p id="message"></p>
          </div>
        </div>
      </div>
    `;
  
    // Create a domainDiv element
    const domainDiv = document.createElement('div');
    domainDiv.innerHTML = domainHTML;
    var footerElement = document.getElementsByTagName("footer")[0];
    footerElement.parentNode.insertBefore(domainDiv, footerElement);
  }
  
  function modalDomainOpen() {
    const domainOverlay = document.getElementById("domainOverlay");
    const domainContent = document.getElementById("domainContent");
    domainOverlay.style.visibility = "visible";
    domainContent.style.visibility = "visible";
  }
  
  function modalDomainClose() {
    const domainOverlay = document.getElementById("domainOverlay");
    const domainContent = document.getElementById("domainContent");
    domainOverlay.style.visibility = "hidden";
    domainContent.style.visibility = "hidden";
  }
  // Create the domain when the page loads
  window.onload = modalDomainHtml();
