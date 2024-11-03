// var message = function () {
//   console.log("this is anonymous function");
// };
// message();

//passing anonymous function as argument

function display(myfunc) {
  return myfunc();
}
console.log(
  display(function () {
    let a = "shimul khan";
    return a;
  })
);

// returning anonymous function
function display2(a) {
  return function (b) {
    return a + b;
  };
}

let ano = display2(10);
console.log(ano(20));



