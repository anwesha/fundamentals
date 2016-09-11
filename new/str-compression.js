// compression - aabbbccc -> a2b3c3

(function compression (str) {
    var result = '';
    var count = 1;
    for(var i=0; i<str.length; i++) {

        if(count == 1) {
            result += str[i];
        }

        if (str[i] != str[i+1]) {
            result += count;
            count = 1;
        } else {
            count++;
        }
    }

    console.log(result);
})('aabbbccccd');