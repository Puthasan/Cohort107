console.log("hello world")

async function hello(){
  return "Hello World";
}


let num = 10;
num = 2000;


function pow(x:number, y:number):string {
  return Math.pow(x, y).toString()
}

pow(5, 10)


type MyList = [number?, string?, boolean?]
const arr: MyList=[]

arr.push(1)
arr.push('Georgi')
arr.push(false)


let number: number[] = []
number[0] = 1
number[1] = 2

let user: [number, string] = [23, 'Ernie']

// const small = 1
// const medium = 2
// const large = 3
enum Size {Small = 0, Medium = 'm', Large = '1'}
let mySize: Size = Size.Medium
let Tig: Size
let Hanan: Size 

type Employee = {

  readonly id: number,
  name: string,

}

let employee:  Employee = {

  id: 1,
  name: "Patricia"
  
} 

console.log(employee);

function howHeavyIsIt(weight: number | string):number {
  typeof weight === 'number' ? return weight * 2.2 : return parseInt(weight) * 2.2
//   if (typeof weight === 'number'){
//   return weight * 2.2
// }else{
//   return parseInt(weight) * 2.2
//   }
}

console.log(howHeavyIsIt(10));

console.log(howHeavyIsIt('10kg'));

