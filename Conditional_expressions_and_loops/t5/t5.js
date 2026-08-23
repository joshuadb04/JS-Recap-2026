"use strict";

const number = +prompt("Enter a number");

let numbers = "";
let sum = 0;

for (let i = 0; i < number; i++) {
  numbers += i + 1;
  if (i < number - 1) {
    numbers += ", ";
  }
  sum += i + 1;
}

document.querySelector("#count").innerText = numbers;
document.querySelector("#total").innerText = sum;
