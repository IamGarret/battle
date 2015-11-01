//Задача: get_alphabet

//Return an alphabet of a given string; the given string is represented as an array of characters. An alphabet of a strin is the set of all distinct characters used in that string.

//Example: "adfs" == solution("asfsfdss")

//https://github.com/h/b/blob/master/src/b/issues/get_alphabet.clj

module.exports = str=>Array.from(new Set(str.split(''))).sort().join('');
