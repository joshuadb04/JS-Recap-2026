const numbers = [7, 2, 6, 1, 8, 3];

const sortArr = [...numbers].sort((a, b) => a - b);

console.log("Original array: " + numbers);
console.log("Sorted array: " + sortArr);
