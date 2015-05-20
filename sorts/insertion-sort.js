function insertionSort (a) {
    var len = a.length;
    var key;
    var temp;

    for(var i=1; i<len; i++) {
        key = a[i]
        for(var j=i-1; j>=0 && a[j] > key; j--) {
            a[j+1] = a[j];
        }
        a[j+1] = key;
    }

    return a;
}

var arr = [22,1,360,361,2];
console.log(insertionSort(arr));
