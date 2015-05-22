// Basic concept F(n) = F(n-2) + F(n-1);

// print fibonacci series
function fibonacci(max) {
    var p1 = 0;
    var p2 = 1;
    var p3;
    var str = p1 + " " + p2;

    for (var i=2; i<=(max || 10); i++ ) {
        p3 = p1 + p2;
        str += " " + p3;
        p1 = p2;
        p2 = p3;
    }

    return str;
}

console.log('Fibonacci with loop');
console.log(fibonacci());


// get the nth fibonacci number
function fibRec(num) {
    if (num < 2) {
        return 1;
    }
    console.log('hi');
    return fibRec(num - 2) + fibRec(num -1);
}

console.log('\nFibonacci nth term with recursion');
console.log(fibRec(7));

// print fibonacci series
var test = function() {
    var str = "";
    for(var i=0; i<10; i++) {
        str += fibRec(i) + " ";
    }

    console.log('\nFibonacci with loop and recursion');
    console.log(str);
}();


// modified better fibonacci
function fibDriver(num) {
    return num === 0 ? 0 : fibo(num, 0, 1);
}

function fibo(num, p1, p2) {
    console.log('hi');
    return num < 2 ? p2 : fibo(num - 1, p2, p1 + p2);
}


console.log('\nFibonacci nth term with recursion modified');
console.log(fibDriver(10));
