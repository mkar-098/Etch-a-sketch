const container = document.querySelector('.container');

function createGrid() {
    // Loop exactly 256 times
    for (let i = 0; i < 256; i++) {
        // Create a new blank div element
        const square = document.createElement('div');
        
        // Add a class name to it so we can style it in CSS
        square.classList.add('grid-square');
        
        // Put the new square inside the container
        container.appendChild(square);
    }
}

createGrid();

function createGridO() {
    for (let i = 0; index < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';

        });

        container.appendChild(square);

    }
}