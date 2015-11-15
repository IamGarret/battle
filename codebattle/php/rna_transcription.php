<?php

//Задача: rna_transcription

//Given a DNA strand, return its RNA complement. Both DNA and RNA strands are a sequence of nucleotides. DNA's nucleotides are adenine (A), cytosine (C), guanine (G) and thymidine (T). RNA's nucleotides are adenine (A), cytosine (C), guanine (G) and uracil (U). The transcribed RNA strand of a DNA strand is formed by replacing each nucleotide with its complement: G -> C, C -> G, T -> A, A -> U.

//Example: "UGCACCAGAAUU" == solution("ACGTGGTCTTAA")

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/rna_transcription.clj

// BEGIN implement function `solution` here 
function solution($a) {
    $repl = [
      	'G' => 'C',
        'C' => 'G',
        'T' => 'A',
        'A' => 'U'
    ];
    return implode('', array_map(function($x) use($repl) {
       	 return $repl[$x];
    },str_split($a)));
}
// END

//alternative:

/* function solution($in)
{
    $arr = array(
    'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U');
    $str = "";
    for($i=0;$i<strlen($in);$i++)
    {
        $str .= $arr[$in[$i]];
    }
    return $str;
} */

/* function solution($s) {
    return strtr($s, array(
        'G' => 'C',
        'C' => 'G',
        'T' => 'A',
        'A' => 'U'
    ));
}
} */