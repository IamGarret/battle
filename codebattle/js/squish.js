//Задача: squish

//Write function, which replace any sequences of spaces to single space.

//Example: "This string has too much spaces" == solution("This string has too much spaces")

//https://github.com/h/b/blob/master/src/b/issues/squish.clj

module.exports = (s) => s.replace(/\s+/g, " ");