def largest_number(list):
        max = list[0]
        for number in list:
          if number > max:
            max = number
        return max
print(largest_number([5, 2, 6, 7, 1]))