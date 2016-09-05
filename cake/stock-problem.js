/*

I have an array stock_prices_yesterday where:

- The indices are the time in minutes past trade opening time, which was 9:30am local time.
- The values are the price in dollars of Apple stock at that time.
- For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500.

Write an efficient algorithm for computing the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).


GOTCHAS

It is not sufficient to simply take the difference between the highest price and the lowest price, 
because the highest price may come before the lowest price. You must buy before you sell.

What if the stock value goes down all day? In that case, the best profit will be negative.
You can do this in O(n) time and O(1) space!

*/

/*
================================================================================================
	WHAT IS GREEDY APPROACH

	A greedy algorithm iterates through the problem space taking the optimal solution "so far," 
	until it reaches the end.

	The greedy approach is only optimal if the problem has "optimal substructure," 
	which means stitching together optimal solutions to subproblems yields an optimal solution.
================================================================================================
*/

var testArrs = [
	[100, 20, 30, 200],
	[100, 50, 30, 20]
];

// METHOD 1 - O(n^2) approach (Time) O(1) space
// j for every i goes from n - 1, n - 3, ... 1 i.e 1 + 2 + .... n -1 ~~ (n)^2

/*
	Concept : naive approach
	We know we have to buy before we sell,
	so in our inner for loop we could just look at every price after the price in our outer for loop.
*/

function findMaxN2(arr) {
	var maxProfit = null;
	var diff;

	for (var i=0; i<arr.length-1; i++) {
		for(var j=i+1; j<arr.length; j++) {
			diff = arr[j] - arr[i];
			maxProfit = maxProfit === null ? diff : Math.max(diff, maxProfit);
		}
	}

	console.log('max profit is : ' + maxProfit);
}


// Method 2 - O(n) Time O(1) space
/*
	Concept : Greedy approach
	- For each step we will remember the minimum so far. (just before the current element);
	- Then we will calculate how much profit we can make by selling at current_price and buying at minimum
	  ( remember the minimum is the value of the stock price BEFORE the current price so we are ok)
	- now we will calculate max_profit = max(max_profit, potential_profit);
	- now update the minimum : REMEMBER TO ALWAYS USE min value first AND THEN UPDATE 

	algo :
	initialize : min_so_far = arr[0]; max_profit = arr[1] - arr[0];

	// note : now REMEMBER to start from index = 1 because we have already considered
	// the first item as min, and we can only compare later to before

	for index = 1 - arr.length
		current = arr[index];
		potential_profit = current - min_so_far;

		max_profit = max(max_profit, potential_profit);

		min_so_far = min(min_so_far, current);

	return max_profit;


	// NOTE :
	we loop through items just once, so we O(n);
	also we return negative profit if stocks go down all day
*/
function findMaxN (arr) {
	var min_so_far = arr[0];
	var max_profit = arr[1] - arr[0];

	for(var i=1; i<arr.length; i++) {
		potential_profit = arr[i] - min_so_far;
		max_profit = Math.max(max_profit, potential_profit);

		min_so_far = Math.min(min_so_far, arr[i]);
	}

	console.log('max profit is : ' + max_profit);
}



// RUN TESTS
testArrs.forEach(function (arr) {

	if (arr.length < 2) {
		return 'we need atleast two elements to buy and sell';
	}

	console.log('\ninput array is : ' + arr);

	console.log('\ncalling efficient function ');
	findMaxN(arr);


	console.log('\ncalling n^2 function ');
	findMaxN2(arr);
});
