// ------------ DAILY CHALLENGE ------------
const h1 = document.createElement("h1");
document.body.append(h1);
h1.innerHTML = "";
h1.setAttribute(
  "style",
  "margin: 0; padding: 0; color: blue; display: flex; justify-content: center; align-items: center; height: 100vh;font-size: 4rem; text-align: center;"
);
h1.innerHTML = processor();

// Prompt the user for two different numbers and display which, if any, is larger
function processor() {
  let num = 0; //num will change when user is prompted
  let numOne = numPrompt("Please enter a number");
  let numTwo = numPrompt("Please enter a second number");

  function numPrompt(message) {
    num = prompt(message);
    if (isNaN(num) || num === "") {
      alert("Your input is not a number");
      numPrompt(message); //function is called again if user input is invalid
    } else if (num === null) {
      return null; //null will return if user cancels a prompt
    }
    return num; //returns user input to numOne and numTwo if passes checks
  }

  if (numOne !== null && numTwo !== null) {
    // Convert the values to integers
    // Store the two integers as variables
    let intOne = parseInt(numOne);
    let intTwo = parseInt(numTwo);

    // Compare the two numbers
    if (intTwo === intOne) {
      result = "These numbers are the same.";
    } else if (intTwo > intOne) {
      result = `${intTwo} is larger than ${intOne}`;
    } else {
      result = `${intOne} is larger than ${intTwo}`;
    }

    // Alert the larger number
    console.log(result);
    return result;
  }
  return "Process cancelled. Please reload the page if you wish to try again.";
}
