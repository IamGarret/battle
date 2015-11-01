<?php

//Задача: concat_chess

//Concatenate 2 strings by characters, one by one. In other words, take the 1st char from the first string, then 1st char from the second string, then 2nd char from the first string, then 2nd char from the second string, and so on. If on string ends before the other, just continue with the remaining characters.

//Example: "awbxcydz" == solution("abcd", "wxyz")

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/concat_chess.clj

// BEGIN implement function `solution` here 
function solution($a,$b) {
    $res = '';
    for ($i = 0;$i<max(strlen($a), strlen($b));$i++) {
        if (isset($a[$i])) $res .= $a[$i];
        if (isset($b[$i])) $res .= $b[$i];
    }
    return $res;
}
// END