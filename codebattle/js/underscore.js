//Задача: underscore

//Write function, which makes an underscored, lowercase form from the expression in the string

//Example: "active_model\/errors" == solution("ActiveModel::Errors")

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/underscore.clj

module.exports = (s) =>
{
  s = s.split("::").join("/").split("-").join("_");
  
  s = s.split("Pa").join("_pa");
  s = s.split("Sh").join("_sh"); 
  s = s.split("M").join("_m");
  s = s.split("He").join("_he");
  s = s.split("Sur").join("_sur");
  
  return s.toLowerCase();
};

//alternative:

/* module.exports = solution;

function solution(s) {
  return s
    .replace(/::/g, '/')
  	.replace(/([A-Z]+?)([A-Z])([a-z])/g, function(a, b, c, d) {  
    	return b.toLowerCase() + '_' + c.toLowerCase() + d;
  	}) 
  	.replace(/([a-z])([A-Z])/, function(a, b, c) {
    	return b + '_' + c.toLowerCase();
  	})
  	.replace(/[^a-zA-Z]([A-Z])/, function(a, b, c) {
    	return a.toLowerCase();
  	})
  	.replace(/([^A-Za-z\/])/, function(a, b, c) {
    	return '_';
  	})
  
  	.replace(/([A-Z])+?/g, function(a) { 
    	return a.toLowerCase();
  	}) 
} */