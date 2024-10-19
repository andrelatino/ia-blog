function colorGetBgIds(){
    const getParentDivId = document.getElementById('color-id').textContent;
    const selectParentDivId = document.getElementById(getParentDivId);
    
    const solidIdText = document.getElementById('solid-bg-id');
    const solidColorId = selectParentDivId.querySelector('[data-type="grid-solid-color"]').id;
    solidIdText.textContent = solidColorId;

    const radialIdText = document.getElementById('radial-bg-id');
    const radialColorId = selectParentDivId.querySelector('[data-type="grid-radial-color"]').id;
    radialIdText.textContent = radialColorId;

    const linearIdText = document.getElementById('linear-bg-id');
    const linearColorId = selectParentDivId.querySelector('[data-type="grid-linear-color"]').id;
    linearIdText.textContent = linearColorId;

}