#Задача: pythagorean_triple

#Check 3 integers is a Pythagorian Triplet. Pythagorian Triplet is a triplet of numbers, such that x^2 + y^2 = z^2

#Example: true == solution([12,5,13])

def solution(ns):
  ns.sort()
  return ns[0] ** 2 + ns[1] ** 2 == ns[2] ** 