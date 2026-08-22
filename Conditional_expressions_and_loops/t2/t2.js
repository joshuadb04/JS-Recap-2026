"use strict";

const coord1 = prompt("Enter coordinates in the following format (x1, y1):");
const coord2 = prompt("Enter coordinates in the following format (x2, y2):");

const c1 = coord1.split(",");
const c2 = coord2.split(",");

const distance = Math.sqrt((+c2[0] - +c1[0]) ** 2 + (+c2[1] - +c1[1]) ** 2);

console.log(distance);

document.querySelector("#answer").innerText = distance;
