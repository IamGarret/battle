<?php

//Задача: reverse_each_word

//Given a string as input, reverse each word, but keep the word order the same. Words are separated by whitespaces.

//Example: "olleH ,ereht dna woh era ?uoy" == solution("Hello there, and how are you?")

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/reverse_each_word.clj

// BEGIN implement function `solution` here 
function solution($a) {
    return implode(' ',array_map(function($x) {
        return strrev($x);
    }, explode(' ',$a)));
}
// END

//my version:

function solution ($a) {

    $b = explode(" ", $a);
	$d = '';
    
	foreach ($b as $k=>$v){       
		$d .= strrev($v);
        $d .= ' ';
    }
    
    $d = trim($d);
    
    return $d;

}