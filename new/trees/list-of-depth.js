var createTestBst = require('./bst.js').createTestBst;
var bst = createTestBst();
var SLL = require('.././ll-single.js');

function countNodes(node, listArr, level, llArr) {
    if (node == null) {
        return;
    }

    if (!listArr[level]) {
        listArr[level] = [];
    }

    if (!llArr[level]) {
        llArr[level] = new SLL();
    }

    listArr[level].push(node.data);
    llArr[level].insert(node.data);
    countNodes(node.left, listArr, level + 1, llArr);
    countNodes(node.right, listArr, level + 1, llArr);
}

/*

     10
  8      13
7   9  12    14

*/

bst.insert(9);

(function() {
    var listArr = [];
    var llArr = []
    countNodes(bst.root, listArr, 0, llArr);
    console.log(listArr);

    llArr.forEach(function (ll) {
        ll.traverse();
    });
})();
