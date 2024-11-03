let number = [5, 10, 55, 22, 78];
let evenNumbers = number.find((x) => x % 2 === 0);
console.log(evenNumbers);

let numbers = [2, 4, 5, 7, 12, 21];
const evenNumber = (x) => x % 2 === 0;

let evenfirstnumberindex = numbers.findIndex(evenNumber);
console.log(evenfirstnumberindex);

let students = [
  {
    id: 101,
    gpa: 3.84,
  },
  {
    id: 102,
    gpa: 2.84,
  },
  {
    id: 103,
    gpa: 3.54,
  },
];
let studentid = students.find((x) => x.gpa > 3.5);
// console.log(studentid.id);

