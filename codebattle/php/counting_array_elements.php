<?php

//Задача: counting_array_elements

//Return a hash map that shows how many times each element occurs in the given array.

//Example: {"cat":1,"dog":1,"fish":2} == solution(["cat","dog","fish","fish"])

//https://github.com/h/b/tree/master/src/b/issues/counting_array_elements.clj

// BEGIN implement function `solution` here 

function solution($arr) {
    $result = array();
    foreach ($arr as $v) {
        $result[$v] = intval(@$result[$v]) + 1;
    }
    return $result;
}

// END