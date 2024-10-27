//BOM(Browser object model)
//window object
//location object
// console.log(window.document);
// console.log(window.location);
//href
// console.log(location.href);
//protocol
// console.log("protocol= " + location.protocol);
//hostname

// console.log("hostname= " + location.hostname);
// port
// console.log("port= " + location.port);
//pathname
// console.log("pathname= " + location.pathname);

var location_div = document.querySelector(".location-div");
var p1 = location_div.children[0];
p1.textContent = location.href;

var p1 = location_div.children[1];
p1.textContent = location.protocol;

var p1 = location_div.children[2];
p1.textContent = location.hostname;

var p1 = location_div.children[3];
p1.textContent = location.port;

var p1 = location_div.children[4];
p1.textContent = location.pathname;

var visit = document.querySelector(".visit-button");
visit.addEventListener("click", mywebsite);
function mywebsite() {
    location.assign("https://sk124.pythonanywhere.com");
}
