//Задача: sum_primes

//Write some code to sum all primes from 2 up to a given number.

//Example: 4227 == solution(200)

//https://github.com/h/b/blob/master/src/b/issues/sum_primes.clj

module.exports = (num) => {
	sum=0;
	flag=false;
  for (var i = 2; i < num; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) {flag=false; break} else flag=true;
    }

    if (flag) {sum+=i; console.log(i)} // простое
  }
  return sum+2;
}

//alternative:
/* module.exports = n => 

module.exports = n => {
  var sum = 2;
  for(var i=3; i<n;i++){
    var flag = false;
    for(var j=2;j<i;j++){
      if(i%j==0)flag = true;
    }
    if(!flag) sum += i;
  }
  return sum
} */

//alternative:
/* module.exports = (n)=>{
  	var range = Array.apply(null, Array(n-2)).map((_,i)=>i+2);
  	var primes = range.filter((e,i,a)=>(a.slice(0,i).filter((d)=>e%d==0).length==0));
	return primes.reduce((t,e)=>t+e,0);
} */