//1st system
// document.querySelectorAll(".mybutton")[0].addEventListener("click",mul_function);
// function mul_function() {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML= text + "is clicked.";
// }

// document.querySelectorAll(".mybutton")[1].addEventListener("click",mul_function);
// function mul_function() {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML= text + "is clicked.";
// }

// document.querySelectorAll(".mybutton")[2].addEventListener("click",mul_function);
// function mul_function() {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML= text + "is clicked.";
// }

//2nd system

// for (var i = 0; i < 3; i++) {
//     document
//       .querySelectorAll(".mybutton")
//       [i].addEventListener("click", mul_function);
//     function mul_function() {
//       var text = this.innerHTML;
//       document.querySelector("h1").innerHTML = text + "is clicked.";
//     }
//   }

//3rd system

var len = document.querySelectorAll(".mybutton").length;
for (var i = 0; i < len; i++) {
  document
    .querySelectorAll(".mybutton")
    [i].addEventListener("click", mul_function);
  function mul_function() {
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + "is clicked."
  }
}
