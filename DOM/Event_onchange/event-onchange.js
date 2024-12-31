//listener add with input
var input1 = document.querySelector("input[name=Name]");
input1.addEventListener("change", changeHandler);

function changeHandler(a) {
  console.log(a.type);
  console.log(a);
  console.log(a.target);
  console.log(a.target.className);
  console.log(a.target.value);
}

//listener add with checkbox
var programs = document.querySelectorAll("input[name=program]");
console.log(programs);

Array.from(programs).map((program) => {
  addEventListener("change", programHandler);
});

function programHandler(e) {
  if (e.target.checked) {
    console.log(e.target.value);
  }
}

//add listener with select or dropdown menu

var department = document.querySelector("#depart");

department.addEventListener('change',departmentHandler)
function departmentHandler(e){
    console.log(e.target.value)
}
