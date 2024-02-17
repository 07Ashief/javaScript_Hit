// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async task
//   // DB calls, crytograpy, network
//   setTimeout(function () {
//     console.log("1.Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise comsumed from resolve");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("2.Async task  2 is complete");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "ashief", email: "ashief@gmail.com" });
//   }, 1000);
// });
// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function name() {
//     let error = false;
//     if (!error) {
//       resolve({ username: "ashu", email: "ashu@gmail.com" });
//     } else {
//       reject("Something went wrong");
//     }
//   }, 1000);
// });
// // const username = promiseFour.then(function (ashu) {
// //     console.log(ashu)
// //     return ashu.username
// // })

// // console.log(username)

// const username = promiseFour
//   .then(function (ashu) {
//     console.log(ashu);
//     return ashu.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(()=>{'The promise either resolved or rejected'});

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function name() {
//       let error = true;
//       if (!error) {
//         resolve({ username: "5.ashu", email: "5ashu@gmail.com" });
//       } else {
//         reject("ERR_5 : Something went wrong");
//       }
//     }, 1000);
//   });

//   async function ConsumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response)    
//     } catch (error) {
//         console.log(error)
//     }
//   }

//   ConsumePromiseFive()

// //   async function getAllUsers(){
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
// //         // console.log(response)
// //         const data = await response.json()
// //         console.log(data)
// //     } catch (error) {
// //         console.log('E :', error)
// //     }
// //   }
// //   getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//     return response.json()
// })
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)})



// Creating a promise (promiseOne) that resolves after a setTimeout
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("1. Async task is complete");
    resolve();
  }, 1000);
});

// Consuming promiseOne using .then
promiseOne.then(function () {
  console.log("Promise consumed from resolve");
});

// Creating another promise (promiseThree) that resolves with an object
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "ashief", email: "ashief@gmail.com" });
  }, 1000);
});

// Consuming promiseThree and logging the resolved data
promiseThree.then(function (user) {
  console.log(user);
});

// Creating a promise (promiseFour) with potential error handling using reject
const promiseFour = new Promise(function () {
  setTimeout(function name() {
    let error = false;
    if (!error) {
      resolve({ username: "ashu", email: "ashu@gmail.com" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

// Consuming promiseFour with multiple .then, .catch, and .finally
const username = promiseFour
  .then(function (ashu) {
    console.log(ashu);
    return ashu.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise either resolved or rejected");
  });

// Creating a promise (promiseFive) with error handling using reject
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function name() {
    let error = true;
    if (!error) {
      resolve({ username: "5.ashu", email: "5ashu@gmail.com" });
    } else {
      reject("ERR_5 : Something went wrong");
    }
  }, 1000);
});

// Consuming promiseFive using an asynchronous function with try-catch
async function ConsumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// Calling the asynchronous function to consume promiseFive
ConsumePromiseFive();

// Fetching data from an API using fetch
fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


  /* Notes
  
  ```javascript
// Creating a promise (promiseOne) that resolves after a setTimeout
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("1. Async task is complete");
    resolve();
  }, 1000);
});

// Consuming promiseOne using .then
promiseOne.then(function () {
  console.log("Promise consumed from resolve");
});

// Creating another promise (promiseThree) that resolves with an object
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "ashief", email: "ashief@gmail.com" });
  }, 1000);
});

// Consuming promiseThree and logging the resolved data
promiseThree.then(function (user) {
  console.log(user);
});

// Creating a promise (promiseFour) with potential error handling using reject
const promiseFour = new Promise(function () {
  setTimeout(function name() {
    let error = false;
    if (!error) {
      resolve({ username: "ashu", email: "ashu@gmail.com" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

// Consuming promiseFour with multiple .then, .catch, and .finally
const username = promiseFour
  .then(function (ashu) {
    console.log(ashu);
    return ashu.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise either resolved or rejected");
  });

// Creating a promise (promiseFive) with error handling using reject
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function name() {
    let error = true;
    if (!error) {
      resolve({ username: "5.ashu", email: "5ashu@gmail.com" });
    } else {
      reject("ERR_5 : Something went wrong");
    }
  }, 1000);
});

// Consuming promiseFive using an asynchronous function with try-catch
async function ConsumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// Calling the asynchronous function to consume promiseFive
ConsumePromiseFive();

// Fetching data from an API using fetch
fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

**Explanation:**
1. **Promise Creation:** Creating promises (promiseOne, promiseThree, promiseFour, promiseFive) that resolve or reject after a setTimeout.
2. **Promise Consumption:** Using `.then` to consume promises and log the results.
3. **Error Handling:** Handling errors using `.catch` in promises.
4. **Async/Await:** Using `async function` and `await` to consume promises asynchronously with error handling.
5. **Fetch API:** Using the Fetch API to make an HTTP request and consume JSON data from an API.
6. **Console Logging:** Logging various outputs to the console for demonstration.
  
  */
