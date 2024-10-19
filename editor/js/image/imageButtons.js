  
function imageAllButton(){
    
    localStorage.setItem('imageSize','All');
    loadAllImage();
    
    var imageDivAll = document.getElementById("image-all"); imageDivAll.style.visibility = "visible";
    var imageDivM = document.getElementById("image-m"); imageDivM.style.visibility = "hidden";
    var imageDivXs = document.getElementById("image-xs"); imageDivXs.style.visibility = "hidden";
   
    
    var imageButtonAll = document.getElementById("image-btn-all"); 
        imageButtonAll.style.background = "#007dec";
    var imageButtonAllImg = document.querySelector("#image-btn-all img");
        imageButtonAllImg.style.filter = "invert(1)";

    var imageButtonM = document.getElementById("image-btn-m"); 
        imageButtonM.style.background = "white";
    var imageButtonMImg = document.querySelector("#image-btn-m img");
        imageButtonMImg.style.filter = "none";
   
    var imageButtonXs = document.getElementById("image-btn-xs"); 
        imageButtonXs.style.background = "white"; 
    var imageButtonXsImg = document.querySelector("#image-btn-xs img");
        imageButtonXsImg.style.filter = "none";

}


function imageMButton(){

    localStorage.setItem('imageSize','M');
    loadMImage();
    
    var imageDivAll = document.getElementById("image-all"); imageDivAll.style.visibility = "hidden";
    var imageDivM = document.getElementById("image-m"); imageDivM.style.visibility = "visible";
    var imageDivXs = document.getElementById("image-xs"); imageDivXs.style.visibility = "hidden";
   
    var imageButtonAll = document.getElementById("image-btn-all"); 
        imageButtonAll.style.background = "white";
    var imageButtonAllImg = document.querySelector("#image-btn-all img");
        imageButtonAllImg.style.filter = "invert(0)";
        
    var imageButtonM = document.getElementById("image-btn-m"); 
        imageButtonM.style.background = "#007dec";
    var imageButtonMImg = document.querySelector("#image-btn-m img");
        imageButtonMImg.style.filter = "invert(1)";
    
    var imageButtonXs = document.getElementById("image-btn-xs"); 
        imageButtonXs.style.background = "white"; 
    var imageButtonXsImg = document.querySelector("#image-btn-xs img");
        imageButtonXsImg.style.filter = "invert(0)";

}

  
function imageXsButton(){

    localStorage.setItem('imageSize','Xs');
    loadXsImage();

    var imageDivAll = document.getElementById("image-all"); imageDivAll.style.visibility = "hidden";
    var imageDivM = document.getElementById("image-m"); imageDivM.style.visibility = "hidden";
    var imageDivXs = document.getElementById("image-xs"); imageDivXs.style.visibility = "visible";
   
    var imageButtonAll = document.getElementById("image-btn-all"); 
        imageButtonAll.style.background = "white";
    var imageButtonAllImg = document.querySelector("#image-btn-all img");
        imageButtonAllImg.style.filter = "invert(0)";
        
    var imageButtonM = document.getElementById("image-btn-m"); 
        imageButtonM.style.background = "white";
    var imageButtonMImg = document.querySelector("#image-btn-m img");
        imageButtonMImg.style.filter = "invert(0)";
    
    var imageButtonXs = document.getElementById("image-btn-xs"); 
        imageButtonXs.style.background = "#007dec"; 
    var imageButtonXsImg = document.querySelector("#image-btn-xs img");
        imageButtonXsImg.style.filter = "invert(1)";

    
}
