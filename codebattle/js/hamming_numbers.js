//Задача: hamming_numbers

//The sequence of Hamming numbers 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 27, 30, 32, 36, … consists of all numbers of the form 2^i·3^j·5^k where i, j and k are non-negative integers. Generate n-th number.

//Example: 36 == solution(20)

//https://github.com/h/b/blob/master/src/b/issues/hamming_numbers.clj

module.exports = n => {
  var t = 400000;
  var m = 20;
  var l = [];
  
  for(var z=0;z<t;z++){
    var i = getRandomInt(0,m);
    var j = getRandomInt(0,m);
    var k = getRandomInt(0,m);
    nn = Math.pow(2,i)*Math.pow(3,j)*Math.pow(5,k);
    l.push(nn);
  }
  var hm = Array.from(new Set(l)).sort((a,b)=>a-b);
  return hm[n-1];
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}