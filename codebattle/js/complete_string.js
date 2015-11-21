//Задача: complete_string

//A string is said to be complete if it contains all the characters from a to z. Given a string, check if it's complete or not.

//Example: false == solution("wyyga")

module.exports = (str) => {
  	var alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'];
	//if(str.length > alph.length) return false;
	for(var i = 0; i < alph.length; ++i) {
		if(str.indexOf(alph[i]) === -1) return false;
	}
	return true;
};

//alternative:

module.exports = solution;

var alph = "abcdefghijklmnopqrstuvwxyz";
function solution(_str) {
	var table = {};
  var str = _str.toLowerCase();
  for(var i = 0; i < alph.length; ++i) {
	table[alph[i]] = 0;
  }
  for(var i = 0; i < str.length; ++i) {
    table[str[i]]++;
  }
  
  for(var i = 0; i < alph.length; ++i) {
	if(!table[alph[i]]) return false;
  }

  return true;
}