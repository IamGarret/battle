//Задача: find_missing_number

//Given a sequence of integers from 1 to N in a random order. One of the numbers is missing (the others are found exactly once). N is not known beforehand. Determine the missing number.

//Example: 1 == solution([2,3,4,5])

//https://github.com/h/b/blob/master/src/b/issues/find_missing_number.clj

module.exports = v => {
  for(var i=0; i<=v.length; i++){
    if(v[i] != i+1)return i+1
  }
}