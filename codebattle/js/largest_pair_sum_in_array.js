//Задача: largest_pair_sum_in_array

//Given an array of integers, find the largest pair sum in it. For example, the largest pair sum in [12, 34, 10, 6, 40] is 74.

//Example: 11 == solution([1,2,3,4,5,6])

//https://github.com/h/b/blob/master/src/b/issues/largest_pair_sum_in_array.clj

module.exports = (arr) => {
  console.log(arr);
  if(arr[0] == undefined ) return 0;
	if(arr.length == 1) return arr[0];
 arr = arr.sort((a,b) => {return b-a;});
  return arr[0]+arr[1];
};