const taskone = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1 completed");
  });
};
const tasktwo = () => {
    return new Promise((resolve, reject) => {
      resolve("task 2 completed");
    });
  };

const taskthree = () => {
    return new Promise((resolve, reject) => {
      reject("task 3 not completed");
    });
  };
const taskfour = () => {
    return new Promise((resolve, reject) => {
      resolve("task 4 completed");
    });
  };
taskone().then((res) => console.log(res))
.then(tasktwo).then((res) => console.log(res))
.then(taskthree).then((res)=> console.log(res))
.then(taskfour).then((res)=> console.log(res))
.catch((err)=>console.log(err))