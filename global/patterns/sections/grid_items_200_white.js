function _grid_items_200_white() {
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
    grid-template-columns: repeat(auto-fit, minmax(auto, 200px));
    grid-auto-rows: auto;
    gap: 10px;
    width: 100%;
    height: 100%;
    padding: 3%;
    place-content: center start;
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
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%);
    border-radius: 10px;
    overflow: hidden;
    background:white;
  }
  grid-box#${grid_box_id} item-body {
    padding: 15px;
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
  }
  grid-head#${grid_head_id}{
    grid-column: 1 / -1;
    display: grid;
    margin-left: 15px;
  }
  grid-box#${grid_box_id} item-head img{
    background-color: white;
    height:200px;
    width:100%;
    object-fit:cover;
  }
  grid-box#${grid_box_id} a[data-type="a-link"] {
    border: 3px solid black;
    padding: 0 15px;
    color: black;
    font-size: 14px;
    border-radius: 10px;
    text-underline-position: under;
    height: 35px;
    width: fit-content;
    display: grid;
    place-content: center;
  }
  `;
  const tabletCss = `
  grid-box#${grid_box_id} {
    display: grid;
  }
  `;
  const mobileCss = `
  grid-head#${grid_head_id}{
    text-align: center;
    padding: 35px;
  }
  grid-box#${grid_box_id} {
      display: grid;
      gap:5px;
      padding:0;
      grid-template-columns: 1fr 1fr;
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
            <div id="${bg_solid_color}" data-type="solid-color" class="div-visible" style="background: rgb(255, 255, 255);"></div>
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
            <video id="${bg_video}" autoplay loop muted loading="lazy" data-type="video-bg">
              <source src="https://github.com/IAMEDIA360/videos/raw/main/empty.mp4" type="video/mp4">
            </video>
          </div> 
        </grid-bg>


          <grid-box id="${grid_box_id}">
            <grid-head id="${grid_head_id}">
              <grid-title id="${generateRandomID(7)}" contenteditable="true">Lorem ipsum</grid-title>
              <grid-desc id="${generateRandomID(7)}" contenteditable="true">Lorem ipsum dolor sit amet</grid-desc>
            </grid-head>
            <button id="${add_button_id}" class="no-export grid-add-item" onclick="items200x200('${grid_box_id}','${add_button_id}', '../global/file/empty.svg')">+</button>
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

  items200x200(
    grid_box_id,
    add_button_id,
    "https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHw0NHx8Y29sb3JzfGVufDB8MHx8fDE3MTY2NjQ0ODB8MA&ixlib=rb-4.0.3&w=200&h=200&fit=crop"
  );

  items200x200(
    grid_box_id,
    add_button_id,
    "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHwxOHx8Y29sb3JzfGVufDB8MHx8fDE3MTY2NjQ0NDV8MA&ixlib=rb-4.0.3&w=200&h=200&fit=crop"
  );

  items200x200(
    grid_box_id,
    add_button_id,
    "https://images.unsplash.com/photo-1502622796232-e88458466c33?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHwyOHx8Y29sb3JzfGVufDB8MHx8fDE3MTY2NjQ0NjJ8MA&ixlib=rb-4.0.3&w=200&h=200&fit=crop"
  );

  items200x200(
    grid_box_id,
    add_button_id,
    "https://images.unsplash.com/photo-1529600497935-f5fd7ccf888e?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHw0NXx8Y29sb3JzfGVufDB8MHx8fDE3MTY2NjQ0ODB8MA&ixlib=rb-4.0.3&w=200&h=200&fit=crop"
  );

  items200x200(
    grid_box_id,
    add_button_id,
    "https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHw1NHx8Y29sb3JzfGVufDB8MHx8fDE3MTY2NjQ0ODB8MA&ixlib=rb-4.0.3&w=200&h=200&fit=crop"
  );
  
}

