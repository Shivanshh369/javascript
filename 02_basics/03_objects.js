// singleton
// object.create

// object literals


const mySym = Symbol("key")

const JsUser ={
     name: "Shivansh",
     age: 19,
     "full name": "shivansh mishra",
     [mySym]: "mykey",
     location: "moradabad",
     email: "shivansh@gmail.com",
     isLoggedIn: false,
     lastLoginDays: ["Monday" , "Tuesday"]

}

// console.log(JsUser.email); 
// console.log(JsUser["email"]); // more accurate to fetch values even if the key in the form og string double coats.
// console.log(JsUser["full name"]); 
// console.log(JsUser[mySym]); 
// console.log(typeof JsUser[mySym]); 
      
JsUser.email = "shivanshgpt.com" //to overwrite somthing
//Object.freeze(JsUser) // for freez the info. aur object
JsUser.email = "shivanshgoogle.com"  // now after applying freez. any value cant  update
//console.log(JsUser); 

 JsUser.greeting = function() {
     console.log("hello js user");
     
 }

 JsUser.greetingTwo = function () {
     console.log(`hello js user, ${this["full name"]}`);
 }

     console.log(JsUser.greeting());
     console.log(JsUser.greetingTwo());



     
 