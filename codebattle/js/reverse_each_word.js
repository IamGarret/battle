//Задача: reverse_each_word

//Given a string as input, reverse each word, but keep the word order the same. Words are separated by whitespaces.

//Example: "olleH ,ereht dna woh era ?uoy" == solution("Hello there, and how are you?")

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/reverse_each_word.clj

// BEGIN implement function `solution` here 
function lution()x 
{
  var mas = x.split(" ")
  console.log(mas[0])
  var str = ""
  
  for (var k = 0; k < mas.length; k++)
    {
      str += mas[k].split("").reverse().join("");
      if (k != mas.length - 1)
        str += " "
    }
  return str;
}
// END

module.exports = solution;