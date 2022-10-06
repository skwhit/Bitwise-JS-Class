const h1 = createh1();
let input1 = createTextInput();
const button1 = createButton();
const h2 = createh2();
let num;
document.querySelector('input').focus();

function createh1() {
    const h1 = document.createElement('h1');
    h1.textContent = "Please enter a whole number to determine whether it's odd or even:";
    document.body.appendChild(h1);
}

function createTextInput() {
    const input = document.createElement('input');
    document.body.appendChild(input);
}

function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Submit (Press Enter)';
    document.body.appendChild(button);
    button.addEventListener('click', oddOrEven);
}

document.querySelector('input').addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector('button').click();
    }
  });

function createh2() {
    const h2 = document.createElement('h2');
    h2.textContent = '';
    document.body.appendChild(h2);
}

function oddOrEven() {
    num = Number(document.querySelector('input').value);
    document.querySelector('input').value = "";
    document.querySelector('input').focus();
    console.log(num);
    if (num %2===0) {
        result = `${num} is an even number`
        document.querySelector('h2').textContent = result;
    }
    else if (num%2===1||num%2===-1) {
        result = `${num} is an odd number`
        document.querySelector('h2').textContent = result;
    }
    else {
        alert('This input is not a whole number. Please enter a whole number.')
    }
}