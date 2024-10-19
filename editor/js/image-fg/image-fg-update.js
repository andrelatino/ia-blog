
function image_FG_Update(new_URL){
    const get_image_id = document.getElementById('image-fg-id').textContent;
    console.log('get_image_id : '+get_image_id);
    document.getElementById(get_image_id).src = new_URL;
    document.getElementById('image-all-thumbnail').src = new_URL;
    document.getElementById('image-fg-url').textContent = new_URL;
}