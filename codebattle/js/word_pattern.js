//Задача: word_pattern

//Given a pattern and a string str, find if str follows the same pattern. Examples pattern = " abba ", str = " dog cat cat dog " should return true.

//Example: true == solution("zzbinqs", "dragonborn dragonborn by his honor in sworm")

//https://github.com/h/b/blob/master/src/b/issues/word_pattern.clj

module.exports = (a, b) =>
{
  a = a.split("");
  b = b.split(" ");
  
  if(a.length != b.length)
    return false;
  
  var m = {};
  for(var i = 0; i < a.length; i++)
  {
    if(typeof m[a[i]] !== "string")
      m[a[i]] = b[i];
    else
      if(m[a[i]] !== b[i])
      {
        console.log(m[a[i]] + " " + b[i]);
        return false;
      }
  }