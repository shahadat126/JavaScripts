function display1() {
  console.log("i am shimul");
}

//arrow function structure
const display2 = () => {
  console.log("i am khan");
};

display1();
display2();

//traditional function return value from function

function message() {
  return "i am message";
}
console.log(message());

//arrow function return value form function without return keyword
const message2 = () => "i am message 2";

console.log(message2());

//traditional function pass parameter

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(10, 20));

//arrow function pass parameter
const add2 = (num1, num2) => num1 + num2;

console.log(add2(50, 50));
