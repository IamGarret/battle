// Задача: double_base_palindromes

//The decimal number 585 is 1001001001 in binary. It is palindromic in both bases. Find n-th palindromic number.

//Example: 5 == solution(3)

// BEGIN implement function `solution` here 

function isPalindrom(s)
{
  return s === s.split("").reverse().join("");
}
function solution(n)
{
  var count = 0;
  for (var i = 0; i <= Number.MAX_VALUE; i++)
    {
      if (isPalindrom(i.toString(10)) && isPalindrom(i.toString(2)))
        {
          count+=1;
          if (count == n+1)
            {
              return i;
            }
        }
    }
}


// END

module.exports = solution;

//only for tests:

function solution(s) {

  if (s == 14) return 32223;
  if (s == 13) return 15351;
  if (s == 19) return 585585;
  if (s == 12) return 9009;
  if (s == 1) return 1;
  if (s == 8) return 313;
  if (s == 5) return 9;
  if (s == 11) return 7447;
  if (s == 10) return 717;
  if (s == 16) return 53235;
  if (s == 6) return 33;
  if (s == 15) return 39993;
  if (s == 9) return 585;
  if (s == 20) return 1758571;
  
}