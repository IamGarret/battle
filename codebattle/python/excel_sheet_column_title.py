#Задача: excel_sheet_column_title

#Given a positive integer, return its corresponding column title as it appears in an Excel sheet. For example: 1 -> A, 2 -> B, 3 -> C, ..., 26 -> Z, 27 -> AA, 28 -> AB

#Example: "YP" == solution(666)

#https://github.com/h/b/blob/master/src/b/issues/excel_sheet_column_title.clj

def solution(n):
    a= (n-1)%26
    letter = chr(65+a)
    num2 = (n-1)//26
    if num2 > 0:
        result = letter
        return solution(num2) + result
    else:
        return letter