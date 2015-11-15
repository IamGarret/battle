//Задача: fancy_number

//Given a number, find whether it is fancy or not. A fancy number is one which when rotated 180 degrees is the same.

//Example: true == solution("9081806")

//https://github.com/H/b/tree/master/src/b/issues/fancy_number.clj

// BEGIN implement function `solution` here 

h = {'9': '6', '6': '9', '4': '_', '5': '2', '2': '5', '7': '_', '3': '_'}

solution = function(str) {
	return str == str.split("").map(v => h[v] || v).reverse().join("")
}

// END

module.exports = solution;