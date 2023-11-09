import math

def binary_search(haystack, needle):
    left = 0
    right = len(haystack) - 1

    while left <= right:
        middle = math.floor((left + right) / 2)

        if haystack[middle] == needle:
            return True
        elif haystack[middle] < needle:
            left = middle + 1
        else:
            right = middle - 1
    
    return False

print(binary_search([1, 2, 3], 3)); # True
print(binary_search([1, 2], 2)); # True
print(binary_search([1, 2, 3], 4)); # False