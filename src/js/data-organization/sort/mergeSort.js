function mergeSort(arr, l, r){
    if(l >= r) return;
    const mid = (l +  r) >> 1;
    mergeSort(arr, l,  mid);
    mergeSort(arr, mid + 1, r);
    let k = 0, p1 = l, p2 = mid + 1;
    const temp =[]
    while(p1 <= mid || p2 <=r){
        if(p2 > r || (p1 <= mid && arr[p1] <= arr[p2])) {
            temp[k++] = arr[p1++];
        } else {
            temp[k++] = arr[p2++];
        }
    }
    for(let i = l; i <= r; i++){
        arr[i] = temp[i - l];
    }
    return;
}