function _grid_text_video() {

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

	const item1_id = generateRandomID(7);
  const item1_title = generateRandomID(7);
  const item1_desc = generateRandomID(7);
  const item1_cta = generateRandomID(7);
  const item1_a = generateRandomID(7);

  const item2_id = generateRandomID(7);
  const item2_video = generateRandomID(7);

  const add_button_id = generateRandomID(7);

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
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    width: 100%;
    height: 100%;
    place-content: center;
  }
  grid-item#${item1_id}{
    display: grid;
    place-content: center;
    padding: 15%;
    gap: 15px;
    height: auto;
    min-height: 50vh;
  }

  video#${item2_video}{
    object-fit:cover;
    height:100%;
    width:100%;
  }
  h2#${item1_title}{
    color:white;
    font-size:clamp(24px,3vw,34px);
    line-height: 1;
  }
  p#${item1_desc}{
    color:white;
    font-size:14px;
  }

  #${item1_cta}{
    display: flex;
    gap: 10px;
    flex-flow: wrap;
  }

  #${item1_cta} a{
    border: 3px solid white;
    padding: 0 15px;
    color: white;
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
            
            <grid-item id="${item1_id}">
                <h2 id="${item1_title}" contenteditable="true">Lorem ipsum</h2>
                <p id="${item1_desc}" contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Donec ac odio tempor orci dapibus ultrices in iaculis nunc.</p>
                <grid-box id="${item1_cta}">
                  <button id="${add_button_id}" class="no-export grid-add-item" onclick="itemsButtons('${item1_cta}','${add_button_id}')">+</button>
                </grid-box>
                
            </grid-item>

            <grid-item id="${item2_id}">
              <video id="${item2_video}" class="grid-item"  autoplay loop muted data-type="video-fg" loading="lazy" src="https://github.com/IAMEDIA360/videos/raw/main/1795203691-1.mp4"></video>    
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

  itemsButtons(item1_cta,add_button_id);
  
}

