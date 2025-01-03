let students = [
  {
    id: 101,
    name: "shimul khan",
    cgpa: 2.92,
  },
  {
    id: 102,
    name: "sabbir khan",
    cgpa: 2.72,
  },
  {
    id: 103,
    name: "sowrob khan",
    cgpa: 1.72,
  },
];

function studentsname1() {
  return students
    .filter(function (x) {
      return x.cgpa > 2;
    })
    .map(function (y) {
      return y.name;
    });
}
console.log(studentsname1());

//Arrow function without return bcz of one line statement 
const studentsname2 = () => students.filter((x) => x.cgpa > 2).map((y) => y.name);
console.log(studentsname2());
