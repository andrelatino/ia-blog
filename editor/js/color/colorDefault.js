function solidDefaultColor(){
    
    colorReadOnlyTrue();
    //GET COLOR
    const getDefaultColor = document.getElementById('color-current-bg').textContent;
    //THUMB
    const solidColorThumb = document.getElementById('solid-color-thumbnail');
    solidColorThumb.style.background = getDefaultColor;
    //Button
    const solidColorPickerDiv = document.getElementById("solid-coloris");
    solidColorPickerDiv.style.color = getDefaultColor; 

    const solidColorInput = document.getElementById("solid-coloris-input");
    solidColorInput.value = getDefaultColor;

    const solidColorButton = document.getElementById('solid-color-btn');
    solidColorButton.style.textDecoration = 'underline';
    solidColorButton.style.textUnderlinePosition = 'under';
    const radialColorButton = document.getElementById('radial-color-btn');
    radialColorButton.style.textDecoration = 'none';
    radialColorButton.style.textUnderlinePosition = 'none';
    const linearColorButton = document.getElementById('linear-color-btn');
    linearColorButton.style.textDecoration = 'none';
    linearColorButton.style.textUnderlinePosition = 'none';

}

function radialDefaultColor(){
    
    colorReadOnlyTrue();

    const radialGetBgId = document.getElementById('radial-bg-id');
    const radialBgId = radialGetBgId.textContent;

    const divElement = document.getElementById(radialBgId);
    const styleAttribute = divElement.getAttribute('style'); // Get the style attribute
    const matches = styleAttribute.match(/background:(.*?);/); // Extract the background property value
    
    console.log('styleAttribute: '+styleAttribute);
    console.log('radialBgId: '+radialBgId);
    console.log('matches: '+matches);

    if (matches && matches.length >= 2) {
        const radialBgColorIs = matches[1].trim(); // Get the background property value
        const radialColorThumb = document.getElementById('radial-color-thumbnail');
        radialColorThumb.style.background = radialBgColorIs;

        // Use regular expressions to extract the colors
        const regex = /rgba?\([^)]+\)/g;
        const colors = radialBgColorIs.match(regex);

        if (colors && colors.length >= 2) {
            const radialFirstColorIs = colors[0]; // The first color
            const radialSecondColorIs = colors[1]; // The second color

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

function linearDefaultColor(){

    colorReadOnlyTrue();
    
    const linearGetBgId = document.getElementById('linear-bg-id');
    const linearBgId = linearGetBgId.textContent;

    const divElement = document.getElementById(linearBgId);
    const styleAttribute = divElement.getAttribute('style'); // Get the style attribute
    const matches = styleAttribute.match(/background:(.*?);/); // Extract the background property value
    
    console.log('styleAttribute: '+styleAttribute);
    console.log('linearBgId: '+linearBgId);
    console.log('matches: '+matches);

    if (matches && matches.length >= 2) {
        const linearBgColorIs = matches[1].trim(); // Get the background property value
        const linearColorThumb = document.getElementById('linear-color-thumbnail');
        linearColorThumb.style.background = linearBgColorIs;

        // Use regular expressions to extract the colors
        const regex = /rgba?\([^)]+\)/g;
        const colors = linearBgColorIs.match(regex);

        if (colors && colors.length >= 2) {
            const linearFirstColorIs = colors[0]; // The first color
            const linearSecondColorIs = colors[1]; // The second color

            const linearColorPicker1 = document.getElementById("linear-coloris1");
            linearColorPicker1.style.color = linearFirstColorIs;
            const linearColorPicker2 = document.getElementById("linear-coloris2");
            linearColorPicker2.style.color = linearSecondColorIs;

            const linearColorInput1 = document.getElementById("linear-coloris-input1");
            linearColorInput1.setAttribute("value", linearFirstColorIs);
            const linearColorInput2 = document.getElementById("linear-coloris-input2");
            linearColorInput2.setAttribute("value", linearSecondColorIs);


            console.log('First Color:', linearFirstColorIs);
            console.log('Second Color:', linearSecondColorIs);
        } else {
        console.log('Radial gradient does not contain two colors.');
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