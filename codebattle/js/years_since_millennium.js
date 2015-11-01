//Задача: years_since_millennium

//Count how many years have passed since latest millennium. For example, for 2015 it is 15 years since the latest millennium, which was year 2000.

//Example: 15 == solution(2015)

//https://github.com/h/b/blob/master/src/b/issues/years_since_millennium.clj

// BEGIN implement function `solution` here 
function solution (x)
{
  return  x - parseInt(x / 1000) * 1000
}
// END

module.exports = solution;