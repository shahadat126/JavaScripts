// var message = function () {
//   console.log("this is anonymous function");
// };
// message();

//passing anonymous function as argument

function display(myfunc) {
  return myfunc;
}
console.log(
  display(function () {
    return "argument";
  })
);
