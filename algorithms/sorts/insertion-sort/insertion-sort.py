def insertion_sort(arr):
    result_arr = arr.copy()

    for i in range(1, len(result_arr)):
        current_element = result_arr[i]
        j = i - 1

        while j >= 0 and result_arr[j] > current_element:
            result_arr[j + 1] = result_arr[j]
            j -= 1

        result_arr[j + 1] = current_element

    return result_arr


print(insertion_sort([5, 2, 3, 4, 1])); # [1, 2, 3, 4, 5]