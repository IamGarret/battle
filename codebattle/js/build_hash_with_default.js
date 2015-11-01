//Задача: build_hash_with_default

//Return a new hash map with elements of the given array as keys, and the given default value as values for those keys.

//Example: {"draft":0,"completed":0} == solution(["draft","completed"], 0)

//https://github.com/h/b/blob/master/src/b/issues/build_hash_with_default.clj

'strict mode'
module.exports = (arr, v) => {
  var acc = {};
  arr.forEach((x) => acc[x] = v)
  return acc;
}