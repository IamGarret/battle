#Задача: ruth_aaron_pairs

#Check if a given pair of numbers is a Ruth–Aaron pair. A Ruth–Aaron pair consists of two consecutive integers (e.g. 714 and 715) for which the sums of the prime factors of each integer are equal. When calculating the sum, take into account the repeating factors.

#Example: true == solution([8,9])

# BEGIN implement function `solution` here 
def pms(x):
  if x == 0:
    return
  i = 2
  while x != 1:
    while x % i == 0:
      yield i
      x //= i
    i += 1
def solution(xy):
  x, y = xy
  return abs(x - y) == 1 and sum(pms(x)) == sum(pms(y))
# END