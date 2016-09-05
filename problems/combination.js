function combination (n, k) {
    var remains = n;
    var ans = [];
    var arr = [];

    for(var i=9; i>=1; i--) {
        arr     = [];
        remains = n;

        if (i <= n) {
            arr.push(i);
            remains -= i;

            for(var j=9; j>=1; j--) {
                if (j <= remains) {
                    remains -= j;
                    arr.push(j);
                }
            }

            if (remains === 0) {
                ans.push(arr);
            }
        }
    }

    return ans;
}

console.log(combination(9, 3));
