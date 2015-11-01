//Задача: word_positions

//Given a text file and a word, find the positions that the word occurs in the file. We’ll be asked to find the positions of many words in the same file.

//Example: [12] == solution("find a word in some sentence", "in")

//https://github.com/h/b/blob/master/src/b/issues/word_positions.clj

module.exports = (s,s1) => {
  var i=[], j=0; 
  do {
    var x=s.indexOf(s1,j); 
    j=x+1;	
    if (j!=0) i.push((x));
  } 
  while (x!=-1) return i 
}