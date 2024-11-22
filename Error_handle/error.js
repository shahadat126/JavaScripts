//error handling -> try, catch,finally,throw
//try ... catch handle run time errors
//Error object
//the finally statement -> execute code, after try and catch

//

document.querySelector("#checkbutton").addEventListener("click", function () {
  var num = document.querySelector("#numTextId").value;
  try {
    if (num < 5) {
      throw "input is low";
    } else if (num > 10) {
      throw "input is high";
    }
  } catch (err) {
    console.log(err);
  }
});
