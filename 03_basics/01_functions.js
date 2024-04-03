//functions

function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}


//sayMyName()


// function addTwoNumbers(num1,num2) {
//  console.log(num1 + num2);    
// }

// const result = addTwoNumbers(3, 5)
// console.log("Result:", result);


function addTwoNumbers(num1,num2) {
 
    // let result = num1 + num2
    // return result


    return num1 + num2
}

const result = addTwoNumbers(3, 5)
//console.log("Result:", result);
// ---------------------------------------------------

function loginUserMessage(username = "sam") {

    //if (username === undefined)
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
    
}

// console.log(loginUserMessage("shiv"));
console.log(loginUserMessage("shivansh"));


function calculateCartPrice(...num1) {
    return num1
}

//console.log(calculateCartPrice(200, 400, 500));
const user = {
    username: "shivansh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function retrunSecondValue(getArray) {
    return getArray[1]
}

//console.log(retrunSecondValue(myNewArray));
    
console.log(retrunSecondValue([200, 400, 500, 1000]));