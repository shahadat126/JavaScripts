//using map create a new array
var numbers = [10, 20, 30, 40, 55];
var squrnumbers = numbers.map(function (x) {
  return x * x;
});
console.log(squrnumbers);
console.log(numbers);

//find out a number greater than 10 using filter

var number = [10, 20, 30, 40, 55];
var newnumber = number.filter(function (x) {
  return x >10;
});
console.log(newnumber);
console.log(number);