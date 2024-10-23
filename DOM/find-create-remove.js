var link = document.getElementsByTagName("a")[0];
link.innerHTML = "Google chrome";
link.style.color = "green";
link.style.fontFamily = "Algerian";
link.href = "http://sk124.pythonanywhere.com";

//create element
 var my_var =  document.createElement("h1");
 var text = document.createTextNode("this is heading 2");


 var my_div = document.querySelector(".my-div");
 my_div.appendChild(my_var); 
 my_var.appendChild(text);

var heading1 = document.querySelectorAll("h1")[0];
my_div.removeChild(heading1);

//creating new element after or before

var my_var1 =  document.createElement("h1");
 var text1 = document.createTextNode("add before heading 2");
  
 my_var1.appendChild(text1);
 my_div.insertBefore(my_var1,my_var);

