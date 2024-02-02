//* code block

// let x = 10; // global scope
// let y = 5; // global scope

// new code block
// {
// 	let z = x + y; // local scope or block scope
// 	console.log(z);
// }

//* var keyword
// {
//   var x = 1;
//   {
//     var x = 2;  // same variable!
//     console.log(x);  // 2
//   }
//   console.log(x);  // 2
// }

//* let keyword
// {
//   let x = 1;
//   {
//     let x = 2;  // different variable
//     console.log(x);  // 2
//   }
//   console.log(x);  // 1
// }

//* nested scopes 
// let x = 10; //  global scope

// {
//   // block scope Layer #1
//   let y = 5;
//   {
//     // block scope Layer #2
//     let z = x + y;
//     console.log(z);
//   }
// }

//* Control Flow/Conditionals
// if (x == 10){ // if this statement is true do this
//   console.log('We found x!');
// } else { // if this statement is false do this
//   console.log('We didnt find x..');
// }

// let a = 5;

// if (a > 0) {
// 	console.log('Positive!');  
//   x++;
// } else {
// 	console.log('Negative.'); 
//   x--;
// }


// if (42) {
//   console.log("true");
// }
// if ("0") {
//   console.log("true");
// }
// if ("false") {
//   console.log("true");
// }
// if (-0) {
//   console.log("true?");
// }
// if (Infinity) {
//   console.log("true");
// }
// if (" ") {
//   console.log("true?? ");
// }


// const user = 'tig';

// if (user) {
//     console.log(`Welcome ${user}`);
// } else {
//     console.log('Welcome Guest');
// }

//* EXERCISE
// let num = 10; // Variable called num

// if(num > 0) {
//   console.log('Positive Num');
// } else {
//   console.log('Negative Num')
// } 

// num = -5;

// if (num < 0) {
//   console.log('Negative Num');
// } else {
//   console.log('Positive Num');
// }

// const age = 18

// if (age >= 18) {
//   console.log('Access Granted');
// } else {
//   console.log('Access Denied');
// }

//* Nested if/else

// const isLoggedIn = true;
// const isAdmin = false;

// if (isLoggedIn) {
//   console.log('Welcome!');

//     if (isAdmin) {
//       console.log('Admin User');
//     } else {
//       console.log('Default User');
//     }

// } else {
//   console.log('You must be logged in!');
// }

// const age = 18;

// if (age <= 15) {
//   console.log('Little League');

// } else if (age >=16 && age <=18) {
//   console.log('Junior League');

// } else {
//   console.log('Major League');
// }

//* EXERCISE

// let num = 100;

// if (num > 0) {
//   if (num > 100) {
//     console.log(`${num} is a positive number greater than 100` )
//   } else if (num < 100) {
//     console.log(`${num} is a positive number less than 100` )
//   } else {
//     console.log('Number is 100')
//   }
// } else {
//   console.log(`${num} is a negative number`)
// }

// another example
let num = 100;

if (num > 0 && num != 100) {
    if (num > 100) {
        console.log(`${num} is a positive number greater than 100.`)    
    } else {
        console.log(`${num} is a positive number less than 100.`)
    }
} else {
    console.log(`${num} is a negative number or 100.`)
}