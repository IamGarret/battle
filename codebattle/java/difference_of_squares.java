//Задача: difference_of_squares

//Find the difference between the square of the sum and the sum of the squares of the first N natural numbers. The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025 The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 10**2 = 385 Hence, the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

//Example: 170 == solution(5)

//https://github.com/h/b/blob/master/src/b/issues/difference_of_squares.clj

import java.util.*;
import java.util.stream.*;
import java.util.function.Function;

public class Solution {
    // args is list of arguments for function solution. If you see solution([1 2 3]), it means that
    // args is [[1 2 3]]. For solution(1, [1 2]) args will be [1, [1 2]] and so on.
    public static Object solution(ArrayList<Object> args) {
        // BEGIN implement function `solution` here 
        int n = (int) args.get(0);
        List<Double> sumOfSquatesList = new ArrayList<>();
        List<Integer> sumList = new ArrayList<>();
        IntStream.iterate(0, i -> ++i).limit(n+1).forEach(i -> {
            sumOfSquatesList.add((double) i * i);
            sumList.add(i);
        });
        double sumOfSquates = sumOfSquatesList.stream().reduce(Double::sum).orElse(0d);
        double squareOfSum = Math.pow(sumList.stream().reduce(Integer::sum).orElse(0), 2);
        return new Double(squareOfSum - sumOfSquates).intValue();
        // END
    }
}