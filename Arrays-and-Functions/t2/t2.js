let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(prompt("Enter a number one by one (5 times)"));
}
document.querySelector("#output").innerText = "Numbers entered: " + numbers.join(", ");

const findNum = prompt("Enter a number you want to find in the Array.");
document.querySelector("#search").innerText = findNum;
if (numbers.includes(findNum)) {
  document.querySelector("#find").innerText = `Number ${findNum} is in the Array`;
} else {
  document.querySelector("#find").innerText = `Number ${findNum} is not in the Array`;
}

const numPop = numbers.pop();
document.querySelector("#pop").innerText = "New array of numbers: " + numbers.join(", ");

const numSort = numbers.sort((a, b) => a - b);
document.querySelector("#sort").innerText = "Sorted numbers: " + numSort.join(", ");
