// powerset iteration with binary

(function powerset (arr) {
	var bStr;
	var powersetArr = [""];
	var powersetArrLen = Math.pow(2, arr.length) - 1;

	for (var i=0; i<powersetArrLen; i++) {
		bStr = (i+1).toString(2);
		subsetArr = [];
		bStr.split('').reverse().forEach(function (num, index) {
			if (num == 1) {
				subsetArr.push(arr[index]);
			}
		});

		powersetArr.push(subsetArr.join(""));

	}

	//console.log(powersetArr);
})(['a', 'b', 'c']);


// powerset iteration no binary
(function powerset (arr) {
	var result = [[]];
	var len;
	for(var i=0; i<arr.length; i++) {
		len = result.length;
		for (var j=0; j<len; j++) {
			result.push(result[j].concat(arr[i]));
		}
	}

	//console.log(result);
})(['a', 'b', 'c']);


(function getCombinations(chars) {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
  f('', chars);
  console.log(result);
})(['a', 'b', 'c']);
