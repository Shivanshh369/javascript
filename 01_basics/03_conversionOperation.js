let score = null

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);
 
// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = "shivansh"

// incase we give empty string it will give false bydefult

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);


//....... Operations...... //

let value = 3
let negValue = -value
//console.log(negValue);

//basic maths operation

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/2);
//console.log(2%2);

let str1 = "hello"
let str2 = " shivansh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // o/p> 122
console.log(1 + 2 + "2" );// o/p>32

console.log( (3 + 2) * 5 % 3); // good practice use () so code dont look messy


console.log(true);
console.log(+true);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2


let gameCounter = 100
gameCounter++;
console.log(gameCounter);


//know more about prefix & postfix in js