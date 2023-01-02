const urlEncode = function(text) {
  let result = "";
  text = text.trim()
  for (i=0; i < text.length; i++) {
    let currentChar = text[i]
    if (currentChar === " ") {
      result += "%20"
    } else {
      result += currentChar
    }

  }
  return result
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));