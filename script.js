// Important Variables
const container = document.querySelector('.container');
const colorModeBtn = document.querySelector('#color-mode');
const rainbowModeBtn = document.querySelector('#rainbow-mode');
const eraserBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');

//Create a function that makes a grid on the given number
function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    };
};

makeRows(16, 16);

const cells = document.querySelectorAll('.grid-item');

// Create a function that generates random number between 0 and 255
function randomBetween(min, max){
    return min + Math.floor(Math.random() * (max - min + 1));
}

// Create a function that 'draws' in the grid
function colorMode(color){
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', (e) => {
            e.target.style.background = color;
        });
    });
}

colorModeBtn.addEventListener('click', () => {
    colorMode('black');
});

// Create a function that draws in the grid with random colors
rainbowModeBtn.addEventListener('click', () =>{
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () =>{
            cell.setAttribute('style', `background-color: 
            rgb(${randomBetween(0, 255)}, 
            ${randomBetween(0, 255)}, 
            ${randomBetween(0, 255)});`);
        });
        
    })
});

// Create a function that 'erases' the drawing in the grid
eraserBtn.addEventListener('click', () => {
    colorMode('white')
});

// Create a function that 'clears' the grid
clearBtn.addEventListener('click', () =>{
    cells.forEach(cell => {
        cell.style.background = 'white';
    });
})



