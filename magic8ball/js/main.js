// Create an input field for users to ask a question
// Create a label for your input field telling your user to "Ask me anything!"
// Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
// Create a div with an id of "answers" that you will insert the images into using js
// Create an "ask" function that when clicked, will choose a random 8ball image and insert it into your "answers" div
// array list that will contain our answers
let answerOptions = [
  "You will not figure out the piece of code today!!!",
  "You will not find the bug today!!",
  "You will cause a stack overflow",
  "unfullfilled promise",
];
let answerOptionsLength = answerOptions.length;
// create random number generator
let randomNum;
// is run a for loop through our array
const button = document.getElementById("button");
button.addEventListener("click", function ask() {
  randomNum = Math.floor(Math.random() * answerOptionsLength);
  console.log(answerOptions[randomNum]);
  document.getElementById("response").innerHTML = answerOptions[randomNum];
});
// Replace the input field with the user's question when displaying the answer
// Style your page any way you like
// Activate Github Pages for your project
