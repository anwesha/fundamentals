function bsearch(arr, target, start, end) {
    var mid;
    if (typeof start !== 'number') {
        start = 0;
    }
    
    if (typeof end !== 'number') {
        end = arr.length - 1;
    }    
    
    mid = Math.floor(end - start/2);
    
    if (start < end) {
        if (arr[mid] === target) {
        	return arr[mid] + " found";
    	} else if (target < arr[mid] ) {
            return bsearch(arr, target, start, mid - 1);
        } else {
            return bsearch(arr, target, mid + 1, end);            
        }            
    } else {
        return target + " not found";
    }
};


var ar = [22,33,55,66];
console.log(bsearch(ar,33));
console.log(bsearch(ar,88));

// O(ln n) ~ h (height of the tree);

// because in each step we cut the number of options to search from by half
// so it becomes 
// ~ n * 1/2 * 1/2 ... 
// ~ n * (1/2)^h = 1
// ~ 2^h = n
// ~ log n/ log 2 = h
// ~ lg n = h

// now only for perfectly balanced tree do we have lg n but otherwise its order of lg n ie. O(lg n);