
  
  function _menu() { 
    // alert('menu');
    //MAIN
    const addSectionToGrid = document.getElementById("grid-body");
    const section_id = generateRandomID(7);
    const section_css = section_id;
    //GRID
    const grid_id = generateRandomID(7);
    const grid_css = grid_id;
    //ITEMS
    const logo_div_id = generateRandomID(7);
    const logo_div_css = logo_div_id;

    const logo_id = generateRandomID(7);
    const logo_css = logo_id;
  

    const link_div_id = generateRandomID(7);
    const link_div_css = link_div_id;

    const mobile_div_id = generateRandomID(7);
    const mobile_div_css = mobile_div_id;

    const menu_div_id = generateRandomID(7);
    const menu_div_css = menu_div_id;

    const menu_id = generateRandomID(7);
    const menu_css = menu_id;


    const customCSS = `
    @media screen and (min-width:0px){#${section_css}{position:sticky;top:0;z-index:100;}}
    @media screen and (min-width:0px){#${grid_css}{background:#263238;display:grid;grid-template-columns:repeat(3, auto);place-content:center;align-items:center;gap:20px;}}
    @media screen and (min-width:0px){#${logo_div_css}{}}
    @media screen and (min-width:0px){#${logo_css}{height:100px;width:auto;object-fit:contain}}
    @media screen and (min-width:0px){#${link_div_css}{display:flex;gap:20px; place-items:center;margin-right:20px; color:white; font-size:12px;}}
    @media screen and (min-width:0px){#${mobile_div_css}{background-color:white; border:none;border-radius:10px;height:auto;width:auto;padding:10px;}}
    @media screen and (min-width:0px){#${menu_div_css}{height:auto;}}
    @media screen and (min-width:0px){#${menu_css}{height:auto;padding:10px;border:none;border-radius:10px;}}
    @media screen and (max-width:640px){#${link_div_css}{display:none;}}
    @media screen and (max-width:640px){#${grid_css}{grid-template-columns:repeat(2, auto); place-content:space-around;}}
    
    
    `;
    const customHTML = `
    
    <section id="${section_id}" data-type="section">
      <style id="${generateRandomID(7)}" type="text/css" data-type="css">
        ${customCSS}
      </style>
      
        <div id="${grid_id}" data-type="raw-html">
            <div id ="${logo_div_id}">
              <img id="${logo_id}" src="https://raw.githubusercontent.com/icheff/energia.fr/main/media/images/logo-white.svg" data-type="image-fg" loading="lazy">
            </div>

            <div id ="${link_div_id}">
              <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">HOME</a>
              <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">ABOUT</a> 
              <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">SERVICES</a> 
              <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">CONTACT</a> 
              <a id="${generateRandomID(7)}" contenteditable="true" href="https://www">BLOG</a>  
            </div>

            <div id ="${menu_div_id}">
              <button id="${menu_id}">MENU</button>
            </div>
        </div>

        <script id="acdfr1457" data-type="raw-js">function sayHello(){alert('hello')}</script>

      <button class="toolbar-open" onclick="toolsOpenModal(this)"></button>
  </section>
  
    `;
    addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
    const sections = document.querySelectorAll("section");
    const newSection = sections[sections.length - 1];
    newSection.scrollIntoView({ behavior: "smooth" });  
    //savePage();
    }