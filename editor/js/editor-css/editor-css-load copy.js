function loadALLCss() {
    //HIDE ALL TEXTS AREAS
    const textAreaPc = document.getElementById('all-textarea');
    const textAreaLaptop = document.getElementById('m-textarea');
    const textAreaMobile = document.getElementById('xs-textarea');

    textAreaPc.style.display = 'initial';
    textAreaLaptop.style.display = 'none';
    textAreaMobile.style.display = 'none';

    //CONST
    const elementID = document.getElementById('elementID-text');
    const buttonID = document.getElementById('buttonID-text')
    const styleID = document.getElementById('styleID-text');
    // const sectionID = document.getElementById('sectionID-text');
    // extractElementTags('bPPOkni');

    buttonID.textContent = 'ALL';
    
    const styleValue = styleID.textContent;
    const styleElement = document.getElementById(styleValue);
    
    const elementValue = elementID.textContent;
    const cssText = styleElement.textContent;
    const regex = new RegExp(`@media screen and \\(min-width:0px\\){#${elementValue}\\s*{([^}]+)}}`);
    const matches = cssText.match(regex);

    if (matches) {
        const ruleContent = matches[1];
        const properties = ruleContent.split(';');
        const formattedProperties = properties
            .filter(Boolean)
            .map(property => property.trim() + ';')
            .join('\n');
        const textarea = document.getElementById('all-textarea');
        textarea.value = formattedProperties;
        console.log('ALL CSS Start ------');
        console.log(formattedProperties);
        console.log('-------------------');
    } else {
        // const textarea = document.getElementById('all-textarea');
        // textarea.value = "No CSS rule found";
        console.log(`No CSS rule found for #${elementValue}`);
        inicializarTextareaConSugerencia('all-textarea', 'Add your pc css here...');
    }
}

function loadMCss() {
    const textAreaPc = document.getElementById('all-textarea');
    const textAreaLaptop = document.getElementById('m-textarea');
    const textAreaMobile = document.getElementById('xs-textarea');

    textAreaPc.style.display = 'none';
    textAreaLaptop.style.display = 'initial';
    textAreaMobile.style.display = 'none';

    const buttonID = document.getElementById('buttonID-text')
    buttonID.textContent = 'M';
    const styleID = document.getElementById('styleID-text');
    const styleValue = styleID.textContent;
    const styleElement = document.getElementById(styleValue);
    const elementID = document.getElementById('elementID-text');
    const elementValue = elementID.textContent;
    const cssText = styleElement.textContent;
    
    const regex = new RegExp(`@media screen and \\(min-width:641px\\) and \\(max-width:1024px\\){#${elementValue}\\s*{([^}]+)}}`);
    const matches = cssText.match(regex);
    if (matches) {
        const ruleContent = matches[1];
        const properties = ruleContent.split(';');
        const formattedProperties = properties
            .filter(Boolean)
            .map(property => property.trim() + ';')
            .join('\n');
        const textarea = document.getElementById('m-textarea');
        textarea.value = formattedProperties;
        console.log('M CSS Start ------');
        console.log(formattedProperties);
        console.log('-------------------');
    } else {
        console.log(`No CSS rule found for #${elementValue}`);
        inicializarTextareaConSugerencia('m-textarea', 'Add your tablet css here...');
    }
}

function loadXSCss() {

    const textAreaPc = document.getElementById('all-textarea');
    const textAreaLaptop = document.getElementById('m-textarea');
    const textAreaMobile = document.getElementById('xs-textarea');

    textAreaPc.style.display = 'none';
    textAreaLaptop.style.display = 'none';
    textAreaMobile.style.display = 'initial';


    const buttonID = document.getElementById('buttonID-text')
    buttonID.textContent = 'XS';
    const styleID = document.getElementById('styleID-text');
    const styleValue = styleID.textContent;
    const styleElement = document.getElementById(styleValue);
    const elementID = document.getElementById('elementID-text');
    const elementValue = elementID.textContent;
    const cssText = styleElement.textContent;
    const regex = new RegExp(`@media screen and \\(max-width:640px\\){#${elementValue}\\s*{([^}]+)}}`);
    const matches = cssText.match(regex);
    if (matches) {
        const ruleContent = matches[1];
        const properties = ruleContent.split(';');
        const formattedProperties = properties
            .filter(Boolean)
            .map(property => property.trim() + ';')
            .join('\n');
        const textarea = document.getElementById('xs-textarea');
        textarea.value = formattedProperties;
        console.log('XS CSS Start ------');
        console.log(formattedProperties);
        console.log('-------------------');
    } else {
        console.log(`No CSS rule found for #${elementValue}`);
        inicializarTextareaConSugerencia('xs-textarea', 'Add your mobile css here...');
    }
}