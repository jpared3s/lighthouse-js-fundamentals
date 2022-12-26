function ageCalculator (name, yearOfbirth, currentYear) {
  let age = currentYear - yearOfbirth;
  return(name + " is " + age + " years old.");

}

console.log(ageCalculator("Miranda", 1983, 2015));