//Задача: factorial_trailing_zeroes

//Return the number of trailing zeroes in n! For example, 5! = 120, the number of trailing zeros is 1; 10! = 3 628 800, the number of trailing zeros is 2.

//Example: 6 == solution(28)

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/factorial_trailing_zeroes.clj

module.exports = (n) => {
  var count = 0;
  for(var i = 5; i < n; count += Math.floor(n / i), i *= 5);
  return count;
};