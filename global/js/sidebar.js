function mobileMenu() {
    /** NAV BOTTOM */
    var overlay = document.createElement('div'); // Create an overlay
    overlay.className = 'overlay'; // Add a class for styling
    overlay.style.display = 'none'; // Initially hide the overlay
    document.body.appendChild(overlay); // Append the overlay to the body
  
    var openBtn = document.createElement('button');
    openBtn.innerHTML = '<img id="menu" src="../global/file/menu.svg">';
    openBtn.className = 'nav-style open-btn';
    document.body.appendChild(openBtn);
  
    var closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'X';
    closeBtn.className = 'nav-style close-btn';
    document.body.appendChild(closeBtn);
  
    var popup = document.createElement('div');
    popup.innerHTML = `
      <div id="popup">
        <div id="projects" class="navigation">
          <img src="../global/file/user.svg">
          <a id='projects' href='../projects/'> Account </a>
        </div>
        <div id="managers" class="navigation">
          <img src="../global/file/servers.svg">
          <a id='managers' href='../servers/'> Servers </a>
        </div>
        <div id="managers" class="navigation">
          <img src="../global/file/plugins.svg">
          <a id='managers' href='../plugins/'> Plugins </a>
        </div>
        <div id="projects" class="navigation">
          <img src="../global/file/sites.svg">
          <a id='projects' href='../projects/'> Sites </a>
        </div>
      </div>
    `;
    popup.style.display = 'none';
    document.body.appendChild(popup);
  
    openBtn.addEventListener('click', function() {
      popup.style.display = 'block';
      overlay.style.display = 'block'; // Show the overlay
      openBtn.style.display = 'none';
      closeBtn.style.display = 'grid';
    });
  
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
      overlay.style.display = 'none'; // Hide the overlay
      openBtn.style.display = 'grid';
      closeBtn.style.display = 'none';
    });
  }
  
  // Call the mobileMenu function to generate the sidebar menu
  mobileMenu();
  