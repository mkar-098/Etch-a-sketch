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
            
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            
            
            square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        });
        container.appendChild(square);
    }
}

// Add an event listener to the button
resetBtn.addEventListener('click', () => {
    
    let userSize = parseInt(prompt("Enter a new grid size (Max 100):"), 10);

    // Odin requirement: Limit the user input to a maximum of 100
    if (userSize > 0 && userSize <= 100) {
        createGrid(userSize);
    } else {
        alert("Please enter a valid number between 1 and 100!");
    }
});

createGrid(16);
