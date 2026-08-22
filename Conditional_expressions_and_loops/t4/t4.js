"use strict";

const score = prompt("What is your score?");

if (+score <= -1) {
  document.querySelector("#error").innerText = "Please enter a valid score.";
} else if (+score <= 39) {
  document.querySelector("#input").innerText = score;
  document.querySelector("#output").innerText = 0;
} else if (+score <= 51) {
  document.querySelector("#input").innerText = score;
  document.querySelector("#output").innerText = 1;
} else if (+score <= 63) {
  document.querySelector("#input").innerText = score;
  document.querySelector("#output").innerText = 2;
} else if (+score <= 75) {
  document.querySelector("#input").innerText = score;
  document.querySelector("#output").innerText = 3;
} else if (+score <= 87) {
  document.querySelector("#input").innerText = score;
  document.querySelector("#output").innerText = 4;
} else if (+score <= 100) {
  document.querySelector("#input").innerText = score;
  document.querySelector("#output").innerText = 5;
} else {
  document.querySelector("#error").innerText = "Please enter a valid score.";
}
