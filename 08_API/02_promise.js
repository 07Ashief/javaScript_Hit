const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, crytograpy, network
  setTimeout(function () {
    console.log("1.Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise comsumed from resolve");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("2.Async task  2 is complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "ashief", email: "ashief@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function name() {
    let error = false;
    if (!error) {
      resolve({ username: "ashu", email: "ashu@gmail.com" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});
// const username = promiseFour.then(function (ashu) {
//     console.log(ashu)
//     return ashu.username
// })

// console.log(username)

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
  .finally(()=>{'The promise either resolved or rejected'});

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

  async function ConsumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)    
    } catch (error) {
        console.log(error)
    }
  }

  ConsumePromiseFive()

//   async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E :', error)
//     }
//   }
//   getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})



