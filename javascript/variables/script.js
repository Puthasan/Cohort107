// console.log('running script ...');


// 'let' variables

// global scope
let x = 32; // global variables

if (true) {
  // block scope
  let x = 100; // block/local variable
  console.log(x);
}

x = 55;
console.log(x);