const container = document.querySelector('.container');
const resetBtn = document.querySelector('#reset-btn');


function createGrid(size) {
    
    container.innerHTML = '';

    
    const totalSquares = size * size;

    container.style.setProperty('--grid-size', size);

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

// Add an event listener to the button
resetBtn.addEventListener('click', () => {
    // Prompt the user for input and convert it to an integer number
    let userSize = parseInt(prompt("Enter a new grid size (Max 100):"), 10);

    // Odin requirement: Limit the user input to a maximum of 100
    if (userSize > 0 && userSize <= 100) {
        createGrid(userSize);
    } else {
        alert("Please enter a valid number between 1 and 100!");
    }
});

createGrid(16);
