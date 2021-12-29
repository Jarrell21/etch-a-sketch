const container = document.querySelector('.container');
const colorModeBtn = document.querySelector('#color-mode');
const randomColor = document.querySelector('#random-color');
const rainbowModeBtn = document.querySelector('#rainbow-mode');
const eraserBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');
const showGridBtn = document.querySelector('#show-grid');
const gridSizeBtn = document.querySelector('#grid-size');

colorModeBtn.addEventListener('click', () => changeColor('black'));

// Create a function that generates a random color for every click
randomColor.addEventListener('click', () => {
    changeColor(`rgb(${randomNum()}, 
    ${randomNum()},  
    ${randomNum()})`);
});

// Create a function that 'draws' in the grid with random colors
rainbowModeBtn.addEventListener('click', () =>{
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () =>{
            cell.style.background = `rgb(${randomNum()}, 
            ${randomNum()},  
            ${randomNum()})`;
        });
        
    });
});

eraserBtn.addEventListener('click', () => changeColor(''));

// Create a function that 'clears' the grid
clearBtn.addEventListener('click', () =>{
    cells.forEach(cell => {
        cell.style.background = '';
    });
})

showGridBtn.addEventListener('click', showHideGridLines);

//Create a function that makes a grid on the given number
function makeGrid(size){
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (i = 0; i < (size * size); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    };
};
makeGrid(16);
const cells = document.querySelectorAll('.grid-item');

// Create a function that allows the user to change the grid size *
function newGrid(){
    let userInputGrid = prompt('Enter size: ');
    let userInputInt = parseInt(userInputGrid);

    if(userInputInt > 100 ||
        userInputInt <= 0 ||
        isNaN(userInputInt)){
        alert('Enter positive integer. Maximum size of 100');
    }
    else{
        alert('Done :)');
        container.innerHTML = '';
        makeGrid(userInputInt);
    }
}

gridSizeBtn.addEventListener('click', newGrid);

// Create a function that changes bgcolor of the grid items on mouseenter
function changeColor(color){
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.style.background = color;
        });
    });
}

// Create a function that generates random number between 0 and 255
function randomNum(){
    return 0 + Math.floor(Math.random() * (255 - 0 + 1));
}

// Create a function that shows and hides the grid lines
function showHideGridLines(){
    if(showGridBtn.textContent === 'Show Grid Lines'){
        cells.forEach(cell => {
            cell.style.border = 'solid #ddd 1px';
        });
        showGridBtn.textContent = 'Hide Grid Lines';
    }
    else if(showGridBtn.textContent === 'Hide Grid Lines'){
        cells.forEach(cell => {
            cell.style.border = '';
        });
        showGridBtn.textContent = 'Show Grid Lines';
    }
}









