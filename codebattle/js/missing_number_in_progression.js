//Задача: missing_number_in_progression

//Given an array that represents elements of an arithmetic progression in order. One element is missing in the progression. Return the missing number.

//Example: 6 == solution([2,4,8,10,12,14])

//https://github.com/h/b/blob/master/src/b/issues/missing_number_in_progression.clj

module.exports = (v)=>{
  var st = (v[v.length-1]-v[0])/v.length;
  var d = v[0];
  for(var i=1;i<=v.length;i++){
    d = d+st;
    if(d!=v[i])return d
  }
}
