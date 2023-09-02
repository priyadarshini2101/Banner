
// let recursiveFunction = function (arr, x, start, end) {
	
// 	// Base Condition
// 	if (start > end) return false;

// 	// Find the middle index
// 	let mid=Math.floor((start + end)/2);

// 	// Compare mid with given key x
// 	if (arr[mid]===x) return true;
		
// 	// If element at mid is greater than x,
// 	// search in the left half of mid
// 	if(arr[mid] > x)
// 		return recursiveFunction(arr, x, start, mid-1);
// 	else

// 		// If element at mid is smaller than x,
// 		// search in the right half of mid
// 		return recursiveFunction(arr, x, mid+1, end);
// }

// // Driver code
// let arr = [1, 3, 5, 7, 8, 9];
// let x = 5;

// if (recursiveFunction(arr, x, 0, arr.length-1))
// 	console.log("Element found!");
// else console.log("Element not found!");



								
var arr = [10,20,30,40,50]
var low = 0;
var high = arr.length-1;
var key = 80;

var mid = ((low + high)/2)
if(arr[mid] === key){
    console.log(`Key found at index ${mid}`)
}

else if(arr[mid] > key){
    key = mid - 1
    console.log(`Key found at index ${key}`)
}

else if(arr[mid] < key){
    key = mid + 1
    console.log(`Key found at index ${key}`)
}
else{
    console.log('Key not found')
}
