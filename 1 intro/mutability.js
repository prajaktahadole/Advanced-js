//1. Create an array and use .splice() and .slice() built in array methods on them. Explain the difference in terms of Immutability in comments.

 

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr1.splice(2));
console.log(arr1);

// As Splice is a mutable function as it modifies the original array.
// Splice requires (index, and from that index how many elements to be removed)
// splice = eg = (arr1.splice(0,2)) = referring to above array The output will be looking like = [3, 4, 5, 6, 7, 8];
// in splice those will be removed which gives i.e. = [1,2] = select 0 index (1) & from 0 index remove 2 elements present in that array (1, 2);
// The actual Modified Array = will be looking like [1,2];
// slice return the output in form of Array.

//  - IMPORTANT -
// _____ The splice method returns the removed items in form of array.-----with modifying an actual array.
// _____ The slice method returns the selected items in form of an array.--- without modifying actual array.
//


var arr2 = [10, 20, 30, 40, 90, 80, 70, 60, 50];

console.log(arr2.slice(2))
console.log(arr2);

// slice will select the index and create the give the output from that selected index.
// slice will not modify the arr2 as shown in the above output.
// slice can also used to select the value from back of the array .
// Slice inbuilt function is immutable
// if you console the same array it will give the whole array as output which considered to be the immutable thing.

