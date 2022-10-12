let num;
let result;

function FizzBuzz() {
  for (let i = 0; i < 100; i++) {
    const h3 = document.createElement("h3");
    document.body.append(h3);
    num = i + 1;

    if (num % 3 === 0 && num % 5 === 0) {
      result = "FizzBuzz";
    } else if (num % 3 === 0 && num % 5 !== 0) {
      result = "Fizz";
    } else if (num % 3 !== 0 && num % 5 === 0) {
      result = "Buzz";
    } else {
      result = "";
    }
    console.log(result);
    h3.innerHTML = `${i + 1} ${result}`;
  }
}

FizzBuzz();
