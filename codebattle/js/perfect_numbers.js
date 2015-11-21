//Задача: perfect_numbers

//Determine if a given number is "perfect". A number is "perfect" if the sum of its divisors is equal to the number itself.

//Example: true == solution(6)

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/perfect_numbers.clj

module.exports = n => {
  var s = 1
  for(var i=2; i<n; i++ ){
    if(n % i == 0) s += i
  }
  return s == n
}