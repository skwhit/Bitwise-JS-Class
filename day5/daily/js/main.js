const h1Text1 = createh1();
let input1 = createTextInput();
const button1 = createButton();
const h2Text1 = createh2();
let num;
input1.focus();

function createh1() {
    const h1 = document.createElement('h1');
    h1.textContent = "Please enter a whole number to determine whether it's odd or even:";
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
    button.addEventListener('click', oddOrEven);
    return button;
}

input1.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector('button').click();
    }
  });

function createh2() {
    const h2 = document.createElement('h2');
    h2.textContent = '';
    document.body.appendChild(h2);
    return h2;
}

function oddOrEven() {
    num = Number(input1.value);
    input1.value = "";
    input1.focus();
    console.log(num);
    if (num %2===0) {
        result = `${num} is an even number`
        h2Text1.textContent = result;
    }
    else if (num%2===1||num%2===-1) {
        result = `${num} is an odd number`
        h2Text1.textContent = result;
    }
    else {
        alert('This input is not a whole number. Please enter a whole number.')
    }
}