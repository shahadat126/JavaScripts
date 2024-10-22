//using two dimentional array findout maxsalary

var studentInfo = [
    ["himi",800],
  ["ahad", 1000],
  ["sabil", 4500],
  ["mehrab", 1500],
  ["majed", 700],
];

function higestSalary(studentInfo) {
  var higestsalary = studentInfo[0][1];
  var higeststudent = studentInfo[0][0];

  for (var x = 1; x < studentInfo.length; x++) {
    if (higestsalary < studentInfo[x][1]) {
        var higestsalary = studentInfo[x][1];
        var higeststudent = studentInfo[x][0];
    } 
    
  }
  return higeststudent;
 
}

var stuname = higestSalary(studentInfo);
console.log(stuname);
