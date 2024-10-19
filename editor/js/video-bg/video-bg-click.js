function video_BG_Click(videoID, videoType, videoURL){
    show_Video_Modal();
    const getVideoID = document.getElementById('video-fg-id');
    getVideoID.textContent = videoID;
    const getVideoType = document.getElementById('video-fg-type');
    getVideoType.textContent = videoType;
    const getVideoUrl = document.getElementById('video-fg-url');
    getVideoUrl.textContent = videoURL;
    
    const getVideoThumb = document.getElementById('video-all-thumbnail').src = videoURL;
}
