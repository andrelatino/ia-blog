function settingsOpenSidebar() {
    var settings = document.getElementById("settings-sidebar");
    if (window.innerWidth < 640) {
        settings.style.visibility = "visible";
        settings.style.transition = "right 0.5s";
        settings.style.right = "0px";
        settings.style.width = "100%";
    } else {
        settings.style.visibility = "visible";
        settings.style.transition = "right 0.5s";
        settings.style.right = "0px";
        settings.style.maxWidth = "500px";
    }
  }
  
  function settingsCloseSidebar() {
    var settings = document.getElementById("settings-sidebar");
    if (window.innerWidth < 640) {
        settings.style.transition = "right 0.5s";
        settings.style.right = "-100%";
        settings.style.width = "100%";
    } else {
        settings.style.transition = "right 0.5s";
        settings.style.right = "-500px";
    }
  }