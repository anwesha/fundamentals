var str = "";

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



function addList(node1, node2, resultSLL, carry) {
    if (!node1 && !node2) {
        return null;
    }

    var value = carry;
    if (node1) {
        value += node1.data;
    }

    if (node2) {
        value += node2.data;
    }

    var sumDigit = value % 10;

    resultSLL.add(sumDigit);
    addList((node1 && node1.next), (node2 && node2.next), resultSLL, (value >= 10 ? 1 : 0));
}


var sll1      = new linkedList();
var sll2      = new linkedList();
var resultSLL = new linkedList();

sll1.add(1); sll1.add(5); sll1.add(7);
sll2.add(8); sll2.add(5);

addList(sll1._head, sll2._head, resultSLL, 0);

console.log(resultSLL.traverse());
