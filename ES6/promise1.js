const promise1 = new Promise((resolve, reject) => {
  let completedpromise1 = true;
  if (completedpromise1) {
    resolve("completed promise 1");
  } else {
    reject("not completed promise 1");
  }
});

console.log(promise1);
