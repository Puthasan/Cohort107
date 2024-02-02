// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// let d1;
// let d2;
// let d3;
// let d4;

// if (n1 % 5 == 0){
//   d1 = true;
// } else {
//   d1 = false;
// }
// if (n2 % 5 == 0){
//   d2 = true;
// } else {
//   d2 = false;
// }
// if (n3 % 5 == 0){
//   d3 = true;
// } else {
//   d3 = false;
// }
// if (n4 % 5 == 0){
//   d4 = true;
// } else {
//   d4 = false;
// }
// console.log("------divisible by 5------");
// console.log(`n1: ${d1}, n2: ${d2}, n3: ${d3}, n4: ${d4}`);
// console.log("------is all divisible by 5------");
// const isAllDivisibleBy5 = d1 && d2 && d3 && d4; 
// console.log(isAllDivisibleBy5);

// Check if the first number is larger than the last.
//  Cache the result in a variable.
// console.log("------first larger than the last-------");
// console.log(n1 > n4);

// console.log("-----arithmaetic chain-------");
// const num1 = (n2 - n1)

let isAllDivisibleBy5 = false;
let isFirstLargerThanLast = false;
let remainder;

if ((n1 + n2 + n3 + n4) % 5 == 0) {
    isAllDivisibleBy5 = true;
}
console.log("------is all divisible by 5------");
console.log(isAllDivisibleBy5);

console.log("------first larger than the last-------");
if (n1 > n4) {
  isFirstLargerThanLast = true;
}
console.log(isFirstLargerThanLast);
console.log("-----arithmaetic chain-------");
remainder = ((n1 - n2) * n3) % n4;
console.log(remainder)

console.log("-----isOver25-------");
const isUnderOrEqual25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
const isOver25 = !isUnderOrEqual25;
console.log(isOver25)

