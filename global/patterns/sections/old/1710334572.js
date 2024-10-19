
  
  function _1710334572() { 
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

    const item3_id = generateRandomID(7);
    const item3_css = item3_id;

    const item4_id = generateRandomID(7);
    const item4_css = item4_id;
    

    const customCSS = `
    @media screen and (min-width:0px){#${section_css}{width:100%;height:100%;position:relative}}
    @media screen and (min-width:0px){#${grid_css}{width:100%;height:100%;display:grid;grid-template-columns:1fr 1fr;}}
    @media screen and (min-width:0px){#${item1_css}{object-fit:cover;height:100%;height:50vh;width:100vw}}
    @media screen and (min-width:0px){#${item2_css}{background:white;display:grid;padding:10%;place-content:center;}}
    @media screen and (min-width:0px){#${item3_css}{object-fit:cover;height:100%;height:50vh;width:100vw}}
    @media screen and (min-width:0px){#${item4_css}{background:white;display:grid;padding:10%;place-content:center;}}

    @media screen and (max-width:640px){#${grid_css}{width:100%;height:100%;display:grid;grid-template-columns:1fr;}}
    @media screen and (max-width:640px){#${item4_css}{order:3}}
 
    `;
    const customHTML = `
    
    <section id="${section_id}" data-type="section" data-type="css">
    <style id="${generateRandomID(7)}" type="text/css">
      ${customCSS}
    </style>
    
      <div id="${grid_id}" data-type="grid" class="grid-section">
 
          <img id="${item1_id}" class="grid-item" src="https://raw.githubusercontent.com/IAMEDIA360/SVGs/main/1.svg" data-type="img-grid" loading="lazy">
          <div id="${item2_id}" class="grid-item">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
          </div>
          <div id="${item4_id}" class="grid-item"> 
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p> 
          </div>
          <img id="${item3_id}" class="grid-item" src="https://raw.githubusercontent.com/IAMEDIA360/SVGs/main/3.svg" data-type="img-grid" loading="lazy">
          
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