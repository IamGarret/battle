//Задача: join_url_params

//Return a query string (URL) generated from the given address and a hash map of parameters.

//Example: "http:\/\/www.foobar.com?first_param=123&second_param=456&third_param=678" == solution("http:\/\/www.foobar.com", {"first_param":123,"second_param":456,"third_param":678})

//https://github.com/h/b/blob/master/src/b/issues/join_url_params.clj

module.exports = (u, h) => u+="?" + Object.keys(h).map((e)=>e+"="+h[e]).join("&");