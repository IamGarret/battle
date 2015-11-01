//Задача: power_digits_sum

//Calculate the sum of digits of 2n For example, 215 = 32768, and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

//Example: 13 == solution(8)

//https://github.com/h/b/blob/master/src/b/issues/power_digits_sum.clj

module.exports = n =>Math.pow(2,n).toString().split('').reduce((t,e)=>t+Number(e),0))
