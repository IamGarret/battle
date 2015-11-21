#Задача: disjoint_sets

#Given two sets represented by two arrays, check if the given two sets are disjoint or not. Given arrays have no duplicates.

#Example: true == solution([12,34,11,9,3], [7,2,1,5])

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/disjoint_sets.clj

# BEGIN implement function `solution` here 

def solution(lst1, lst2):
    if not lst1 or not lst2:
        return True
    lst = []
    lst.extend(set(lst1))
    lst.extend(set(lst2))
    for elem in lst:
        if lst.count(elem) > 1:
            return False
    return True

    
    
# END