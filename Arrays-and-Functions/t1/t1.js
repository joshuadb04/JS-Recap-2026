"use strict";

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("fruits: " + fruits);
console.log("fruits length: " + fruits.length);
console.log("Element at index 2: " + fruits[2]);
console.log("Element at last index: " + fruits[fruits.length - 1]);

let vegetables = [];
const vegetable1 = prompt("Enter your 1st vegetable.");
const vegetable2 = prompt("Enter your 2nd vegetable.");
const vegetable3 = prompt("Enter your 3rd vegetable.");
vegetables.push(vegetable1, vegetable2, vegetable3);
console.log("Vegetables: " + vegetables);
console.log("Length of vegetables: " + vegetables.length);
