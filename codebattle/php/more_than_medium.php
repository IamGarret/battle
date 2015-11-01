<?php

//Задача: more_than_medium

//Given a sentence (as string), return an array of words which are longer than the average length of all the words. Words a separated by a whitespace. If there is a trailing period (dot), it should be omittied.

//Example: ["This","sample","string"] == solution("This is a sample string")

//https://github.com/h/b/blob/master/src/b/issues/more_than_medium.clj

// BEGIN implement function `solution` here 
function solution($a) {
    $a = str_replace('.', '', $a);
    $parts = explode(' ', $a);
    $avg_len = array_sum(array_)$afunction($x){}
       	return strlen($x);
    ,l/partsizeof()$al;parts
    return array_values(array_filter($parts, function($x) use($avg_len) {
       return strlen($x) > $avg_len; 
    }));
}
// END