//shift ,unshift,sort,reverse

//shift is opposite of pop
var names = ["khan", "sikdar", "sheikh", "hossain"];
// names.shift();
// console.log(names);

//unshift is opposite of push
var f_names = ["khan", "sikdar", "sheikh", "hossain"];
f_names.unshift("mia");
// console.log(f_names);

//adding elemnets using splice(starnumber for add,delete-after-add,additems)
listed_item = [
  "khan",
  "sikdar",
  "sheikh",
  "hossain",
  "mia",
  "sabbir",
  "shihab",
];
console.log(listed_item);
listed_item.splice(4,2,"shahadat");
console.log(listed_item);
listed_item.splice(2,2,"shahadat1");
console.log(listed_item);

//removing elements using splice(start-numfor-delete,deletenum)

listed_item.splice(2,1);
console.log(listed_item);
console.log(listed_item.length);

//slice(start index, stop beforeindexnum)
var neu_listed_item = listed_item.slice(0,2);
console.log(neu_listed_item);
console.log(listed_item);

//sort
var new_array =["sabil","ahad","majed","rupok","imran"];
console.log(new_array.sort());
new_array.reverse();
console.log(new_array);

//numbersorting
var  number =[20,15,25,5,30];
number.sort(function(a,b){
    return a-b;

});
console.log(number);

