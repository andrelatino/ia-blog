function sidebarOpenClose(button) {
    var buttonId = button.id;
    switch (buttonId) {
      case 'imageWebSidebarButton':
        openImageSidebar();
        closeGithubImageSidebar();
        
      break;

      case 'imageGithubSidebarButton':
        openGithubImageSidebar();
        closeImageSidebar();
        
        break;

      default:
        break;
    }
  }

  function openImageSidebar() {
    sidebar = document.getElementById("image-sidebar");
    sidebar.style.bottom = "0px";
    sidebar.style.transition = "bottom 0.5s";
  }

  function closeImageSidebar() {
    sidebar = document.getElementById("image-sidebar");
    sidebar.style.transition = "bottom 0.5s";
    sidebar.style.bottom = "-20vh";
  }

  

  function openGithubImageSidebar() {
    sidebar = document.getElementById("image-github-sidebar");
    sidebar.style.transition = "bottom 0.5s";
    sidebar.style.bottom = "0px";
  }

  function closeGithubImageSidebar() {
    sidebar = document.getElementById("image-github-sidebar");
    sidebar.style.transition = "bottom 0.5s";
    sidebar.style.bottom = "-20vh";
  }

  function closeAllImageSidebars(){
    closeImageSidebar();
    closeGithubImageSidebar();
 }