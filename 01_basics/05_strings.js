const name ="shivansh";
const repoCount = 50;

//console.log(name + repoCount + " value");

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shivansh-sh-com');


//console.log(gameName[0]);
//console.log(gameName.__proto__);



//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne ="  shivansh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivansh.com/shivansh%80mishra"

console.log(url.replace('%80', '-'));

console.log(url.includes('sundar'));
console.log(gameName.split('-'));
