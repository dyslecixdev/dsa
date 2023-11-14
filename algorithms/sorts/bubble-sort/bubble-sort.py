def bubble_sort(arr): 
    result_arr = arr.copy()

    for i in range(len(result_arr) - 1):
        for j in range(len(result_arr) - 1 - i):
            if result_arr[j] > result_arr[j + 1]:
                temp = result_arr[j]
                result_arr[j] = result_arr[j + 1]
                result_arr[j + 1] = temp

    return result_arr

print(bubble_sort([3, 2, 1])) # [1, 2, 3]
print(bubble_sort([4, 2, 5, 3, 1])) # [1, 2, 3, 4, 5]
