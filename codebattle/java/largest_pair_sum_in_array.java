//Задача: largest_pair_sum_in_array

//Given an array of integers, find the largest pair sum in it. For example, the largest pair sum in [12, 34, 10, 6, 40] is 74.

//Example: 11 == solution([1,2,3,4,5,6])

import java.util.*;
import java.util.stream.*;
import java.util.function.Function;

public class Solution {
    // args is list of arguments for function solution. If you see solution([1 2 3]), it means that
    // args is [[1 2 3]]. For solution(1, [1 2]) args will be [1, [1 2]] and so on.
    public static Object solution(ArrayList<Object> args) {
        // BEGIN implement function `solution` here 
        //ArrayList<Integer> list = (ArrayList<Integer>)args.get(0);
        
        //Object obj=args.get(0);
        //int[] array = (int[])obj;
        int res=0;
        ArrayList<Integer> list = (ArrayList<Integer>)args.get(0);
        //for (int i=0; i<array.length;i++)
        //{
        //    list.add(array[i]);
        //}
        if (list.isEmpty()) return 0;
        if (list.size()==1) return list.get(0);
        Collections.sort(list);
        res = list.get(list.size()-1)+list.get(list.size()-2);
        return res;
        // END
    }
}