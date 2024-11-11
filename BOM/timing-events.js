//JS timing events method
//setTimeOut ; setInterval()

// setTimeout(() => {
//     console.log("object");

// }, 3000);

// setTimeout(display,2000)
// function display(){
//     console.log('shimul');
// }
const savebutton = document.querySelector(".save-btn");
const message = document.querySelector(".message");
savebutton.addEventListener("click", displaycount);
function displaycount() {
  let count = 1;
  message.textContent = count;
  setInterval(() => {
    count++;
    message.textContent = count;
  }, 2000);
}

// savebutton.addEventListener("click", userbutton);
// function userbutton() {
//   message.textContent = "user registration complete";
//   setTimeout(() => {
//     message.textContent = "";
//   },2000);
// }
