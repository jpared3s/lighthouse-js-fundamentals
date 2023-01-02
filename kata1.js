const sumLargestNumbers = function(data) {
  let largest = data[0];
  let secondLargest = data[1];
  for (let i = 0; i < data.length; i++) {
    const num = data[i];
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  }
  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));