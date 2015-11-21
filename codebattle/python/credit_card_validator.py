#Задача: credit_card_validator
#Credit card numbers can be validated with a process called the Luhn algorithm. Simply stated, the Luhn algorithm works like this:

#             1. If the length of the card number is even, pick all the digits with an even index.
#             If the length of the card number is odd, pick all the digits with an odd index.
#             2. Transform each digit like so: if 2*x > 9, then replace x with 2*x - 9;
#             othwerise, replace x with 2*x
#             3. Add up all the numbers.
#             4. If the result is divisable by 10 (withour remainder) then the card number was valid. 

def solution(s):
  nums = map(int, s[len(s)%2::2])
  res = list(map(int, s[(len(s)+1)%2::2]))
  for n in nums:
    if 2 * n > 9:
      res.append(2 * n - 9)
    else:
      res.append(2 * n)
  return sum(res) % 10 == 0