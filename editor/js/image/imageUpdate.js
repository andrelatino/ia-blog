
var imageEmpty = './assets/svg/icons/upload-empty.svg';
var imagePlaceholder = 'Image URL (optional)';

function updateXsImage() {

    const mediaQuery = '(max-width:640px)';
    const pictureID = localStorage.getItem('pictureID');
    const pictureElement = document.getElementById(pictureID);
    const inputValue = document.getElementById('image-xs-input').value;
    const inputPlaceHolder = document.getElementById('image-xs-input');
    const thumbBG = document.getElementById('image-xs-thumbnail');

    if (inputValue.trim() === '') {
        thumbBG.srcset = imageEmpty;
        inputPlaceHolder.setAttribute('placeholder', imagePlaceholder);
        
    }else{
        thumbBG.srcset = inputValue;
    }
    
    if (pictureElement) {
        const sourceElements = pictureElement.getElementsByTagName('source');

        for (let i = 0; i < sourceElements.length; i++) {
            if (sourceElements[i].getAttribute('media') === mediaQuery) {
                sourceElements[i].setAttribute('srcset', inputValue);
                break;
            }
        }
    } else {
        console.error(`No picture element found with the id ${pictureID}`);
    }
}

function updateMImage() {

    const mediaQuery = '(min-width:641px) and (max-width:1024px)';
    const pictureID = localStorage.getItem('pictureID');
    const pictureElement = document.getElementById(pictureID);
    const inputValue = document.getElementById('image-m-input').value;
    const inputPlaceHolder = document.getElementById('image-m-input');
    const thumbBG = document.getElementById('image-m-thumbnail');

    if (inputValue.trim() === '') {
        thumbBG.srcset = imageEmpty;
        inputPlaceHolder.setAttribute('placeholder', imagePlaceholder);
        
    }else{
        thumbBG.srcset = inputValue;
    }
    
    if (pictureElement) {
        const sourceElements = pictureElement.getElementsByTagName('source');

        for (let i = 0; i < sourceElements.length; i++) {
            if (sourceElements[i].getAttribute('media') === mediaQuery) {
                sourceElements[i].setAttribute('srcset', inputValue);
                break;
            }
        }
    } else {
        console.error(`No picture element found with the id ${pictureID}`);
    }

}

function updateAllImage() {

    console.log('updateAllImage()');
    
    const imageID = localStorage.getItem('imageID');
    const updateImage = document.getElementById(imageID);
    const inputElement = document.getElementById('image-all-input');
    const inputValue = inputElement.value;
    const inputPlaceHolder = document.getElementById('image-all-input');
    const thumbBG = document.getElementById('image-all-thumbnail');

    if (inputValue === '') {
        // alert ('input is empty');
        thumbBG.srcset = imageEmpty;
        inputPlaceHolder.setAttribute('placeholder', 'Image URL (mandatory)');
        updateImage.setAttribute("src", '');

    } else {
        // alert ('input is not empty');
        thumbBG.srcset = inputValue;
        updateImage.setAttribute("src", inputValue);
    }

}
