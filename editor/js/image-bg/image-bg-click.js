function image_BG_Click(imgID, imgType, imgURL){
    show_Image_Modal();
    const imgSingleID = document.getElementById('image-fg-id');
    imgSingleID.textContent = imgID;
    const imgSingleType = document.getElementById('image-fg-type');
    imgSingleType.textContent = imgType;
    const imgSingleUrl = document.getElementById('image-fg-url');
    imgSingleUrl.textContent = imgURL;

    document.getElementById('image-all-thumbnail').src = imgURL;
}
