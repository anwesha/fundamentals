/*
find the nth element from last in a single linked list
http://www.programmerinterview.com/index.php/data-structures/find-nth-to-last-element-in-a-linked-list/
*/

var linkedList = function () {
    this._head = null;
}

linkedList.prototype = {
    add: function (value) {
        var node = {
            data: value,
            next: null
        };
        var cur = this._head;

        if (!cur) {
            this._head = node;
            return;
        }

        while(cur.next !== null) {
            cur = cur.next;
        }

        cur.next = node;
    },

    traverse: function () {
        var cur = this._head;
        var str = "";

        while (cur !== null) {
            str += cur.data + " ";
            cur = cur.next;
        }

        return str;
    }
};

var buildSll =  function () {
    var sll = new linkedList();
    sll.add("1");
    sll.add("2");
    sll.add("3");
    sll.add("4");
    sll.add("5");
    sll.add("6");
    sll.add("7");
    sll.add("8");

    console.log(sll.traverse());
    return sll;
};

var sll = buildSll();


// METHOD 1: iteration
/*
- we have 2 pointers p1 and p2.
- p1 starts pointing to head
- p2 start pointing to n - 1 from p1
- then we keep advancing p1 and p2 by one till we reach p2.next = null
- which would mean p2 now points to the last node
- and since the distance between p1 and p2 is n - 1 nodes, p1 points to nth element from the end

IMPORTANT: ALWAYS ASSUME THAT THE LIST IS MINIMUM N ITEMS LONG
*/

function findNthToLastIteration (sll, n) {
    var p1 = sll._head;
    var p2 = sll._head;

    // advance p2 n - 1 times
    for(var i=0; i<n-1; i++) {
        p2 = p2.next;
    }

    while(p2.next !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1.data;
};

console.log("Find 3rd node from end with iteration");
console.log(findNthToLastIteration(sll, 3));


var i = 0;
function findNthToLastRecursion (cur, n) {
    if (cur === null) {
        return;
    }

    findNthToLastRecursion(cur.next, n);

    i++;
    if(i === n) {
        console.log(cur.data);
    }
}

console.log("\nFind 3rd node from end with recursion");
findNthToLastRecursion(sll._head, 3);
