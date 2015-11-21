//Задача: mangling_sentence

//FIXME Напишите функцию сортирующую буквы в каждом слове предложения.

//Example: "Eey fo Entw, adn Eot fo Fgor, Loow fo Abt, adn Egnotu fo Dgo." == solution("Eye of Newt, and Toe of Frog, Wool of Bat, and Tongue of Dog.")

module.exports = (s) =>{
  varo = {};
  s = s.split(' ');
  for(var i in s){
    if(~s[i].indexOf('-')){
      var k = s[i].split('-');
      for(var j in k){
      if(k[j][0] == k[j][0].toUpperCase()) o[i+''+j] = true;
        }
        }
    else if(s[i][0] == s[i][0].toUpperCase()){
      o[i] = true;
    	console.log(s[i]);
    }
  }
  s = s.join(' ');
  console.log();
  return s.toLowerCase().split(' ').map((a,i) => ~a.indexOf('-') ? a.split('-')
  .map((kek,i1) =>{
    kek = kek.split('').sort((d,w) => {
      if(d.charCodeAt() < 97) return 1;
      if(w.charCodeAt() < 97) return -1;
      return d.charCodeAt() - w.charCodeAt(); 
    }).join('');
   return o[i+''+i1] ? kek[0].toUpperCase() + kek.slice(1) : kek;
  }).join('-') : a.split('').sort((d,w) => {
      if(d.charCodeAt() < 97) return 1;
      if(w.charCodeAt() < 97) return -1;
      return d.charCodeAt() - w.charCodeAt(); 
    }).join('')).map((sas,i) => o[i] != undefined ? sas[0].toUpperCase() + sas.slice(1) : sas).join(' ');
}