function image_FG_Click() {
    
    const grid = document.getElementById('grid-body');
    // Asegurar que no se dupliquen los oyentes de eventos
    grid.removeEventListener('click', image_FG_Event);
    grid.addEventListener('click', image_FG_Event);
}

function image_FG_Event(event) {

    if (event.target.tagName === 'IMG' && event.target.getAttribute('data-type') === 'image-fg' && event.target.id) {
      
      show_Image_Modal();

      const imgSingleID = document.getElementById('image-fg-id');
      imgSingleID.textContent = event.target.id;
      const imgSingleType = document.getElementById('image-fg-type');
      imgSingleType.textContent = 'image-fg';
      const imgSingleUrl = document.getElementById('image-fg-url');
      imgSingleUrl.textContent = event.target.src;

        // Select the image by its ID
        const image = document.getElementById("image-all-thumbnail");
        // Set the image 'src' attribute correctly
        image.src = imgSingleUrl.textContent;
        // Optional: Log a confirmation message
        console.log("Image src has been updated to:", image.src);

      console.log('image-fg ID:'+event.target.id);
      console.log('image-fg URL:'+event.target.src);
      
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//   image_FG_Click();
// });

// image_FG_Click();
