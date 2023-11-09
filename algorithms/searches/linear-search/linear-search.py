def linear_search(haystack, needle):
    for num in haystack:
        if num == needle:
            return True
    
    return False

print(linear_search([1, 2, 3], 3)) # True
print(linear_search([1, 2, 3], 4)) # False