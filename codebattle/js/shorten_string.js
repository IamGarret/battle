//Задача: shorten_string

//Provide the word in the form of an acronym composed of the first letter, the number of letters in the word minus 2 and the last letter of the word.

//Example: "L10n" == solution("Localization")

//https://github.com/h/b/blob/master/src/b/issues/shorten_string.clj

module.exports = (s) =>
{
  var len = s.length - 2;
  
  return s[0] + len + s[len + 1];
};