"use strict";

const celsius = prompt("Enter a temperature in Celsius: ");

const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

document.querySelector("#fahrenheit").innerText = `${fahrenheit} F`;
document.querySelector("#kelvin").innerText = `${kelvin} K`;
