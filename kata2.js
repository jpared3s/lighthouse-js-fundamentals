const conditionalSum = function(values, condition) {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    const num = values[i];
    if (condition === "even" && num % 2 === 0) {
      total += num;
    } else if (condition === "odd" && num % 2 !== 0) {
      total += num;
    }
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));