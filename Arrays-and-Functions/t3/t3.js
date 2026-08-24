let numbers = [];

while (true) {
  let input = prompt(`Enter a number or type "done" to stop:`);
  if (input === "done") {
    break;
  }
  numbers.push(+input);
}

for (let num of numbers) {
  if (num % 2 === 0) {
    document.querySelector("#even").innerHTML += num + ", ";
  }
}

document.querySelector("#end").innerHTML = "End of program :)";
