function imageClearXs() {
    const clearImageXs = document.getElementById('image-xs-input');
    const clearImageBtn = document.getElementById('image-btn-xs-clear');
    // clearImageBtn.style.display='none';
    clearImageXs.value = '';
    updateXsImage();
}

function imageClearM() {
    const clearImageM = document.getElementById('image-m-input');
    const clearImageBtn = document.getElementById('image-btn-m-clear');
    // clearImageBtn.style.display='none';
    clearImageM.value = '';
    updateMImage();
}


function checkClearButton(){
    const getImageSize = localStorage.getItem('imageSize');
    
    
    if (getImageSize === 'All'){
        const clearMBtn = document.getElementById('image-btn-m-clear');
        const clearXsBtn = document.getElementById('image-btn-xs-clear');
        clearMBtn.style.display='none';
        clearXsBtn.style.display='none';
        // alert('is All');
    } else if (getImageSize === 'M'){
        const clearMBtn = document.getElementById('image-btn-m-clear');
        const clearXsBtn = document.getElementById('image-btn-xs-clear');
        clearMBtn.style.display='block';
        clearXsBtn.style.display='none';
        // alert('is M');
    } else if (getImageSize === 'Xs'){
        const clearMBtn = document.getElementById('image-btn-m-clear');
        const clearXsBtn = document.getElementById('image-btn-xs-clear');
        clearMBtn.style.display='none';
        clearXsBtn.style.display='block';
        // alert('is Xs');
    } else {
        // alert('other');
    }
}
