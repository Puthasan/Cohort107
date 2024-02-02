// // ?Create a Promise that resolves after one second.
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve("Guess this worked!");
//   }, 1000);
// });

// // ?Add some then() methods to handle additional tasks.
// myPromise
//   .then((x) => x + ' Again?')
//   .then((x) => x + ' Third time!')
//   .then((x) => x + ' Promises are cool.')
//   .catch((err) => {
//       console.error(err);
//   })

//   console.log(myPromise);

// const myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function(){
//     resolve("My favorite flavor of yogurt is lime")
//   }, 3000)
// })

// myPromise.then(function(value){
//   document.getElementById('demo')
//   innerHTML = value
// })



let saySomething = () => {
  console.log('waiting');
}

let failureCallback = () => {
  console.log('did not work');
}

const wait = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms)
})

wait(3*1000)
.then(() => saySomething('3 seconds'))
.catch(failureCallback);