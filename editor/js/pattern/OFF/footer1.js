function generateRandomID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {result += characters.charAt(Math.floor(Math.random() * charactersLength));}
    return result;
  }
  
  function patternFooter1() {
  const addSectionToGrid = document.getElementById("grid");
  const customCSS = ``;
  const customHTML = `
    <section id="footer" data-type="section">
        <style id="${generateRandomID(7)}" type="text/css">${customCSS}</style>
        <div id="${generateRandomID(7)}" data-type="container">
            <div id="${generateRandomID(7)}" data-type="content"> 
                
            <div id="${generateRandomID(7)}">
                <h2 id="${generateRandomID(7)}" contenteditable="true">Home</h2>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Dashboard</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Updates</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Profile</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Settings</a>
            </div>
            
            <div id="${generateRandomID(7)}">
                <h2 id="${generateRandomID(7)}" contenteditable="true">Products</h2>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">All Products</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">New Arrivals</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Best Sellers</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Discounted</a>
            </div>
            
            <div id="${generateRandomID(7)}">
                <h2 id="${generateRandomID(7)}" contenteditable="true">Services</h2>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Consulting</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Support</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Training</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Customization</a>
            </div>
            
            <div id="${generateRandomID(7)}">
                <h2 id="${generateRandomID(7)}" contenteditable="true">About</h2>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Our Story</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Team</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Mission & Vision</a>
                <a href="#" id="${generateRandomID(7)}" contenteditable="true">Contact</a>
            </div>
        
        
            </div>   
        </div>
      ${sectionButtons()}
    </section>
  `;
  addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
  const sections = document.querySelectorAll("section");
  const newSection = sections[sections.length - 1];
  newSection.scrollIntoView({ behavior: "smooth" });  
  //savePage();
  }