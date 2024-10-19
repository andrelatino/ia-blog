function _grid_icons_80_white() {
  const grid_item_size = "80px";
	const addSectionToGrid = document.getElementById('grid-body');
	const grid_container_id = generateRandomID(7);
	const grid_box_id = generateRandomID(7);

	const grid_bg = generateRandomID(7);
  const bg_img = generateRandomID(7);
  const bg_color = generateRandomID(7);
  const bg_solid_color = generateRandomID(7);
  const bg_radial_color = generateRandomID(7);
  const bg_linear_color = generateRandomID(7);
  const bg_img_div = generateRandomID(7);
  const bg_video_div = generateRandomID(7);
  const bg_video = generateRandomID(7);


	const grid_head_id = generateRandomID(7);
	const add_button_id = generateRandomID(7);

	const laptopCss = `
  grid-container#${grid_container_id} {
    position: relative;
  }
  grid-box#${grid_box_id}{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${grid_item_size},${grid_item_size}));
    grid-auto-rows: auto;
    gap: 20px;
    width: 100%;
    height: 100%;
    padding: 3%;
    place-content: center;
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
  grid-box#${grid_box_id} grid-item {
    display:grid;
    border-radius: 10px;
    overflow: hidden;
    place-content: start center;
    place-items: center;
  }
  grid-box#${grid_box_id} item-body {
    padding: 0px;
    display: grid;
    gap: 10px;
  }

  grid-box#${grid_box_id} grid-title {
    font-size:1.5rem;
    color:black;
  }

  grid-box#${grid_box_id} grid-desc {
    font-size: 12px;
    color: #929292;
  }

  grid-box#${grid_box_id} item-title {
    color: black;
  }

  grid-box#${grid_box_id} item-desc {
    display: grid;
    font-size: 12px;
    color: #929292;
    text-align:center;
  }
  grid-head#${grid_head_id}{
    grid-column: 1 / -1;
    display: grid;
    margin-left: 15px;
  }
  grid-box#${grid_box_id} item-head span{
    font-size:80px;
    color:black;
  }
  `;
  const tabletCss = `
  grid-box#${grid_box_id} {
    display: grid;
  }
  `;
  const mobileCss = `
  grid-head#${grid_head_id}{
    grid-column: 1 / -1;
    display: grid;
    place-content:center;
    text-align:center;
    padding:35px;
  }
  grid-box#${grid_box_id} {
      display: grid;
      gap:5px;
      padding-bottom:35px;
      grid-template-columns: 1fr 1fr 1fr;
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
            <div id="${bg_solid_color}" data-type="solid-color" class="div-visible" style="background: rgb(0, 0, 0);"></div>
            <div id="${bg_radial_color}" data-type="radial-color" class="div-hidden" style="background: radial-gradient(circle, rgb(0, 0, 0), rgb(0, 0, 0));"></div>
            <div id="${bg_linear_color}" data-type="linear-color" class="div-hidden" style="background: linear-gradient(0deg, rgb(0, 0, 0), rgb(0, 0, 0));"></div>
          </div> 
          <!-- bg-image -->
          <div id="${bg_img_div}" data-type="bg-image" class="div-hidden">
            <picture id="${generateRandomID(7)}">
              <source srcset media="(max-width:640px)">
              <source srcset media="(min-width:641px) and (max-width:1024px)">
              <img id="${bg_img}" src="https://raw.githubusercontent.com/IAMEDIA360/images/main/1707848593-1.webp" data-type="image-bg" loading="lazy">
            </picture>
          </div> 
          <!-- bg-video -->
          <div id="${bg_video_div}" data-type="bg-video" class="div-hidden">
            <video id="${bg_video}" autoplay loop muted loading="lazy" data-type="video-bg" src="https://github.com/IAMEDIA360/videos/raw/main/empty.mp4"></video>
          </div> 
        </grid-bg>


          <grid-box id="${grid_box_id}">
            <grid-head id="${grid_head_id}">
              <grid-title id="${generateRandomID(7)}" contenteditable="true">Lorem ipsum</grid-title>
              <grid-desc id="${generateRandomID(7)}" contenteditable="true">Lorem ipsum dolor sit amet</grid-desc>
            </grid-head>
            <button id="${add_button_id}" class="no-export grid-add-item" onclick="itemsIcons('${grid_box_id}','${add_button_id}', 'arrow_circle_right', '../global/file/empty.svg')">+</button>
          </grid-box>
        </grid-container>
      </div>
      
      <!--JS-->
      <script id="${generateRandomID(7)}" data-type="js"></script>
      <!--EDIT-->
      <button class="toolbar-open" onclick="toolsOpenModal(this)"></button>
  </section>
  `;
	addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
	const sections = document.querySelectorAll("section");
	const newSection = sections[sections.length - 1];
	newSection.scrollIntoView({
		behavior: "smooth"
	});

  itemsIcons(grid_box_id,add_button_id, 'stacks');
  itemsIcons(grid_box_id,add_button_id, 'close');
  itemsIcons(grid_box_id,add_button_id, 'page_info');
  itemsIcons(grid_box_id,add_button_id, 'potted_plant');
  itemsIcons(grid_box_id,add_button_id, 'shopping_bag');
  itemsIcons(grid_box_id,add_button_id, 'heart_plus');
}

