// Find absolute difference of diagonals
(function () {
	var matrix = [
	    [1,2,3],
	    [4,5,6],
	    [7,8,10]
	];

	var rows = matrix.length;
	var diag1 = 0;
	var diag2 = 0;

	for(var r=0; r<rows; r++) {
	   diag1 += matrix[r][r];
	   diag2 += matrix[r][rows - 1 - r];
	};

	console.log(Math.abs(diag1 - diag2));
})();


// Staircase
(function (height) {
	var temp;
	var str = "";
	for(var i=1;i<=height;i++) {
		temp = i;
		while(temp) {
			str += "*";
			temp--;
		}
		console.log(str);
		str = "";
	}
})(5);