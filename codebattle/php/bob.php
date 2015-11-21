<?php

//Задача: bob

//Bob answers 'Sure.' if you ask him a question. He answers 'Whoa, chill out!' if you yell at him. He says 'Fine. Be that way!' if you address him without actually saying anything. He answers 'Whatever.' to anything else.

//Example: "Whoa, chill out!" == solution("1, 2, 3 GO!")

//my version:

function solution($a) {
    if (preg_match('/[!A-Z]/', $a)) return "Whoa, chill out!";
    if (preg_match('/[?]/', $a)) return "Sure.";
    if (preg_match('/[ ]/', $a)) return "Fine. Be that way!";
    else return "Whatever.";
}