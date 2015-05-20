function mergeSort(arr) {
    var len   = arr.length;

    if (len < 2) {
        return arr;
    }

    var mid   = Math.floor(len * 0.5);
    var left  = arr.slice(0, mid);
    var right = arr.slice(mid, len);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var merged = [];

    while(left.length > 0 && right.length > 0) {
        merged.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    return merged.concat(left.length > 0 ? left : right);;
}

var arr = [22,13,1,234,5,123,22];
console.log(mergeSort(arr));
