// primitive
// there 7 types: string, number, boolean, null, undefined, symbol,BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber =22782387444856926985n

// Reference (Non Primitive)

// Array, Object, Funtions

const heros =["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "shivansh",
    age: 19,
}

const myFunction = function(){
    console.log("hello shivansh");
}



console.log( typeof bigNumber);


//Understanding of memory

// stack (primitive), heap (non-primitive)

let myYtName ="shivansh"

let anothername = thisismyname
anothername = "shivvv"

console.log(thisismyname);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shivansh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
