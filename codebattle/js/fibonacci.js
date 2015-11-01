//Задача: fibonacci

//Return the nth item in the Fibonacci sequence. Hint: The first item in the sequence is 0.

//Example: 13 == solution(7)

//https://github.com/h/b/blob/master/src/b/issues/fibonacci.clj

module.exports = num=>{
  var fib = [0, 1];
  while (fib.length < num+1) {
    fib[fib.length] = fib[fib.length-1] + fib[fib.length-2]
  }
  
  console.log(num, fib)
  return fib[num]
}