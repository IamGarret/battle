#Задача: power_of_two

#Determine if given integer is a power of two.

#Example: true == solution(16)

#https://github.com/h/b/blob/master/src/b/issues/power_of_two.clj

# BEGIN implement function `solution` here 
def solution(n)
  while n > 1
    if n % 2 != 0
      return false
    end
    n /= 2
  end
  return true
end
# END