function _grid_menu_left_white() {

  const section_id = generateRandomID(7);
	const grid_container_id = generateRandomID(7);
	const grid_nav_id = generateRandomID(7);
  
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

  const item_left_menu = generateRandomID(7);
  const item_left_box = generateRandomID(7);
  const item_left_add = generateRandomID(7);

	const laptopCss = `

  section#${section_id} {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%);
    position:sticky;
    top:0;
    z-index:999;
  }

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
  
  grid-nav#${grid_nav_id}{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-auto-rows: auto;
    width: 100%;
    height: 100%;
    min-height: 50px;
    place-content: center left;
    place-items: center;
  }
  grid-item#${item_img_box}{
    display: grid;
    place-content: center;
    padding: 15px;
    gap: 15px;
    height: auto;
  }

  img#${item_img_item}{
    object-fit:cover;
    height:100%;
    width:100%;
  }
  #${item_left_box}{
    display: flex;
    gap: 10px;
    flex-flow: wrap;
  }
  #${item_left_box} a{
    border: none;
    padding: 0 15px;
    color: black;
    font-size: 14px;
    border-radius: 10px;
    text-underline-position: under;
    height: 50px;
    width: fit-content;
    display: grid;
    place-content: center;
  }
  
  `;
  
  const tabletCss = ``;
  const mobileCss = `
  grid-box#${grid_nav_id}{
    grid-template-columns: repeat(1, 1fr);
  }
  `;

	const customHTML = `
  <section id="${section_id}" data-type="section">
      
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
            <div id="${bg_solid_color}" data-type="solid-color" class="div-visible" style="background: rgb(255, 255, 255);"></div>
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

        <grid-nav id="${grid_nav_id}">
            <grid-item id="${item_img_box}">
                <img id="${item_img_item}" src="../global/file/logo-site-black.svg" data-type="image-fg" loading="lazy">
            </grid-item>

            <grid-item id="${item_left_menu}">
              <grid-box id="${item_left_box}">
                <button id="${item_left_add}" class="no-export grid-add-item" onclick="itemsLinks('${item_left_box}','${item_left_add}')">+</button>
              </grid-box>
            </grid-item>
        </grid-nav>

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

  itemsLinks(item_left_box,item_left_add);
  itemsLinks(item_left_box,item_left_add);
  
}

