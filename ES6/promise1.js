const promise1 = new Promise((resolve, reject) => {
  let completedpromise1 = true;
  if (completedpromise1) {
    resolve("completed promise 1");
  } else {
    reject("not completed promise 1");
  }
});

console.log(promise1);
// if resolve work then if reject work catch
promise1.then((res) => console.log(res)).catch((err) => console.log(err));

const promise2 = new Promise((resolve, reject) =>
  resolve("completed promise 2")
);
// promise2.then((res)=>console.log(res))
Promise.all([promise1, promise2]).then(([res1, res2]) =>
  console.log(res2, res1)
);

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("completed promise 3");
  }, 2000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("completed promise 4")

  },1000) 
});

Promise.race([promise3,promise4]).then((res) => console.log(res) )