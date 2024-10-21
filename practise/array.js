var names = new Array();
names[0]="sabil";
names[1]="nabil";
names[2]="kabil";
names[3]="habil";
names[4]="tabil"

console.log(names[2]);
// console.log(names.length);

var f_name= ["sabil","kabil","nabil","habil","ahad"];

console.log(f_name.length);
console.log(f_name[4]);
f_name.push("shimul");
console.log(f_name.length);
f_name.pop();
console.log(f_name);

//concatination array
var l_name =["khan","sikdar","sheikh","hossain"];
var full_name = f_name.concat(l_name);
console.log(full_name);


