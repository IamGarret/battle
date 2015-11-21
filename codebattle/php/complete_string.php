<?php

//Задача: complete_string

//A string is said to be complete if it contains all the characters from a to z. Given a string, check if it's complete or not.

//Example: false == solution("wyyga")

// my version:
function solution($a){
    $alphabet = 'abcdefghijklmnopqrstuvwxyz';   
    return (strlen($a) == strspn($a,$alphabet) & strlen($a) >= 26);
}
