#Задача: years_since_millennium

#Count how many years have passed since latest millennium. For example, for 2015 it is 15 years since the latest millennium, which was year 2000.

#Example: 15 == solution(2015)

#https://github.com/h/b/blob/master/src/b/issues/years_since_millennium.clj

# BEGIN implement function `solution` here 
def solution(year)
  year % 1000
end
# END