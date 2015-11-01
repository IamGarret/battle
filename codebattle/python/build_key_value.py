#Задача: build_key_value

#Flatten the given hash. This is how HTTP libraries pack data when POST requests are made using x-www-form-urlencoded.

#Example: {"x[0]":"1","x[1]":"2","x[2]":"3"} == solution({"x":["1","2","3"]})

#https://github.com/h/b/tree/master/src/b/issues/build_key_value.clj

# BEGIN implement function `solution` here 
def _solution(res, k, v):
  if isinstance(v, list):
    for idx, r in enumerate(v):
      kk = k + "[" + str(idx) + "]"
      _solution(res, kk, r)
  elif isinstance(v, dict):
    for _k, _v in v.items():
      kk = k + "[" + _k + "]"
      _solution(res, kk, _v)
  else:
    res[k] = v
  return res
  
def solution(d):
  res = {}
  for k, v in d.items():
    _solution(res, k, v)
  return res
# END