function square(x) {
  console.log(`square of ${x}: ${x * x}`);
}

// const y = square;
// y(6)
function higerOrderFunction(num, callback) {
  callback(num);
}
higerOrderFunction(6, square);

const task1 = (callback) => {
  console.log("Task 1");
  callback();
};
const task2 = (callback) => {
  setTimeout(() => {
    console.log("data loading");
    callback();
  }, 3000);
};
const task3 = () => {
  console.log("Task 3");
};
task1(() => {
  task2(() => {
    task3();
  });
});
