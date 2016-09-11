var createTestBst = require('./bst.js').createTestBst;
var bst = createTestBst();

function getHeight(node) {
    // base case
    if (node == null) {
        return -1;
    }

    var leftHt = getHeight(node.left);
    var rightHt = getHeight(node.right);

    return Math.max(leftHt, rightHt) + 1;
};

var h = getHeight(bst.root);
console.log('height = ' + h);

bst.remove(13);bst.remove(12);bst.remove(14);bst.remove(8);
console.log(getHeight(bst.root));