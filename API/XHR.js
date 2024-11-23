//XML Http Request
//Event -> onload(),onerror()
//function -> open(),send(),set
console.clear();

// const getdata = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   xhr.onload = () => {
//     let data = xhr.response;
//     console.log(JSON.parse(data));
//   };
//   xhr.onerror = () => {
//     console.log("here is error");
//   };
//   xhr.send();
// };
// getdata();

const makerequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.setRequestHeader("content-type", "application/json");

  xhr.onload = () => {
    let data = xhr.response;
    console.log(JSON.parse(data));
  };

  xhr.onerror = () => {
    console.log("here is error");
  };
  xhr.send(JSON.stringify(data));
};

const getdata = () => {
  makerequest("GET", "https://jsonplaceholder.typicode.com/posts");
};
// getdata();

const sendData = () => {
  makerequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  });
};

// sendData();

const updateData = () => {
  makerequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "Shimul",
    body: "bars",
    userId: 2,
  });
};
const updateSingleData = () => {
  makerequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    title: "Shahadat",
  });
};
const DeleteData = () => {
  makerequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
};

// updateData();
// updateSingleData();
DeleteData();
