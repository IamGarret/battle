//Задача: happy_numbers

//Happy numbers are positive integers that follow a particular formula: take each individual digit, square it, and then sum the squares to get a new number. Repeat with the new number and eventually, you might get to a number whose squared sum is 1. This is a happy number. An unhappy number (or sad number) is one that loops endlessly. Write a function that determines if a number is happy or not.

//Example: true == solution(7)

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/happy_numbers.clj

module.exports = n => {
  var h = {}
  while(n>1){
    h[n]=true;
    n = n.toString().split('').reduce((t,e)=>e*e+t,0);
    if(h[n])return false;
  }
  return true
}