const h1Text1 = displayElement('h1','Please enter a password');
let input1 = displayElement('input');
const button1 = displayElement('button','Submit (Press Enter)');
const p1 = displayElement('p','Password requirements: 6-20 characters. Starts with a letter.');
let password;
input1.focus();
button1.addEventListener('click', passwordValidator);

function displayElement(element, content) {
    const item = document.createElement(element);
    item.textContent = `${content}`;
    document.body.appendChild(item);
    return item;
}

input1.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector('button').click();
    }
  });

function passwordValidator() {
    password = input1.value;
    input1.value = "";
    input1.focus();
    console.log(password);
    if (password.length < 6||password.length > 20) {
        alert("Your password does not meet the 6-20 character length requirement. Please enter a new password.")
    }
    else if (/[a-z]/i.test(password[0])===false) {
        alert("Your password does not start with a letter. Please enter a new password.")
    }
    else {
        alert("You have successfully entered a password that fits our requirements. Your user information is now stored in our system.")
    }
}