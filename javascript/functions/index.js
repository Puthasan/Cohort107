// //*
// let userName = 'Alex';
// console.log(userName);


// const myObject = {
//   print: function() {
//     console.log('Hello')
//   }
// }
// myObject.print(userName);


//* Function Declaration
function addTwoNumbers(a , b) {
  //code goes here
  return a + b;
}

function sayHi(name) {
  console.log(`Hello ${name}`);
}

//* Calling the function
// addTwoNumbers(2, 3);

sayHi('Tig')


const sayHello = function(name) {
  console.log(`Hello ${name}`);
}

sayHello('Ana')

//* Function Declaration
function add(a, b) {
  return a + b;
}

const result = add(5,10);
console.log(result);


//* Arrow Function
const multiply = (a, b) => a * b;
//? OR
// const multiply = (a, b) => {
//   return a * b
// }


const newResult = multiply(3, 3);

console.log(newResult);

function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}

const result3 = areBothEven(2, 4);
console.log(result3);

//* Practice Activity 1
const computerArea = (width, height) => {
 return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units.`; 
}  

console.log(computerArea(4, 10))

//* Practice Activity 2
const planetHasWater = function(planet) {
  const lowercasedPlanet = planet.toLowerCase();
  return lowercasedPlanet === "earth" || lowercasedPlanet === "mars"
}
console.log(planetHasWater("Earth"));
console.log(planetHasWater("MARS"));
console.log(planetHasWater("venus"));


//* Arguments Array-Like
// function getDevObject(name) {
//   const skills = [];

//   for (let i = 1; i < arguments.length; i++) {
//     skills.push(arguments[i]);
//   }
  
//   return {
//     devName: name,
//     jobSkills: skills
//   }
// }


function getDevObject(name, ...skills) {
    return {
        devName: name, 
        jobSkills: skills
    }
}

const devObj = getDevObject('Maria', 'HTML', 'CSS', 'JS', 'React');
console.log(devObj);


// Default Parameter
function setColor(bike, brand, color = 'black', size = 20) {
  bike.color = color;
  bike.brand = brand;
  bike.size = size;
}

const b1 = {}

setColor(b1, 'some brand', 'purple');

console.log(b1);

const b2{}

setColor(b2, 'brand2', 'hot pink', 18);
console.log(b2);

const colors = ['red', 'green', 'blue'];

colors.forEach(function(element) {
  console.log(element.toLocaleUpperCase());
});

//
(function() {
  console.log('running fuction script');
})();


// function hoist() {
//   console.log(x);
//   let x = 25;
//   console.log(x);
// }

// hoist();

// let x = 5;


// let myVar = 20;

// function passBy(x) {
//   x = x * 10;
// }

// console.log(myVar);
// console.log(passBy(myVar));
// console.log(myVar);


// let a = 10;
// let b = a;  // copy the value of a

// a = 100;

// console.log(a);
// console.log(b);


// let myVar = { value: 20, type: 'Number' }

// function passBy(x) {
//   x.value = x.value * 20;
// }

// console.log(myVar);  // 20
// passBy(myVar);  // 200
// console.log(myVar);  // 400


// const user1 = {name: 'alex'};

// const user2 = user1;

// user1.name = 'max';

// console.log(user1);
// console.log(user2);

let numArray = [
  { value: 10 },
  { value: 20 },
  { value: 0 },
  { value: -10 }, 
  { value: 15 }, 
  { value: 28 }, 
  { value: -1000 },
  { value: 42 },
  { value: 7 }
];

function returnEven(array) {
  let newArray = [];

  array.forEach((element) => {
      if (element.value % 2 == 0) {
          newArray.push(element);
      }
  });

  return newArray;
}

let newArray = returnEven(numArray);

newArray[0].value += 10;

numArray[3].value = 67;

let myEvenValue = newArray[1].value;
myEvenValue /= 2;

console.log(numArray[0]);
console.log(numArray[3]);