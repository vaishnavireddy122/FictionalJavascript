console.log("This is day-1 JS file");
//TERNARY OPERATOR
//EXAMPLE-1

let x=10;
let y=x ? "3":"6";
console.log(y);


//EXAMPLE-2
isLoggedIn=false
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message)

//EXAMPLE-3 
let isAdmin = false;
isAdmin ? grantAccess() : denyAccess()
function grantAccess()
{
  console.log("Granted Accesss!!");
}
function denyAccess()
{
    console.log("Access Denied!!");
}


//NESTED TERNARY

let a=10;
let b=15;
let c=a>b ?(a>0 ? "a is greater than b":"a is 0")
          : "a is smaller than b";
console.log(c);




