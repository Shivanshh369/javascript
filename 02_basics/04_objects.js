//const tinderUser = new Object()   //this is singleton

const tinderUser = {}  // non singleton


tinderUser.id = "21abc"
tinderUser.name ="shiv"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "shiva@gmail.com",
    fullName:{
        userfullname:{
            firstname: "shivansh",
            lastname: "mishra",
        }
    }
}


//console.log(regularUser.fullName.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = { obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const user =[

    {
        id: 1,
        email: "Sh@gamil.com",
    },

    {
        id: 2,
        email: "Shoot@gamil.com",
    },

    {
        id: 3,
        email: "St@gamil.com",
    },
]

// console.log (user[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js with histesh sir",
    price: "999",
    courseInstructor: "histesh sir",

}

//course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);



 
