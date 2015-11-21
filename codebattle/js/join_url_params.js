//Задача: join_url_params

//Return a query string (URL) generated from the given address and a hash map of parameters.

//Example: "http:\/\/www.foobar.com?first_param=123&second_param=456&third_param=678" == solution("http:\/\/www.foobar.com", {"first_param":123,"second_param":456,"third_param":678})

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/join_url_params.clj

module.exports = (u, h) => u+="?" + Object.keys(h).map((e)=>e+"="+h[e]).join("&");

// or:

'use strict';

module.exports = (str,obj) => {
  let r = str + '?';
  let kek = Object.keys(obj).sort();
  for(var i in kek) 
    r+= kek[i] + '=' + obj[kek[i]] + '&';
  r = r.split('');
  if(kek.length)
  r.splice(r.length-1,1);
  return r.join('');
};