//object literals
function student_info(name, age) {
  return {
    name,
    age,
  };
}
// console.log(student_info("shimul", 27));

let message = {
  'body name'() { // use space in function name
    return `hi , i am object function`;
  },
};
console.log(message['body name']());

let studentmessage = {
    body() { 
      return `hi , i am object function type 2`;
    },
  };
  console.log(studentmessage.body());



