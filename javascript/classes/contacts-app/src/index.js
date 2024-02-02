// const div = document.getElementById('contacts-list');

// console.log(this);

// const person = {
//   username: 'max',
//   age: 22,
//   role: 'Developer',
//   sayHi: function() {
//     console.log(`Hello my name is ${this.username}, I am a ${this.role} and im ${this.age}.`);
//   }
// }

// person.sayHi();

// class Car { //? BLUEPRINT TO CREATE AND CHANGE ALL INSTANCES
//   constructor(make, year, model) {
//     this.make = make;
//     this.year = year;
//     this.model = model;
//     this.speed = 100;
//   }
//   // make = '';
//   // year = 0;
//   // model = '';
//   // speed = 100;
//   increaseSpeed = function() {
//     this.speed += 10;
//   }

//   decreaseSpeed = function() {
//     this.speed -= 10;
//   }
// }

// const honda = new Car('honda', 2007, 'civic');
// honda.increaseSpeed();
// console.log(honda.speed);

// const toyota = new Car('toyota', 2023, 'camry')
// toyota.increaseSpeed();
// console.log(toyota.speed);

// const volvo = {
//   make: 'volvo',
//   year: 2000,
//   model: ' xyz',
//   speed: 30
// }

// const nissan = {
//   make: 'nissan',
//   year: 2002,
//   model: 'skyline',
//   speed: 500
// }

// const audi = {
//   make: 'audi',
//   model: 'rs',
//   year: 2005
// }

// function sayHi() {
//   console.log(this);
//   console.log(`Hello my name is ${this.username}, Im a ${this.role} and Im ${this.age} years old.`);
// }

// person.sayHi = sayHi;

// sayHi();  // window or global object
// person.sayHi(); // person object

class Animal {
  constructor(animalName, type, size, age, isAwake, isMoving) {
    this.animalName = animalName;
    this.type = type;
    this.size = size;
    this.age = age;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
    this.toys = [];
  }

  pushNewToy(newToy) {
    this.toys.push(newToy);
  }

  sleep() {
    this.isAwake = false;
  }

  wake() {
    this.isAwake = true;
  }

  sit() {
    this.isMoving = false;
  }

  walk() {
    this.isMoving = true;
  }

  speak(sound) {
    console.log(`My pet ${this.animalName} is making a ${sound} sound.`);
  }

  toString(animal = "Animal") {
    return `This ${animal} named ${this.animalName} is ${this.age} years old. 
      It ${this.isAwake ? "is" : "is not"} awake, and it ${this.isMoving ? "is" : "is not"} moving.`;
  }
}

class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super("Tom", "cat", 2, 4, isAwake, isMoving);
    this.fur = fur;
  }

  speak() {
    super.speak("Meeowww..");
  }

  toString() {
    return super.toString("Cat");
  }
}

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super("Buddy", "dog", 2, 4, isAwake, isMoving);
    this.fur = fur;
  }

  speak() {
    super.speak("Woof!");
  }

  toString() {
    return super.toString("Dog");
  }
}

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super("Bessie", "cow", 2, 4, isAwake, isMoving);
    this.hair = hair;
  }

  speak() {
    super.speak("Moo.");
  }

  toString() {
    return super.toString("Cow");
  }
}

class Human extends Animal {
  constructor(hairColor, eyeColor, gender) {
    super("Hank", "human", "6ft", "25", true, false);
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.gender = gender;
  }

  setEyeColor(color) {
    this.eyeColor = color;
  }

  setHairColor(color) {
    this.hairColor = color;
  }

  speak() {
    console.log(
      `Hello, my name is ${this.animalName}, I am a ${this.gender}. I have ${this.hairColor} hair, and ${this.eyeColor} eyes.`
    );
  }

  toString() {
    return super.toString("Human");
  }
}

const human1 = new Human("blonde", "blue", "orca whale");
human1.speak();
console.log(human1.toString());

// const cat = new Animal('Tom', 'cat', 'normal', 9, 'true', 'false');
// cat.wake(); //? CALLING THE INSTANCE
// console.log(`Is Tom awake?`, cat.isAwake);
// cat.speak('meeeoowwww');
// cat.pushNewToy('ball');
// cat.pushNewToy('yarn');
// cat.toys.forEach(toy => {
//   console.log(toy);
// });
// console.log(cat);

// const dog = new Animal('Spike','dog','big', 13, 'false', 'false');
// console.log(dog);

// const mouse = new Animal('Jerry', 'mouse', 'small', 4, 'true', 'true')
// console.log(mouse);

// // const arr1 = new Array(4, 5, 6, 7, 8, 9)

// // const nums = [1, 2, 3]
// // arr1.forEach(n => console.log(n));
// // console.log(Math.random);

// div.addEventListener('click', function() {
//   console.dir(this);
// })
