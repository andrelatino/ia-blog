
function video_FG_Update(new_URL){
    const get_video_id = document.getElementById('video-fg-id').textContent;
    console.log('get_video_id : '+get_video_id);
    document.getElementById(get_video_id).src = new_URL;
    document.getElementById('video-all-thumbnail').src = new_URL;
    document.getElementById('video-fg-url').textContent = new_URL;
}