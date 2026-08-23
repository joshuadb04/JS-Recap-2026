const number = +prompt("Enter a number");

let numbers = "";
let sum = +numbers;

for (let i = 0; i < number; i++) {
  numbers += i + 1;
}

console.log(number);
console.log(numbers);
document.querySelector("#count").innerText = numbers;
document.querySelector("#count").innerText = sum;
