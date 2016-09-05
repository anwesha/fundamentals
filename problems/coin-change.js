function coinChange(sum) {
    var denominations = [1,0.5,0.25,0.1,0.05, 0.01];
    var remains = sum;
    var tempSum;
    var times;
    var ans = {};

    denominations.forEach(function (denom) {
        times = 0;
        while((denom * (times+1)) < remains ) {
            times++;
        }

        if (times > 0) {
            ans[denom] = times;
            remains -= (denom * times);
        }
    });

}

coinChange(2.83);
