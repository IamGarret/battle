//Задача: xor

//Given 2 strings, return a string generated by XORing them. Of course, you XOR their bit representations.

//Example: "5*" == solution("xor", "ME")

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/xor.clj

module.exports = (a,b)=>{
  var r = "";
  for(var i=0;i<a.length && i<b.length;i++){
    r+= String.fromCharCode(a[i].charCodeAt() ^ b[i].charCodeAt())
  }
  return r;
}