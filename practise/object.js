//create a object

// var student = {

//     name: "shimul",
//     age: 27,
//     language: ['bangla','english','urdu','hindi']

// }
    
// console.log(student.language[1]);

// //multiple object

// var student1 = {

//     name: "shimul",
//     age: 27,
//     language: ['bangla','english','urdu','hindi']

// }
// var student2 = {

//     name: "shihab",
//     age: 28,
//     language: ['bangla','english','urdu','hindi']

// }
// var student3 = {

//     name: "sabbir",
//     age: 27,
//     language: ['bangla','english','urdu','hindi']

// }

// console.log(student1);
// console.log(student2);

//adding a constructor
//constructor name start with uppercase
function Student(name,age,cgpa,lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang); 
      }
}

var student1 = new Student('shimul',27,2.92,["bangla","english","hindi"]);
var student2 = new Student('shihab',25,3.92,["bangla","english","hindi"]);
var student3 = new Student('sabbir',26,2.98,["bangla","english","hindi"]);
student1.display();
student2.display();
student3.display();
console.log(student2.name);
