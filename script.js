// Part 1: Variable declarations and conditionals
let score = 85;
const passingGrade = 60;
var message = "";

// DOM elements for Part 1
const scoreSlider = document.getElementById('scoreSlider');
const currentScore = document.getElementById('currentScore');
const checkScoreBtn = document.getElementById('checkScoreBtn');
const scoreOutput = document.getElementById('scoreOutput');

// Update score when slider changes
scoreSlider.addEventListener('input', function() {
    score = parseInt(this.value);
    currentScore.textContent = score;
});

// Check score and display result
checkScoreBtn.addEventListener('click', function() {
    if (score >= 90) {
        message = "Excellent! 🎉";
    } else if (score >= passingGrade) {
        message = "You passed! 👍";
    } else {
        message = "Please try again. 👎";
    }
    scoreOutput.innerHTML = `<p>Score: ${score}</p><p>${message}</p>`;
});

// Part 2: Custom functions
function calculateArea(width, height) {
    return width * height;
}

const isEven = num => num % 2 === 0;

// DOM elements for Part 2
const calculateAreaBtn = document.getElementById('calculateAreaBtn');
const checkEvenBtn = document.getElementById('checkEvenBtn');
const functionOutput = document.getElementById('functionOutput');

// Calculate area button event
calculateAreaBtn.addEventListener('click', function() {
    const width = parseFloat(document.getElementById('widthInput').value);
    const height = parseFloat(document.getElementById('heightInput').value);
    
    if (isNaN(width) || isNaN(height)) {
        functionOutput.innerHTML = "<p>Please enter valid numbers!</p>";
        return;
    }
    
    const area = calculateArea(width, height);
    functionOutput.innerHTML = `<p>The area of a rectangle with width ${width} and height ${height} is ${area}.</p>`;
});

// Check even button event
checkEvenBtn.addEventListener('click', function() {
    const num = parseInt(document.getElementById('numberInput').value);
    
    if (isNaN(num)) {
        functionOutput.innerHTML = "<p>Please enter a valid number!</p>";
        return;
    }
    
    const result = isEven(num) ? "even" : "odd";
    functionOutput.innerHTML += `<p>The number ${num} is ${result}.</p>`;
});

// Part 3: Loop examples
const runForLoopBtn = document.getElementById('runForLoopBtn');
const runWhileLoopBtn = document.getElementById('runWhileLoopBtn');
const loopOutput = document.getElementById('loopOutput');

// For loop button event
runForLoopBtn.addEventListener('click', function() {
    let output = "<p>For loop results:</p>";
    for (let i = 0; i < 5; i++) {
        output += `<p>Iteration: ${i}</p>`;
    }
    loopOutput.innerHTML = output;
});

// While loop button event
runWhileLoopBtn.addEventListener('click', function() {
    let output = "<p>While loop results:</p>";
    let count = 0;
    while (count < 3) {
        output += `<p>Count: ${count}</p>`;
        count++;
    }
    loopOutput.innerHTML = output;
});

// Part 4: DOM interactions
const changeTextBtn = document.getElementById('changeTextBtn');
const changeColorBtn = document.getElementById('changeColorBtn');
const addElementBtn = document.getElementById('addElementBtn');
const domOutput = document.getElementById('domOutput');

// Change text button event
changeTextBtn.addEventListener('click', function() {
    document.getElementById('text').textContent = 'The text has been changed using JavaScript!';
});

// Change color button event
changeColorBtn.addEventListener('click', function() {
    const colors = ['#6a11cb', '#2575fc', '#ff4e50', '#f9d423', '#4db6ac'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('box').style.backgroundColor = randomColor;
});

// Add element button event
addElementBtn.addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new element added via JavaScript!';
    newElement.style.color = '#2575fc';
    domOutput.appendChild(newElement);
});