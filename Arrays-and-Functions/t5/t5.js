function sortArray(numbers, order) {
  const sorted = [...numbers];

  if (order === "asc") {
    return sorted.sort((a, b) => a - b);
  }

  if (order === "desc") {
    return sorted.sort((a, b) => b - a);
  }

  return sorted;
}

const numbers = [5, 2, 8, 1, 9];
console.log(numbers);
console.log("Ascending order: " + sortArray(numbers, "asc"));
console.log("Descending orders: " + sortArray(numbers, "desc"));

const numbers2 = [7, 2, 6, 1, 8, 3];
console.log(numbers2);
console.log("Ascending order: " + sortArray(numbers2, "asc"));
console.log("Descending orders: " + sortArray(numbers2, "desc"));
