
  
  function _1710334698() { 
    //MAIN
    const addSectionToGrid = document.getElementById("grid");
    const section_id = generateRandomID(7);
    const section_css = section_id;
    //GRID
    const grid_id = generateRandomID(7);
    const grid_css = grid_id;
    //ITEMS
    const item1_id = generateRandomID(7);
    const item1_css = item1_id;

    const item2_id = generateRandomID(7);
    const item2_css = item2_id;


    const customCSS = `
    @media screen and (min-width:0px){#${section_css}{width:100%;height:100vh;position:relative}}

    @media screen and (min-width:0px){#${grid_css}{width:100%;height:100%;display:grid; grid-template-columns: 1fr 1fr;}}
    @media screen and (min-width:0px){#${item1_css}{object-fit:cover;height:100%;min-height:100vh;width:100%;background:white;}}
    @media screen and (min-width:0px){#${item2_css}{object-fit:cover;height:100%;min-height:100vh;width:100%;background:white;}}

    @media screen and (max-width:640px){#${grid_css}{width:100%;height:max-content;display:grid;grid-template-columns:1fr;}}
    @media screen and (max-width:640px){#${item1_css}{object-fit:cover;height:100%;min-height:50vh;width:100%;display:grid;}}
    @media screen and (max-width:640px){#${item2_css}{object-fit:cover;height:100%;min-height:50vh;width:100%;display:grid;}}
    
    `;
    const customHTML = `
    
    <section id="${section_id}" data-type="section">
      <style id="${generateRandomID(7)}" type="text/css" data-type="css">
        ${customCSS}
      </style>
      
        <div id="${grid_id}" data-type="grid" class="grid-section">
        
        <video id="${item1_id}" class="grid-item"  autoplay loop muted data-type="vid-grid" loading="lazy">
          <source src="https://github.com/IAMEDIA360/videos/raw/main/1795203691-1.mp4" type="video/mp4">
        </video>

        <video id="${item2_id}" class="grid-item"  autoplay loop muted data-type="vid-grid" loading="lazy">
          <source src="https://github.com/IAMEDIA360/videos/raw/main/1795203691-1.mp4" type="video/mp4">
        </video>


        </div>


      <button class="toolbar-open" onclick="toolsOpenModal(this)">
        <img src="../global/file/edit-section.svg" data-type="img-edit">
      </button>
  </section>
  
    `;
    addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
    const sections = document.querySelectorAll("section");
    const newSection = sections[sections.length - 1];
    newSection.scrollIntoView({ behavior: "smooth" });  
    //savePage();
    }