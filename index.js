// 排序算法
function ArrayList() {
    let arr = [];
    // 辅助函数，交换值
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        // [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    // 归并排序辅助函数
    function mergeSortRec(arr) {
        let len = arr.length;
        if (len === 1) {
            return arr;
        }
        let mid = Math.floor(len/2),
            leftArr = arr.slice(0, mid),
            rightArr = arr.slice(mid, len);
        return merge(mergeSortRec(leftArr), mergeSortRec(rightArr));
    }
    // 归并排序，执行合并操作
    function merge(leftArr, rightArr) {
        let result = [],
            il = 0,
            ir = 0;
        while (il < leftArr.length && ir < rightArr.length) {
            if (leftArr[il] < rightArr[ir]) {
                result.push(leftArr[il]);
                il++;
            } else {
                result.push(rightArr[ir]);
                ir++;
            }
        }

        while (il < leftArr.length) {
            result.push(leftArr[il]);
            il++;
        }
        while (ir < rightArr.length) {
            result.push(rightArr[ir]);
            ir++;
        }
        return result;
    }
    // 快速排序的辅助函数
    function quick() {
        
    }
    this.insert = function(item) {
        arr.push(item);
    }
    this.toString = function() {
        console.log(arr.join('-'));
    }
    // 冒泡排序 n^2
    this.bubbleSort = function() {
        let len = arr.length;
        for(let i = 0; i < len; i++) {
            for(let j = 0; j < len - 1 -i; j++) {
                if (arr[j] > arr[j+1]) {
                    swap(arr, j, j+1);
                }
            }
        }
    }
    // 选择排序 n^2
    this.selectSort = function() {
        let len = arr.length,
            indexMin;
        for(let i = 0; i < len -1; i++) {
            indexMin = i;
            for(let j = i + 1; j < len; j++) {
                if (arr[indexMin] > arr[j]) {
                    indexMin = j;
                }
            }
            if (indexMin !== i) {
                swap(arr, i, indexMin);
            }
        }
    }
    // 插入排序 n^2
    this.insertSort = function() {
        let len = arr.length,
            j,
            temp;
        for(let i = 1; i < len; i++) {
            temp = arr[i];
            j = i;
            while(j > 0 && arr[j-1] > temp) {   // 查找插入点
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = temp;
        }
    }
    // 归并排序 nlogn
    this.mergeSort = function() {
        arr = mergeSortRec(arr);
    }
    // 快速排序 nlogn
    this.quickSort = function() {
        quick(arr, 0, arr.length - 1);
    }
}

function createNonSortedArray(size) { //{6}
    var array = new ArrayList();
    for (var i = size; i> 0; i--){
        array.insert(i);
    }
    return array;
}

let arr = createNonSortedArray(8);
arr.toString();
// arr.bubbleSort();
// arr.selectSort();
// arr.insertSort();
arr.mergeSort();
arr.toString();
