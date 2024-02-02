

//* Array Literal
// const movies = ['Step Brothers', '21 Jumpstreet', 'Wolf of Wallstreet'];
// // this will print out 'Wolf of Wallstreet'
// // console.log(movies[2]);


// //? OVERWRITE A VALUE
// movies[1] = 'Batman';

// console.log(movies.length);
// console.log(movies);

// //
// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i]);

// }

// let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
// let myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

// const ourMovies = yourMovies.concat(myMovies, movies);

// //? concat
// const copyOfMovies = movies.concat();

// //? push a new array
// copyOfMovies.push('Toy Story');


// copyOfMovies.push('Batman 2');
// console.log(copyOfMovies);

//? removing the last element in the array
// const lastEle = copyOfMovies.pop();

// console.log(copyOfMovies);

// console.log(`The movie ${lastEle} was removed.`);

// const moviesName = copyOfMovies.join(' - ')

// console.log(moviesName);

// movies.push('Trading Places, Antitrust');
// movies.unshift('Star Wars');

/ x|o|x
// x|x|o
// x|o|o
const board = [
    ['x', 'o', 'x'], // row 1
    ['x', 'x', 'o'], // row 2
    ['x', 'o', 'o'] // row 3
];
// breakoutRooms[row][column]
console.log(breakoutRooms[2][1]);
console.log("========================");
let numArray = [
    [1, 2, 3],
    [4, 5, 6],
    [
        [7, 8, 9],
        [10, 11, 12],
        [13, 14, 15]
    ],
];
console.log( numArray);

const twoDArray = numArray.flat(2);

console.log(twoDArray);

console.log( numArray);

let numArray = [4, 8, 1, 0, -14, 22, 77, 1388, 20];

const sortedArray = numArray2.toSorted((a, b) => a - b);
console.log(sortedArray);

console.log(numArray2);