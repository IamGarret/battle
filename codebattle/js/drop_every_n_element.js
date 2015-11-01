//Задача: drop_every_n_element

//Drop every N'th element from a list.

//Example: ["a","b","d","e","g","h","k"] == solution(3, ["a","b","c","d","e","f","g","h","i","k"])

//https://github.com/h/b/blob/master/src/b/issues/drop_every_n_element.clj

module.exports = (n, a) => a.filter((e, i) => (i + 1) % n != 0);
