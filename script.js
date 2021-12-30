const container = document.querySelector('.container');
const gridItems = document.querySelector('.container').childNodes;
const blackBtn = document.querySelector('#black');
const colorPicker = document.querySelector('#colorpicker');
const rainbowModeBtn = document.querySelector('#rainbow-mode');
const eraserBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');
const showGridBtn = document.querySelector('#show-grid');
const gridSizeBtn = document.querySelector('#grid-size');

let currentMode = 'black';
let currentSize = 16;

blackBtn.addEventListener('click', ()=> currentMode='black');
colorPicker.addEventListener('click', ()=> currentMode='colorpicker');
rainbowModeBtn.addEventListener('click', ()=> currentMode='rainbow-mode');
eraserBtn.addEventListener('click', ()=> currentMode='eraser');
clearBtn.addEventListener('click', clearGrid);
showGridBtn.addEventListener('click', showHideGridLines);
gridSizeBtn.addEventListener('click', changeGridSize);

//Create a function that makes a grid with a given size
function makeGrid(size){
    size = size || 16;
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (i = 0; i < (size * size); i++){
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        container.appendChild(cell).className = 'grid-item';
    };
};
makeGrid();

// Create a function that changes bgcolor of the grid items on mouseover
function changeColor(){
    if(currentMode === 'black'){
        this.style.background = 'black';
    }
    else if(currentMode === 'colorpicker'){
        this.style.background = colorPicker.value;
    }
    else if(currentMode === 'rainbow-mode'){
        this.style.background = `rgb(${randomNum()}, ${randomNum()},
        ${randomNum()})`;
    }
    else if(currentMode === 'eraser'){
        this.style.background = '';
    }
    
}

// Create a function that generates random number between 0 and 255
function randomNum(){
    return Math.floor(Math.random() * (255 + 1));
}


// Create a function that clears the grid
function clearGrid(){
    gridItems.forEach(cell => {
        cell.style.background = '';
    })
}

// Create a function that shows and hides the grid lines
function showHideGridLines(){
    if(showGridBtn.textContent === 'Show Grid Lines'){
        gridItems.forEach(cell => {
            cell.style.border = 'solid #ddd 1px';
        });
        showGridBtn.textContent = 'Hide Grid Lines';
    }
    else if(showGridBtn.textContent === 'Hide Grid Lines'){
        gridItems.forEach(cell => {
            cell.style.border = '';
        });
        showGridBtn.textContent = 'Show Grid Lines';
    }
}

// Create a function that allows the user to change the grid size *
function changeGridSize(){
    let newSize = prompt(`Enter positive integer. Maximum of 100 
            (Current size: ${currentSize}x${currentSize})`);
    let newSizeInt = parseInt(newSize);
    if(newSizeInt > 100 || newSizeInt <= 0 || isNaN(newSizeInt)){
            alert('Enter positive integer. Maximum of 100');
            return;
        }
    
    alert("Changed grid size");
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    };
    currentSize = newSizeInt;
    makeGrid(newSizeInt);
}




