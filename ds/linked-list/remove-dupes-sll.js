/*
1) Write code to remove duplicates from an unsorted linked list.
2) How would you solve this problem if a temporary buffer is not allowed?
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

var removeDupNodes = {
    buildSll: function () {
        var sll = new linkedList();
        sll.add("a");
        sll.add("b");
        sll.add("b");
        sll.add("a");
        sll.add("a");
        sll.add("c");
        sll.add("c");
        sll.add("b");

        console.log(sll.traverse());
        return sll;
    },

    bufferAllowed : function () {
        var dataMap = {};
        var prev = null;
        var sll  = this.buildSll();
        var cur  = sll._head;

        while (cur !== null) {
            // if already present in the map delete the node
            if (dataMap[cur.data]) {
                prev.next = cur.next;
            } else {
                // keep the node and add the data to the dataMap
                dataMap[cur.data] = true;
                prev = cur;
            }

            cur = cur.next;
        }

        console.log("## Dupes removed : with buffer");
        console.log(sll.traverse());
    },

    bufferNotAllowed : function () {
        var sll = this.buildSll();
        var prev = sll._head;
        var cur  = prev && prev.next;
        var runner;

        // concept :
        // current: goes from 2nd to last item
        // runner: goes from head to current
        // - the moment we find current = runner, we will delete current
        //   update the pointers and break. Why because runnner and current will
        //   only be equal once per loop coz if there was a dupe before it should
        //   have been removed
        // - in case no dupes, and current === runner we need to update pointers
        while (cur !== null) {
            runner = sll._head;

            while(runner !== cur) {
                if (cur.data === runner.data) {
                    // delete current
                    prev.next = cur.next;
                    cur = cur.next;
                    break;
                }
                runner = runner.next;
            }

            if (runner === cur) {
                prev = cur;
                cur  = cur.next;
            }
        }

        console.log("## Dupes removed : without buffer");
        console.log(sll.traverse());
    }
};

removeDupNodes.bufferAllowed();
console.log('------------------------');
removeDupNodes.bufferNotAllowed();
