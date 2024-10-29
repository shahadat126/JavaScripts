//for of loop

const names = ["shimul", "shahadat", "sabbir"];
for (let name of names) {
  console.log(name);
}

//for in loop
//output will be show just indes number 0 1 2
let student_info = {
  name: "shimul",
  age: 27,
  cgpa: 2.91,
};

for (let x in student_info) {
  console.log(`${x}=${student_info[x]}`);
}
