var createTestBst = require('./bst.js').createTestBst;
var bst = createTestBst();

// 1st method : inorder traverse and check if prev.data < cur.data
// FLAW - prev is global variable
function isValidBST1(cur) {
    if (cur == null) {
        return true;
    }

    if (!isValidBST1(cur.left)) { return false; }

    if (prev && prev.data > cur.data) { return false; }
    prev = cur;

    if (!isValidBST1(cur.right)) { return false; }

    return true;
}

//console.log('is valid bst ' + isValidBST1(bst.root));

// corrupt bst
//bst.root.left.data = 60;
var prev;
//console.log('\n\nis valid bst ' + isValidBST1(bst.root));


// 2nd method - min, max method
// when going left update max
// when going right update min
// when valid ? if (n.data < max && n.data >= min)

function isValidBST(n, min, max) {
    if (n == null) { return true; }

    if (n.data <= max && n.data > min) {
        return isValidBST(n.left, min, n.data) && isValidBST(n.right, n.data, max);
    } else {
        return false;
    }
};

var ret = isValidBST(bst.root, Number.MIN_VALUE, Number.MAX_VALUE);
console.log('is valid bst ' + ret);


// corrupt bst
bst.root.left.data = 60;
var ret = isValidBST(bst.root, Number.MIN_VALUE, Number.MAX_VALUE);
console.log('is valid bst ' + ret);