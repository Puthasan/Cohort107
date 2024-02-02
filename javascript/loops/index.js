// // Output even number from 1 to 10.
// for (let i = 1; i <= 10; i++) {

//   console.log(`Now checking ${i}`);

//   if (i % 2 == 0) {
//       console.log(`${i} is even!`);
//   } else {
//       console.log(`${i} is odd!`);

//   }
// }

// // Output multiple of 3, starting at 6 and ending at 60.
// for (let i = 6 ; i >= 60 i++) {
//   if (i % 3 === 0) {
//     console.log(`${i} is a multiple of 3`);
//   } else {
//     console.log(`${i} is not a multiple of 3`);
//   }
// }


// Output an increasing number of # symbols, from 1 to 7, as shown below
// let symbol = '';

// for (let i = 1; 1 <= 7; i ++) {

//   symbol+= '#';

//   console.log(symbol);
// }



// let str = "Hello World";

// for (let io = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

//? Count down to 0 from a given number.

// let x = 10; 

// while (x >= 0) {
//   console.log(x);


//   x--;
// }

//? Log integers in multiples of 3 as long as they are less than 35.

// let x = 0;

// while (x < 35) {
//   x++;

//   if (x % 3 !== 0) {
//     continue
//   }
//   console.log(`${x} is a multiple of three`);
// }

//? Print integers between 0 and 20 with the following conditions:

//* All numbers divisible by 2 should be multiplied by 3 before they are output.
//* All other integers should not be output.
// let x = 0

// while (x <= 20) {
//     if (x % 2 == 0 && x !== 0) {
//         let n = x * 3;
//         console.log(n);
//     }
//     x++;
// }

// OR..

// let x = 0

// while (true) {
//     if (x % 2 == 0 && x !== 0) {
//         let n = x * 3;
//         console.log(n);
//     }
//     if (x == 20) {
//         break;
//     }
//     x++
// }

//? Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

//* Write a loop that outputs how many quarters Romeo received.

// const cookiePrice = 4;
// const dollarBill = 10;
// const change = dollarBill - cookiePrice;
// console.log(change);

// let quarters = 0;

// while (quarters < (change % 0.25)) {
//   quarters++
// }

// console.log(quarters);

// OR....

// const cookiePrice = 4;
// const dollarBill = 10;
// const change = dollarBill - cookiePrice;
// console.log(change)

// while (true) {
//     console.log(change / 0.25);
//     break;
// }


//? fizzbuzz

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("Fizz Buzz");

//   } else if (i % 3 == 0) {
//     console.log("Fizz");

//   } else if (i % 5 == 0) {
//     console.log("Buzz");
    
//   } else {
//     console.log(i);
//   }
// }

//? Prime Time

// for (let n = 5; n <= 12; n++) {
//   let isPrime = true;

//   for (let i = 2; i < n; i++) {
//       // i = 2, 3, 4
//       if (n % i == 0) {
//           isPrime = false; // not a prime number
//           break;
//       }
//   }

//   if (isPrime) {
//       console.log(`${n} is a prime number.`);
//   }

// }

//? Feeling Loopy

// const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// function parseCSV(csv) {
//   // Split the CSV string into rows based on the newline character
//   const rows = csv.split('\n');

//   // Loop through each row
//   for (let i = 0; i < rows.length; i++) {
//     // Split the row into cells based on the comma as a delimiter
//     const cells = rows[i].split(',');

//     // Log each cell for the current row
//     console.log(cells[0], cells[1], cells[2], cells[3]);
//   }
// }

// // Call the function with the provided CSV string
// parseCSV(csvString);



const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26\n";


let currentCell = 1;
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

// loop over the string 
for (let i = 0; i < csv.length; i++) {
  // console.log(csv[i]);
  // store each cell in a variable


  if (csv[i] === ","){
    // if there is a comma, move to next cell
    currentCell++

  } else if (csv[i] === "\n"){
    //if is a \n move to next row
    console.log(cell1, cell2, cell3, cell4);
    currentCell = 1;
    cell1 = '';
    cell2 = '';
    cell3 = '';
    cell4 = '';

  } else {
    if(currentCell === 1) {
      cell1 += csv[i];
    } else if (currentCell === 2) {
      cell2 += csv[i];
    } else if (currentCell === 3) {
      cell3 += csv[i];
    } else if (currentCell === 4) {
      cell4 += csv[i];
    }
  }
}