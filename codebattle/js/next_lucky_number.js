//Задача: next_lucky_number

//Lucky numbers are defined as the numbers consisting only of digits 3 and 5. Write a function which, given a number N, returns the smallest lucky number strictly greater than N.

//Example: 5 == solution(4

// BEGIN implement function `solution` here 
function isLucky(number){
  var n = number.toString().split('');

  for (var i =0; i<=n.length-1;i++){
    if (n[i]!="3" && n[i]!="5"){

      return false
    }
      
  }

  return true;
}

function solution(number){
  var x = 1
  console.log(number);
  while (!isLucky(number+x)){
   
    x++


  }
  return number+x;
}
// END

module.exports = solution;
