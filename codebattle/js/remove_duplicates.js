//Задача: remove_duplicates

//Eliminate repeating values in a list. Repeated elements should be replaced with a single element. The order of the elements should not be changed.

//Example: [1,2,3,4,5] == solution([1,2,2,2,3,4,4,5])

//https://github.com/h/b/blob/master/src/b/issues/remove_duplicates.clj

module.exports = v => Array.from(new Set(v))