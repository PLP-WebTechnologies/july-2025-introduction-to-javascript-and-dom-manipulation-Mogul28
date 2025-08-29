// === Part 1: Mastering JavaScript Basics (Variables & Conditionals) ===
// Get references to our HTML elements
const userInput = document.getElementById('userInput');
const checkButton = document.getElementById('checkNumberButton');
const conditionalResult = document.getElementById('conditionalResult');

checkButton.addEventListener('click', () => {
    // Get the value from the input field
    let userNumber = parseInt(userInput.value);
    
    // Log the value to the console for debugging
    console.log(`User entered: ${userNumber}`);

    // Use a conditional (if/else if/else) to make a decision
    if (userNumber > 5) {
        const message = `The number ${userNumber} is greater than 5.`;
        conditionalResult.textContent = message;
        console.log(message);
    } else if (userNumber <= 5) {
        const message = `The number ${userNumber} is 5 or less.`;
        conditionalResult.textContent = message;
        console.log(message);
    } else {
        const message = "Please enter a valid number.";
        conditionalResult.textContent = message;
        console.log(message);
    }
});


// === Part 2: JavaScript Functions ===
// Get references to our HTML elements
const calculateButton = document.getElementById('calculateButton');
const toggleButton = document.getElementById('toggleButton');
const functionResult = document.getElementById('functionResult');

// Function 1: A function that takes a number and calculates its factorial
function calculateFactorial(n) {
    // A local variable to store the result
    let result = 1;
    if (n === 0 || n === 1) {
        return 1;
    } else if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else {
        for (let i = n; i > 1; i--) {
            result *= i;
        }
        return result;
    }
}

// Function 2: A function that toggles the content of an element
let isOriginalText = true;
function toggleText() {
    if (isOriginalText) {
        functionResult.textContent = "This text has been toggled!";
    } else {
        functionResult.textContent = "Click the 'Toggle Text' button to toggle this text.";
    }
    isOriginalText = !isOriginalText; // Flip the state
}

// Add event listeners to the buttons to call our functions
calculateButton.addEventListener('click', () => {
    const number = 5;
    const factorial = calculateFactorial(number);
    functionResult.textContent = `The factorial of ${number} is: ${factorial}`;
});

toggleButton.addEventListener('click', toggleText);


// === Part 3: JavaScript Loops ===
// Get references to our HTML elements
const runLoopsButton = document.getElementById('runLoopsButton');
const loopResultList = document.getElementById('loopResultList');
const countdownResult = document.getElementById('countdownResult');

runLoopsButton.addEventListener('click', () => {
    // Clear previous results
    loopResultList.innerHTML = '';
    countdownResult.textContent = '';
    
    // Loop 1: Using a 'for' loop to generate a dynamic list
    const items = ['Apple', 'Banana', 'Cherry', 'Date'];
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';

    for (let i = 0; i < items.length; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i + 1}: ${items[i]}`;
        ul.appendChild(li);
    }
    loopResultList.appendChild(ul);
    console.log("For loop finished.");

    // Loop 2: Using a 'while' loop for a countdown simulation
    let count = 5;
    let countdownInterval = setInterval(() => {
        if (count > 0) {
            countdownResult.textContent = `Countdown: ${count}...`;
            count--;
        } else {
            countdownResult.textContent = "Countdown complete!";
            clearInterval(countdownInterval); // Stop the loop
        }
    }, 1000);
});


// === Part 4: Mastering the DOM with JavaScript ===
// Get a reference to our button
const changeTitleButton = document.getElementById('changeTitleButton');

// Add a click event listener to the button
changeTitleButton.addEventListener('click', () => {
    // DOM Interaction 1: Select an element and change its text content
    const domTitle = document.querySelector('h2');
    domTitle.textContent = "DOM Manipulation (Updated!)";

    // DOM Interaction 2: Select an element and toggle its class
    const container = document.querySelector('.container');
    container.classList.toggle('highlight'); // This class doesn't exist, but you can add it to CSS
    
    // DOM Interaction 3: Create a new element and append it to the body
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "A new paragraph created with JavaScript!";
    newParagraph.style.marginTop = '1rem';
    newParagraph.style.color = 'var(--primary-color)';
    document.querySelector('.section').appendChild(newParagraph);
});
