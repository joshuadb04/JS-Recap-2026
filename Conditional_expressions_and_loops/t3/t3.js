"use strict";

const sides = prompt("Please enter the length of each side of your triangle in the following format (cm, cm, cm)");

const side = sides.split(",");

const side1 = +side[0];
const side2 = +side[1];
const side3 = +side[2];

if (side1 === side2 && side2 === side3) {
  document.querySelector("#input").innerText = `You entered ${side1}, ${side2}, ${side3}`;
  document.querySelector("#output").innerText = "This is an Equilateral Triangle";
} else if (
  (side1 === side2 && side2 !== side3) ||
  (side1 === side3 && side3 !== side2) ||
  (side2 === side3 && side3 !== side1)
) {
  document.querySelector("#input").innerText = `You entered ${side1}, ${side2}, ${side3}`;
  document.querySelector("#output").innerText = "This is an Isosceles Triangle";
} else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
  document.querySelector("#input").innerText = `You entered ${side1}, ${side2}, ${side3}`;
  document.querySelector("#output").innerText = "This is a Scalene Triangle";
}
