function solidColorButton(){

    // zoomContentStart();
    openSolidSidebar();
    colorReadOnlyTrue();

    const solidGetBgId = document.getElementById('solid-bg-id');
    const solidBgId = solidGetBgId.textContent;
    
    const solidSelectBG = document.getElementById(solidBgId);
    const solidGetStyle = window.getComputedStyle(solidSelectBG); // Get the computed solidGetStyles
    const solidBgColorIs = solidGetStyle.backgroundColor; // Get the background color

    const solidColorThumb = document.getElementById('solid-color-thumbnail');
    solidColorThumb.style.background = solidBgColorIs;

    const solidColorPicker = document.getElementById("solid-coloris");
    solidColorPicker.style.color = solidBgColorIs;

    const solidColorInput = document.getElementById("solid-coloris-input");
    solidColorInput.value = solidBgColorIs;

    const solidColorButton = document.getElementById('solid-color-btn');
    solidColorButton.style.textDecoration = 'underline';
    solidColorButton.style.textUnderlinePosition = 'under';
    const radialColorButton = document.getElementById('radial-color-btn');
    radialColorButton.style.textDecoration = 'none';
    radialColorButton.style.textUnderlinePosition = 'none';
    const linearColorButton = document.getElementById('linear-color-btn');
    linearColorButton.style.textDecoration = 'none';
    linearColorButton.style.textUnderlinePosition = 'none';
    

    console.log('solidBgId: '+solidBgId);
    console.log('solidBgColorIs: '+solidBgColorIs);
 
}

function radialColorButton(){

    colorReadOnlyTrue();
    closeSolidSidebar();

    const radialGetBgId = document.getElementById('radial-bg-id');
    const radialBgId = radialGetBgId.textContent;

    const divElement = document.getElementById(radialBgId);
    const styleAttribute = divElement.getAttribute('style'); // Get the style attribute
    const matches = styleAttribute.match(/background:(.*?);/); // Extract the background property value

    if (matches && matches.length >= 2) {
        const radialBgColorIs = matches[1].trim(); // Get the background property value
        const radialColorThumb = document.getElementById('radial-color-thumbnail');
        radialColorThumb.style.background = radialBgColorIs;
        const gradientString = radialBgColorIs;
        const regex = /rgba?\([^)]+\)/g;
        const colors = gradientString.match(regex);

    if (colors && colors.length >= 2) {

        const radialFirstColorIs = colors[0];
        const radialSecondColorIs = colors[1];

        console.log('Radial First Color:', radialFirstColorIs);
        console.log('Radial Second Color:', radialSecondColorIs);

        const radialColorPicker1 = document.getElementById("radial-coloris1");
        radialColorPicker1.style.color = radialFirstColorIs;
        const radialColorPicker2 = document.getElementById("radial-coloris2");
        radialColorPicker2.style.color = radialSecondColorIs;

        const radialColorInput1 = document.getElementById("radial-coloris-input1");
        radialColorInput1.setAttribute("value", radialFirstColorIs);
        const radialColorInput2 = document.getElementById("radial-coloris-input2");
        radialColorInput2.setAttribute("value", radialSecondColorIs);


        console.log('Radial First Color:', radialFirstColorIs);
        console.log('Radial Second Color:', radialSecondColorIs);
    
    } else {

        console.log('Radial gradient does not contain two colors.');
    
    }

    console.log('radialBgId: '+radialBgId);
    console.log('radialBgColorIs: '+radialBgColorIs);

    }

        const solidColorButton = document.getElementById('solid-color-btn');
        solidColorButton.style.textDecoration = 'none';
        solidColorButton.style.textUnderlinePosition = 'none';
        const radialColorButton = document.getElementById('radial-color-btn');
        radialColorButton.style.textDecoration = 'underline';
        radialColorButton.style.textUnderlinePosition = 'under';
        const linearColorButton = document.getElementById('linear-color-btn');
        linearColorButton.style.textDecoration = 'none';
        linearColorButton.style.textUnderlinePosition = 'none';

    
}

function linearColorButton(){

    colorReadOnlyTrue();
    closeSolidSidebar();
    
    const linearGetBgId = document.getElementById('linear-bg-id');
    const linearBgId = linearGetBgId.textContent;

    const divElement = document.getElementById(linearBgId);
    const styleAttribute = divElement.getAttribute('style'); // Get the style attribute
    const matches = styleAttribute.match(/background:(.*?);/); // Extract the background property value

    if (matches && matches.length >= 2) {
            const linearBgColorIs = matches[1].trim(); // Get the background property value
            const linearColorThumb = document.getElementById('linear-color-thumbnail');
            linearColorThumb.style.background = linearBgColorIs;
            const gradientString = linearBgColorIs;
            const regex = /rgba?\([^)]+\)/g;
            const colors = gradientString.match(regex);

        if (colors && colors.length >= 2) {

            const linearFirstColorIs = colors[0];
            const linearSecondColorIs = colors[1];

            console.log('Linear First Color:', linearFirstColorIs);
            console.log('Linear Second Color:', linearSecondColorIs);

            const linearColorPicker1 = document.getElementById("linear-coloris1");
            linearColorPicker1.style.color = linearFirstColorIs;
            const linearColorPicker2 = document.getElementById("linear-coloris2");
            linearColorPicker2.style.color = linearSecondColorIs;

            const linearColorInput1 = document.getElementById("linear-coloris-input1");
            linearColorInput1.setAttribute("value", linearFirstColorIs);
            const linearColorInput2 = document.getElementById("linear-coloris-input2");
            linearColorInput2.setAttribute("value", linearSecondColorIs);


            console.log('Linear First Color:', linearFirstColorIs);
            console.log('Linear Second Color:', linearSecondColorIs);
        
        } else {

            console.log('Linear gradient does not contain two colors.');
        
        }

        console.log('linearBgId: '+linearBgId);
        console.log('linearBgColorIs: '+linearBgColorIs);

    }

        const solidColorButton = document.getElementById('solid-color-btn');
        solidColorButton.style.textDecoration = 'none';
        solidColorButton.style.textUnderlinePosition = 'none';
        const radialColorButton = document.getElementById('radial-color-btn');
        radialColorButton.style.textDecoration = 'none';
        radialColorButton.style.textUnderlinePosition = 'none';
        const linearColorButton = document.getElementById('linear-color-btn');
        linearColorButton.style.textDecoration = 'underline';
        linearColorButton.style.textUnderlinePosition = 'under';
    
}

function colorReadOnlyTrue(){
    const clrColorValue = document.getElementById("clr-color-value");
    clrColorValue.readOnly = true;
}

function colorReadOnlyFalse(){
    const clrColorValue = document.getElementById("clr-color-value");
    clrColorValue.readOnly = false;
}