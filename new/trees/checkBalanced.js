var createTestBst = require('./bst.js').createTestBst;
var bst = createTestBst();
const ERR = Number.MIN_VALUE;

function checkHeight(node) {
    if (node == null) {
        return -1;
    }

    var leftHeight = checkHeight(node.left);
    if (leftHeight == ERR) {
        return ERR;
    }

    var rightHeight = checkHeight(node.right);
    if (rightHeight == ERR) {
        return ERR;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return ERR;
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
};

function checkBalanced() {
    return checkHeight(bst.root) !== ERR;
}

console.log('is tree balanced ? ' + checkBalanced());

console.log('\ninserting 6 to make the tree unbalanced');
bst.insert(6);
console.log('is tree balanced ? ' + checkBalanced());