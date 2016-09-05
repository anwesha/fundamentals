/*
You have an array of integers, and for each index you want to find the product of every integer
except the integer at that index.

Write a function get_products_of_all_ints_except_at_index() that takes an array of integers
and returns an array of the products.

*/

// METHOD 1 : DONT USE DIVISION

/*
	Easy to do a n^2 approach. But find one with O(n) approach O(n) space

	Concept: greedy approach where we can reuse calc we have done before.
	So product_at_index_without_that_index = product of items before that index * product of items after that index.

	algo :

	2 passes of input_array;

	initialize :: product = 1; // because product before i=0 === 1, so that product before i=1 can be 1*arr[1];

	// 1st pass : calculate the product before current index

	product = 1;
	prod_before = [length of input array];

	for i=0 to len-1;
		prod_before[i] = product;
		product = product * arr[i];

	// 2nd pass : calculate the product after current index
	// so we'll do same approach as above but go from last to first
	// also to save space we'll save final product in prod_before array

	product = 1;

	for i=len-1 to 0
		prod_before[i] = prod_before[i] * product;
		product = product * arr[i];

	return prod_before

	// COMPLEXITY
	Time : we are looping thru array twice so n times + n times = 2n times ~ O(n)
	Space: using one extra array of size n ~ O(n)
*/

function findProdGreedy (arr) {
	var product = 1;
	var final_prod_arr = [];

	for (var i=0;i<arr.length;i++) {
		final_prod_arr[i] = product;
		product *= arr[i];
	}

	product = 1;

	for(i=arr.length-1; i>=0; i--) {
		final_prod_arr[i] *= product;
		product *= arr[i];
	}

	console.log(final_prod_arr);
}


// METHOD 2 - if division is allowed no 0

function findProdDiv (arr) {
	var allProduct = 1;
	var productArr = [];

	// find the product of entire array
	for (var i=0; i<arr.length; i++) {
		allProduct *= arr[i];
	}

	for (var i=0; i<arr.length; i++) {
		productArr.push(allProduct/arr[i]);
	}

	console.log(productArr);

}


var testArr = [1,2,3,4];

findProdGreedy(testArr);
findProdDiv(testArr);
