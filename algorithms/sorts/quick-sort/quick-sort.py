def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[0]
    left = [x for x in arr[1:] if x < pivot]
    right = [x for x in arr[1:] if x >= pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)

print(quick_sort([3, 6, 8, 10, 1, 2, 1])) # [1, 1, 2, 3, 6, 8, 10]