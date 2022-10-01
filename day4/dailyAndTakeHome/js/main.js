// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
let numOne = "";
let numTwo = "";

let num = 0; //num will change when user is prompted
numOne = numPrompt("");
numTwo = numPrompt("second ");

function numPrompt(promptNumber) {
    num = prompt(`Please enter a ${promptNumber}number`);
    console.log(num);
    if (isNaN(num)||num=="") {
        alert('Your input is not a number');
        numPrompt(promptNumber);
    } 
    return num; //returns user input to numOne and numTwo if passes checks
}

// Convert the values to integers
// Store the two integers as variables
let intOne = parseInt(numOne);
let intTwo = parseInt(numTwo);

// Compare the two numbers
if (intTwo == intOne) {
    result = "These numbers are the same.";
}
else if (intTwo > intOne) {
    result = `${intTwo} is larger than ${intOne}`;
}
else {
    result = `${intOne} is larger than ${intTwo}`;
}

// Alert the larger number
console.log(result);
alert(result);