const numberOfVowels = function(data) {
  let count = 0;
  for (let i =0; i < data.length; i++) {
    const char = data[i];
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));