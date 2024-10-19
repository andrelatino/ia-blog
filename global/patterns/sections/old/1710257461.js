
  
  function _1710257461() { 
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

    const item2_h1_id = generateRandomID(7);
    const item2_h1_css = item2_h1_id;
    
    const item2_p_id = generateRandomID(7);
    const item2_p_css = item2_p_id;

    const item2_buttons_id = generateRandomID(7);
    const item2_buttons_css = item2_buttons_id;

    const customCSS = `
    @media screen and (min-width:0px){#${section_css}{width:100%;height:100vh;position:relative}}

    @media screen and (min-width:0px){#${grid_css}{width:100%;height:100%;display:grid; grid-template-columns: 1fr 1fr;}}
    @media screen and (min-width:0px){#${item1_css}{object-fit:cover;height:100%;min-height:100vh;width:100%;background:white;}}
    @media screen and (min-width:0px){#${item2_css}{display:grid;place-content:center;background:white;}}
    @media screen and (min-width:0px){#${item2_h1_css}{font-size: clamp(2rem,3vw,4rem);line-height:1;}}
    @media screen and (min-width:0px){#${item2_p_css}{font-size:1rem;}}
    @media screen and (min-width:0px){#${item2_buttons_css}{display:flex;gap:15px;}}

    @media screen and (max-width:640px){#${grid_css}{width:100%;height:max-content;display:grid;grid-template-columns:1fr;}}
    @media screen and (max-width:640px){#${item1_css}{object-fit:cover;height:100%;min-height:50vh;width:100%;display:grid;order:1;}}
    @media screen and (max-width:640px){#${item2_css}{min-height:50vh; display:grid;place-content:center;padding:10%;background:white;}}
    
    `;
    const customHTML = `
    
    <section id="${section_id}" data-type="section">
      <style id="${generateRandomID(7)}" type="text/css" data-type="css">
        ${customCSS}
      </style>
      
        <div id="${grid_id}" data-type="grid" class="grid-section">

        <img id="${item1_id}" src="https://raw.githubusercontent.com/IAMEDIA360/SVGs/main/1.svg" data-type="img-grid" loading="lazy">
      
        <div id="${item2_id}" class="grid-item grid-text">
          <h2 id="${item2_h1_id}" contenteditable="true">Ut enim ad minim veniam quis nostrud</h2>
          <p id="${item2_p_id}" contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
          <div id="${item2_buttons_id}">
            <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">LOREM IPSUM</a>
            <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">LOREM IPSUM</a>
          </div>
        </div>

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