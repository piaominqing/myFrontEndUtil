//  快速排序(分区)
function quickSort(arr, l, r) {
    if (l >= r) return;
    let x = l, y = r, base = arr[l];
    while (x < y) {
        while (x < y && arr[y] >= base) y--;
        if (x < y) arr[x++] = arr[y];
        while (x < y && arr[x] < base) x++;
        if (x < y) arr[y--] = arr[x];
    }
    arr[x] = base;
    quickSort(arr, l, x - 1);
    quickSort(arr, x + 1, r)
    return;
}

// 根据c++ stl 库 优化排序
// 快排+堆排（使其趋于有序） -> 插入排序(区间排序使用插入排序)

// 左递归优化
function quickSortV2(arr, l, r) {
    while (l < r) {
        let x = l, y = r, base = arr[l];
        while (x < y) {
            while (x < y && arr[y] >= base) y--;
            if (x < y) arr[x++] = arr[y];
            while (x < y && arr[x] < base) x++;
            if (x < y) arr[y--] = arr[x];
        }
        arr[x] = base;
        quickSortV2(arr, x + 1, r);
        r = x - 1;
    }

    return;
}

// 三点优化（base 选择 三个点中间值为中间的值）


// 小规模快排