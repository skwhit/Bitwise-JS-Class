// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
let userFirstName = "";
userFirstName = prompt("Please enter your first name");
// Reverse your user’s name
let reversedFirstName = userFirstName.split("").reverse().join("");
// alert the reversed string
alert(`Here is your first name reversed: \n\n${reversedFirstName}`);

// Challenge 2
// Prompt for a number value (provide a default of 10)
let numberOne = 10;
let numberTwo = 10;
numberOne = prompt('Please enter your first number');
// Prompt for a second number value (provide a default of 10)
numberTwo = prompt('Please enter your second number');
// Convert the prompted values into integers using parseInt()
numberOne = parseInt(numberOne);
numberTwo = parseInt(numberTwo);
// Add the numbers together and alert the user with the result
alert(`The sum of your two numbers is: \n\n${numberOne + numberTwo}`)