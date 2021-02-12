/*
//VALUES AND VARIABLES------------------------------------------------------------------

let js = "amazing";
console.log(10+20+40-20);

console.log("Jonas")

let firstName = "Matilda";

console.log(firstName)
console.log(firstName)
console.log(firstName)

// variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'programmer';
let mySecondJob = 'teacher';
*/

//DATA TYPES-----------------------------------------------------------------------------
/*let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'jonas');

javascriptIsFun = 'YES!'; //dynamic typing
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

 year = 1991;
 console.log(typeof year);

 console.log(typeof null);//error in typeof: it shows type of null is object
*/

//LET, CONST AND VAR----------------------------------------------------------------------------
// let and const were introduced in es6, var is used in old javascript
/* 
let age = 30;
age = 31; // muable variable, won't giv error

const birthYear = 1991;
birthYear = 1990; //this will give error because variable declared with const won't mutate i.e immutable
const job;//this will also give error, it should have a value

// best practice in coding is that to use const everywhere and let should only be used when the value of variable needs to be changed in some point of program, it reduces the bugs in a program

var job = 'programmer';
job = 'teacher';
//though var and let seems same they are not, let is blockscoped and var is finction scoped

lastName = 'Sarkar';
console.log(lastName);//return Sarkar as result, though it works its actually wrong, it doesnot create variable in the current scope, javascript will create a property in global object
*/

//BASIC OPERATORS----------------------------------------------------------------------------------
/**/
//math operators
const now = 2021;
const ageMam = now - 1993;
const ageMiku = now - 1992;

console.log(ageMam, ageMiku);//can console multple values using comma
console.log(ageMam * 2, ageMiku / 10, 2 ** 3);
//2**3 means 2*2*2

const firstName = 'Gaurab';
const lastName = 'Sarkar';
console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5;
x += 10;
x *= 4; // x = x*4
x++; // x= x + 1
x--;
console.log(x);

//comparision operators( >, <, >=, <=)
console.log(ageMiku > ageMam);
console.log(ageMam >= 29);

const isFullAge = ageMiku >= 27;

console.log(now - 1991 > now - 2018);