var createTestBst = require('./bst.js').createTestBst;
var bst = createTestBst();
//var SLL = require('././ll-single.js');

function countNodes(node, countArr, level, allnodes) {
    if (node == null) {
        return;
    }

    if (!countArr[level]) {
        countArr[level] = 0;
    }

    allnodes.count++;

    countArr[level] += 1;
    countNodes(node.left, countArr, level + 1, allnodes);
    countNodes(node.right, countArr, level + 1, allnodes);
}

/*

     10
  8      13
7   9  12    14

*/

bst.insert(9);

(function() {
    var countArr = [];
    var allnodes = {count: 0};
    countNodes(bst.root, countArr, 0, allnodes);
    console.log(countArr);
    console.log(allnodes);
})();

