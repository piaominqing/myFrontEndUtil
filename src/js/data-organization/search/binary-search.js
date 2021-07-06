// 二分查找
var binarySearch = function(arr, x){
    let head = 0;
    let tail = arr.length - 1;
    let mid = head + ((tail - head) >> 1);
    while(head < tail){
        mid = head + ((tail - head) >> 1);
        if(arr[mid] === x) return mid;
        if(arr[mid] < x) {head = mid + 1;}
        else{ tail = mid - 1;}
    }
    return -1;
}

//二分查找 优化
var binarySearch = function(arr, x){
    let head = 0;
    let tail = arr.length - 1;
    let mid = head + ((tail - head) >> 1);
    // 范围大于 3 个的时候 二分查找
    while(tail - head > 3){
        mid = head + ((tail - head) >> 1);
        if(arr[mid] === x) return mid;
        if(arr[mid] < x) {head = mid + 1;}
        else{ tail = mid - 1;}
    }
    // 范围小于 3 个的时候 顺序查找
    for(let i= head; i < tail; i++){
        if(arr[i] === x) return i; 
    }
    return -1;
}

// 二分模型 [0,0,0,0,1,1,1,1,1,1,1] 01模型
var binarySearch_01 = function(arr, x){
    let head = 0;
    let tail = arr.length - 1;
    let mid = head + ((tail - head) >> 1);
    while(head < tail){
        mid = head + ((tail - head) >> 1);
        if(arr[mid] < x) {head = mid + 1;}
        else { tail = mid;}
    }
    return head;
}

/**
 * arr[x] -> y 下标 -> 值 存储资源  空间
 * f(x) -> y 参数-> 值 计算资源 时间
 * 时间与空间之间的互换（本质上都是映射）
 */