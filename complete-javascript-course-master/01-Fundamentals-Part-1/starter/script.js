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
/*
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
*/

//OPERATOR PRECEDENCE-------------------------------------------------------------------------------
/*
//mdn operator precedence(search in google)
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);//left to right execution

let x, y;
x = y = 25 - 10 - 5;//right to left execution
// first (25-10-5) is processed because '-' has higer precedence
//then x = y = 10, assignment operators comes thus right to left execution
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;//grouping or parenthesis has highest precedence
console.log(ageJonas, ageSarah, averageAge);
*/

//STRINGS & TEMPLATE LITERALS----------------------------------------------------------------------
/*
const firstName = 'Gaurab';
const job = 'student';
const birthYear = 1992;
const year = 2021;

const gaurab = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(gaurab);

const gaurabNew = `I'm ${firstName} and I'm a ${job}`;
console.log(gaurabNew);

console.log(`My age is 29`);

console.log('String with \n\
multiple \n\
lines');

console.log(`STRING WITH 
MULTIPLE 
LINES`);
*/

//TAKING DECISIONS: if / else STATEMENTS------------------------------------------------------------
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Person can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Person is too young. Wait another ${yearsLeft} years 😇`);
};
//else block is optional, if not created then also code will work
//this if/else statement is called controlled structure because we can control which code blogs can work and which cannot

const birthYear = 1993;
let century;//it is declared outside if/else because it wont be available outside if declared inside if/else
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

//TYPE CONVERSION AND COERCION----------------------------------------------------------------------
/*
//type conversion - when we manually convert type
//type coersion - when javascript changes type automatically

//type conversion:
const inputYear = '1991';
console.log(Number(inputYear), inputYear);//number is an inbuilt function
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));//reult will be NaN=Not a Number
console.log(typeof NaN);//Nan means invalid number because typeof NaN gives result number

console.log(String(21), 21);
//javascript can convert to three types - Number, String, Boolean
//cannot convert in undefined or NaN

//type coerccon:
console.log('I am '+ 28 +' years old');//coercion in string
console.log('10' - '5' - 2);//coercion in number
console.log('10' +'5' + 2);//corcion in string
console.log('23' * '2');//coercion in number
console.log('23' > '2');//coercion in number
//only plus operator does not converts it in numbers
console.log(2+3+4+'5');//ans - "95"
console.log('10'-'4'-'3'-2+'5');//ans - "15"
*/

//TRUTHY AND FALSY VALUES--------------------------------------------------------------------------
/*
//5 falsy values: 0, '', undefined, null, NaN (when we convert to boolean it gives the value of false)
console.log(Boolean(0));//false
console.log(Boolean(undefined));//flase
console.log(Boolean('Jonas'));//true
console.log(Boolean({}));//true (as it is an object)
console.log(Boolean(''));//false (only empty string gives the value of false)

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
}else{
  console.log('You should get a job');
}

let height; 
if (height) {
  console.log('YAY! Height is defined');
}else{
  console.log('Height is UNDEFINED');
}
//else block will be executed because height is not assisgned any value i.e undefined
*/

//EQUALITY OPERATORS: == VS === -------------------------------------------------------------------
/**/
const age = '18';
//=== comparision operator
//=== : strict equality oprator, it doesnot do type coercion
if(age === 18) console.log('You just became an adult :D (Strict)');
//== : loose equality operator
if(age == 18) console.log('You just became an adult :D (Loose)');
const favourite = prompt("What's your favourite number?");
console.log(favourite);//the number input will be stored in the form of string
console.log(typeof favourite);//can be checked with typeof

if(favourite == 23) { //'23' == 23 : type coercion will take place
  console.log('Cool! 23 is an amzing number!');
} else if (favourite === 7) { // else if for using more conditions
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}
// if === is used above it wont work

const favourites =  Number(prompt("What's your favourite number?"));
console.log(favourites);//the number input will be stored in the form of number
console.log(typeof favourites)
if (favourite !== 23) console.log('Why not 23?');//!== : strict, != : loose (different operator)



