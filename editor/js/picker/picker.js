AColorPicker.from('.picker')
.on('change', (picker, color) => {
    const gridBoxTxt = document.getElementById('gridBoxTxt').textContent;
    const boxColor = document.getElementById(gridBoxTxt);
    boxColor.style.backgroundColor = color;
});

function closePicker(){
    const pickerDiv = document.getElementById('picker-div');
    pickerDiv.style.display = "none";
}

function showPicker(){
    const pickerDiv = document.getElementById('picker-div');
    pickerDiv.style.display = "initial";
}

