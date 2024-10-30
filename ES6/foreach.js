//for vs foreach

// var numbers = [10, 20, 30, 40, 55];
// for (var x = 0; x < numbers.length; x++) {
//     console.log(numbers[x]);
// }

//anonymous function
// var numbers = [10, 20, 30, 40, 55];
// numbers.forEach(function(x) {
//     console.log(x);
// })

//create nea array by push previous array
// var numbers = [10, 20, 30, 40, 55];
// var sqrnumbers =[];
// numbers.forEach(function(x){
//     sqrnumbers.push(x*x);
// })
// console.log(sqrnumbers);

var numbers = [10, 20, 30, 40, 55];
console.log(numbers);
numbers.forEach(function (x, index, arr) {
  arr[index] = x + 5;
});
console.log(numbers);//update the array index value
