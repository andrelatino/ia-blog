function _grid_footer_3() {

	const grid_container_id = generateRandomID(7);
	const grid_box_id = generateRandomID(7);
  const grid_item_id = generateRandomID(7);
  
  const grid_bg = generateRandomID(7);
  const bg_img = generateRandomID(7);
  const bg_color = generateRandomID(7);
  const bg_solid_color = generateRandomID(7);
  const bg_radial_color = generateRandomID(7);
  const bg_linear_color = generateRandomID(7);
  const bg_img_div = generateRandomID(7);
  const bg_video_div = generateRandomID(7);
  const bg_video = generateRandomID(7);

	const item_img_box = generateRandomID(7);
  const item_img_item = generateRandomID(7);
  const item1_a = generateRandomID(7);

  const item_1_menu = generateRandomID(7);
  const item_1_box = generateRandomID(7);
  const item_1_add = generateRandomID(7);

  const item_2_menu = generateRandomID(7);
  const item_2_box = generateRandomID(7);
  const item_2_add = generateRandomID(7);

  const item_3_menu = generateRandomID(7);
  const item_3_box = generateRandomID(7);
  const item_3_add = generateRandomID(7);

	const laptopCss = `
  grid-container#${grid_container_id} {
    position: relative;
  }

  grid-bg#${grid_bg} {
    position: absolute;
    height:100%;
    width:100%;
    z-index:-1;
    display:block;
  }
  div#${bg_color},
  div#${bg_solid_color},
  div#${bg_radial_color},
  div#${bg_linear_color}{
    height:100%;
    width:100%;
  }

  div#${bg_img_div}{
    height:100%;
    width:100%;
    
  }

  div#${bg_video_div}{
    height:100%;
    width:100%;
    
  }

  img#${bg_img} {
    object-fit:cover;
    height:100%;
    width:100%;
  }

  video#${bg_video} {
    object-fit:cover;
    height:100%;
    width:100%;
  }
  
  grid-box#${grid_box_id}{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    width: 100%;
    height: 100%;
    min-height: 50px;
    gap: 1px;
    
  }
  grid-box#${grid_box_id} h2{
    display:grid;
    place-content:center;
    font-size: 24px;
    color:white;
  }
  grid-box#${grid_box_id} > grid-item {
    padding: 35px;
    display: grid;
    height: 100%;
    width: 100%;
    place-items: baseline;
    place-content: baseline center;
    background:black;
  }

  grid-item#${grid_item_id}{
    padding: 35px;
    display: grid;
    height: 100%;
    width: 100%;
    place-items: baseline;
    place-content: baseline center;
  }

  img#${item_img_item}{
    object-fit:cover;
    height:100%;
    width:100%;
  }
  #${item_1_box},
  #${item_2_box},
  #${item_3_box}{
    display: grid;
    gap: 0px;
    
  }
  
  #${item_1_box} a,
  #${item_2_box} a,
  #${item_3_box} a
  {
    border: none;
    padding: 5px 20px;
    color: white;
    font-size: 14px;
    border-radius: 10px;
    text-underline-position: under;
    height: auto;
    width: fit-content;
    display: grid;
    place-content: center;
  }
  
  `;
  
  const tabletCss = `
  grid-box#${grid_box_id}{
    grid-template-columns: repeat(2, 1fr);
  }
  #${item_3_menu}{
    grid-column: span 2;
  }
  `;
  const mobileCss = `
  grid-box#${grid_box_id}{
    grid-template-columns: repeat(1, 1fr);
  }
  `;

	const customHTML = `
  <section id="${generateRandomID(7)}" data-type="section">
      
      <!--CSS-->
      <style id="${generateRandomID(7)}" type="text/css" data-type="css" data-size="laptop" data-content="section">${laptopCss}</style>
      <style id="${generateRandomID(7)}" type="text/css" data-type="css" data-size="tablet" data-content="section">@media screen and (min-width:641px) and (max-width:1024px){${tabletCss}}</style>
      <style id="${generateRandomID(7)}" type="text/css" data-type="css" data-size="mobile" data-content="section">@media screen and (max-width:640px){${mobileCss}}</style>
      
      <!--HTML-->
      <div id="${generateRandomID(7)}" data-type="html">
        <grid-container id="${generateRandomID(7)}">
        
        <grid-bg id="${grid_bg}" data-type="grid-bg">
          <!-- bg-color -->
          <div id="${bg_color}" data-type="bg-color" class="div-visible">
            <div id="${bg_solid_color}" data-type="solid-color" class="div-visible" style="background: rgb(98, 98, 98);"></div>
            <div id="${bg_radial_color}" data-type="radial-color" class="div-hidden" style="background: radial-gradient(circle, rgb(0, 0, 0), rgb(0, 0, 0));"></div>
            <div id="${bg_linear_color}" data-type="linear-color" class="div-hidden" style="background: linear-gradient(0deg, rgb(0, 0, 0), rgb(0, 0, 0));"></div>
          </div> 
          <!-- bg-image -->
          <div id="${bg_img_div}" data-type="bg-image" class="div-hidden">
            <picture id="${generateRandomID(7)}">
              <source srcset media="(max-width:640px)">
              <source srcset media="(min-width:641px) and (max-width:1024px)">
              <img id="${bg_img}" src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHwyM3x8Zm9vZHxlbnwwfDB8fHwxNzE2ODM1NjIzfDA&ixlib=rb-4.0.3&w=1280&h=720&fit=crop" data-type="image-bg" loading="lazy">
            </picture>
          </div> 
          <!-- bg-video -->
          <div id="${bg_video_div}" data-type="bg-video" class="div-hidden">
            <video id="${bg_video}" autoplay loop muted loading="lazy" data-type="video-bg" src="https://github.com/IAMEDIA360/videos/raw/main/empty.mp4"></video>
          </div>
        </grid-bg>

        <grid-box id="${grid_box_id}">

          <grid-item id="${item_1_menu}">
            <grid-box id="${item_1_box}">
              <h2 id="${generateRandomID(7)}" contenteditable="true">Title</h2>
              <button id="${item_1_add}" class="no-export grid-add-item" onclick="itemsButtons('${item_1_box}','${item_1_add}')">+</button>
            </grid-box>
          </grid-item>

          <grid-item id="${item_2_menu}">
            <grid-box id="${item_2_box}">
              <h2 id="${generateRandomID(7)}" contenteditable="true">Title</h2>
              <button id="${item_2_add}" class="no-export grid-add-item" onclick="itemsButtons('${item_2_box}','${item_2_add}')">+</button>
            </grid-box>
          </grid-item>

          <grid-item id="${item_3_menu}">
            <grid-box id="${item_3_box}">
              <h2 id="${generateRandomID(7)}" contenteditable="true">Title</h2>
              <button id="${item_3_add}" class="no-export grid-add-item" onclick="itemsButtons('${item_3_box}','${item_3_add}')">+</button>
            </grid-box>
          </grid-item>

          </grid-box>
        </grid-container>
      </div>
      
      <!--JS-->
      <script id="${generateRandomID(7)}" data-type="js"></script>
      <!--EDIT-->
      <button class="toolbar-open" onclick="toolsOpenModal(this)"></button>
  </section>
  `;
  const addSectionToGrid = document.getElementById('grid-body');
	addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
	const sections = document.querySelectorAll("section");
	const newSection = sections[sections.length - 1];
	newSection.scrollIntoView({
		behavior: "smooth"
	});

   itemsButtons(item_1_box,item_1_add);
   itemsButtons(item_1_box,item_1_add);

   itemsButtons(item_2_box,item_2_add);
   itemsButtons(item_2_box,item_2_add);

   itemsButtons(item_3_box,item_3_add);
   itemsButtons(item_3_box,item_3_add);

}

