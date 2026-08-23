"use strict";

const num = prompt("Enter a positive number for your multiplication table.");

let table = "";

for (let i = 1; i <= num; i++) {
  table += "<tr>";
  for (let j = 1; j <= num; j++) {
    table += "<td>" + i * j + "<td>";
  }
  table += "</tr>";
}

document.querySelector("#output").innerHTML = table;
document.querySelector("#number").innerHTML = num;
