//Задача: more_than_medium

//Given a sentence (as string), return an array of words which are longer than the average length of all the words. Words a separated by a whitespace. If there is a trailing period (dot), it should be omittied.

//Example: ["This","sample","string"] == solution("This is a sample string")

//https://github.com/h/b/blob/master/src/b/issues/more_than_medium.clj

module.exports = s =>{
  var ws = s.replace(/\./g,'').split(' ')
  var av = ws.reduce((t,e)=>t+e.length,0) / ws.length;
  return ws.filter((e)=>e.length>av);
}

