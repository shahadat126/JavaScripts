//destructuring array
// let numbers = [10, 20, 30, 40, 50];
// let [num1, num2, num3, num4, num5] = numbers;
// console.log(num1);
// let [name1, name2, ...z] = numbers;
// console.log(z);

//swap variables
let a = 10,
  b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);

//object destructuring
// const student1 = {
//   id: 101,
//   fullName: "Anisul Islam",
//   gpa: 3.92,
// };

// //we can also set default values of an object that does not exist
// let { id, fullName, gpa, country = "Bangladesh" } = student1;

// console.log(fullName);
// console.log(country);

// //nested object destructuring
// const student2 = {
//   id: 101,
//   fullname: "Anisul Islam",
//   cgpa: 3.92,
//   languages: {
//     native: "Bangla",
//     beginner: "Finnish",
//   },
// };
// let { fullname, cgpa, languages } = student2;
// console.log(languages);
// console.log(languages.native);

// destructuring function arguments
// const studentDetails = (studentInfo) => {
//   console.log(
//     `${studentInfo.firstName} ${studentInfo.roll} ${studentInfo.dob}`
//   );
// };
const studentDetails = ({ dob, roll, firstName }) => {
  console.log(`${firstName}  ${roll} ${dob}`);
};

const studentInfo = {
  dob: "12/03/90",
  roll: 101,
  firstName: "Anisul",
};
studentDetails(studentInfo);
