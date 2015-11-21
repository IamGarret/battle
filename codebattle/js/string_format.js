//Задача: string_format

//Given a number as input, return a string "Value is X", where X is the given number with zeros added to the beginning so that there are 5 digits in total.

//Example: "Value is 00123" == solution(123)

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/string_format.clj

// BEGIN implement function `solution` here 
function solution(num){
num = num.toString().split('');
var len = num.length ;
while(len !== 5){
  num.unshift(0);
  len++;
}
  return 'Value is ' + num.join('');
  
  
}
// END

module.exports = solution;