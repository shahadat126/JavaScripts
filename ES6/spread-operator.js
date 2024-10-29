//normal parameter
function addnumbers(x, y, z) {
  return x + y + z;
}
let numbers = [1, 2, 3];
console.log(addnumbers(numbers[0], numbers[1], numbers[2]));

//spread operator
//sprad operator can used any position of parameter while rest parameter used at the end of parameter.
function addnumbers2(x, y, z) {
  return x + y + z;
}
let numbers2 = [1, 2, 3];
console.log(addnumbers2(...numbers2));
let numbers3 = [5, 6, ...numbers2, 7]; //numbers2 array push in another array.
console.log(numbers3);
//concating two array using spread operator
let array1 = [9, 8, 7];
let array2 = [4, 5, 6];
let array = [...array1, ...array2];
console.log(array);

//concating two object using spread operator

let obj1 = {
  name: "shahadat",
  age: 27,
};

let obj2 = {
  nationality: "bangladesi",
  occupation: "unemployer",
};

let obj = { ...obj1, ...obj2 };
console.log(obj);
