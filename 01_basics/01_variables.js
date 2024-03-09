const accountId = 14478
let accountEmail="shivansh@gmail.com"
var accountPassword ="12345"
accountCity ="jaipur"


// accountId = 2 // not allowed

accountEmail = "shiba@.com"
accountPassword ="327842"
accountCity ="india"
let accountState;

console.log(accountId);
/*
prefer not to use var because of issue in block scope and fuctional scope
*/

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState])

