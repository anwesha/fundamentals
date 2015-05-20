function bubbleSort(a) {
    var len = a.length;
    var swapped = true;
    var i;
    var j;
    var temp;

    if (!a || !len) {
        return "please provide valid array";
    }

    for(i=0; i< len; i++) {
        if (swapped) {
            swapped = false;
            for(j=0; j<len-1; j++) {

                if (a[j] > a[j+1]) {
                    temp = a[j];
                    a[j] = a[j+1];
                    a[j+1] = temp;
                    swapped = true;
                }
            }
        }
    }

    return a;
}

var a = [1,22,0,432,12,10];
console.log(bubbleSort(a));
