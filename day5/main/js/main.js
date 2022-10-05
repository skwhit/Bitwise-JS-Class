// create a variable
// let score = 0;

// update the variable
// score += 1;

let score = 0;

function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Add Point';
    document.body.appendChild(button);
    button.addEventListener('click', updateScore);
}

function createNewLine() {
    const newLine = document.createElement('p');
    newLine.textContent = `Score: `;
    document.body.appendChild(newLine);
}

function updateScore() {
    score++;
    document.querySelector('p').textContent = `Score: ${score}`;
}

const button1 = createButton();
let newLine1 = createNewLine();