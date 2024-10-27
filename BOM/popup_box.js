// popup boxes-> alert,confirm,prompt

// alert("popup boxes");

// var value = confirm("are you want to delete?");
// if(value)
// {
//     console.log("deleted");
// }
// else{
//     console.log("not deleted");
// }

var h1 = document.createElement("h1");
var text;
var inputName=prompt("Enter your name");
if(inputName == null || inputName =="") {
    text="no data found";
}
else{
    text=inputName;
}
var textnote = document.createTextNode(text);
h1.appendChild(textnote);
document.body.appendChild(h1);