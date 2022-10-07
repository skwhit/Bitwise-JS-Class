const h1Text1 = createh1();
let input1 = createTextInput();
const button1 = createButton();
const p1 = createParagraph();
let password;
input1.focus();

function createh1() {
    const h1 = document.createElement('h1');
    h1.textContent = "Please enter a password:";
    document.body.appendChild(h1);
    return h1;
}

function createTextInput() {
    const input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}

function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Submit (Press Enter)';
    document.body.appendChild(button);
    button.addEventListener('click', passwordValidator);
    return button;
}

function createParagraph() {
    const p = document.createElement('p');
    p.textContent = "Password requirements: 6-20 characters. Starts with a letter.";
    document.body.appendChild(p);
    return p;
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