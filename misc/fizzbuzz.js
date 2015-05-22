function fizzBuzz() {
    var str;

    for(var i=1; i<=20; i++) {
        str = "";
        if (i%3 === 0) {
            str = "Fizz";
        }

        if (i%5=== 0) {
            str += "Buzz";
        }

        console.log(i + " : " + (str || i));
    }
};

fizzBuzz();
