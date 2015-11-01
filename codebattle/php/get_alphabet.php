<?php

//Задача: get_alphabet

//Return an alphabet of a given string; the given string is represented as an array of characters. An alphabet of a strin is the set of all distinct characters used in that string.

//Example: "adfs" == solution("asfsfdss")

//https://github.com/h/b/blob/master/src/b/issues/get_alphabet.clj

 
function solution($a) {
    $alpha = [];
    array_map(function($x) use(&$alpha) {
    	if (!in_array($x, $alpha))
            $alpha[] = $x;
    }, str_split($a));
    sort($alpha);
    return implode('', $alpha);
}
