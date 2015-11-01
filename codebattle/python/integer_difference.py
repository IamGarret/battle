#Задача: integer_difference

#Find how many pairs X, Y there are in the array, such that abs(X-Y) is equal to the first argument.

#Example: 3 == solution(4, [1,1,5,6,9,16,27])

#https://github.com/h/b/blob/master/src/b/issues/integer_difference.clj

# BEGIN implement function `solution` here 
def solution(d, xs):
  return sum(abs(x - y) == d for (i, x) in enumerate(xs)
            for y in xs[i+1:])
# END

#alternative:

#def solution(d, xs):
#  return sum(abs(x - y) == d
#            for (i, x) in enumerate(xs)
#            for y in xs[i+1:])