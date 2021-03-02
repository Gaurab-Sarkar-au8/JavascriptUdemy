//ACTIVATING STRICT MODE---------------------------------------------------------------------------
/* 
//always write it at the top of the code
//we can also use it for specific code blocks
'use strict';
//1.strict mode forbids us to do certain things  2.it creates visible errors in certain situations in which without strict mode javascript will silently fail without letting us know thst we did a mistake
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//shows reserved words by javascript
const interface = 'Audio';
const private = 534;
//interfcae, private both words are reserved by javacript for future use
*/

//FUNCTIONS-----------------------------------------------------------------------------------------
/* 
//function is a peace of code which we can use again and again in our code
//like variables hold values, functions hold whole line of codes
function logger() {
  console.log('My name is Miku');
}
logger();//this is called calling / running / invoking a function
//function can receive data and return data back
logger();//this function doesnot return any value, technically its value is undefined;
console.log(typeof logger());

function fruitProcessor(apples, oranges) { //these are called paramters, they are like variables specific to only this function, these will get defined when the function is called
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);//the fruitProcessor(5, 0) is replaced by the return value 'juice'
console.log(appleJuice);
//we can also directly display the returned value
console.log(fruitProcessor(5, 0));//here we didnot capture the value, just logged it to the console

const appleOrangeJuice = fruitProcessor(2, 4);//these values which we are passing are called arguments
console.log(appleOrangeJuice);
console.log(typeof fruitProcessor(1,1));

//coding principle DRY : don't repeat yourself, functions helps to not write the same line of code again and again
Number('23'); //these are built in functions
*/ 

//FUNCTION DECLARATIONS VS EXPRESSIONS--------------------------------------------------------------
/*
//function declaration
const age = calcAge1(1990);//in function declaration we can call it even before it has been declared, but it is not so in function expression

function calcAge1(birthYear) {//parameer is the placeholder
  return 2037 - birthYear;
}
const age1 = calcAge1(1992);//argument is the actual value of the above placeholder
console.log(age1, age);

//function expression
const calcAge2 = function(birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

//functions are values, not types
*/

//ARROW FUNCTION---------------------------------------------------------------------------------
/*
//arrow function is an special form of function expression
//function expression
const calcAge2 = function(birthYear) {
  return 2037 - birthYear;
}
//arrow function
const calAge3 = birthYear => 2037 - birthYear;
//return happens implicitly
const yearsUntilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;//return is used explicitly because there is more than one line of code
}
console.log(yearsUntilRetirement(1992));

const yearsUntilRetirement1 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retire's in ${retirement} years.`
}
console.log(yearsUntilRetirement1(1992, 'Gaurab'));

//arrow functions doesnot get a 'this' keyword
*/

//FUNCTIONS CALLING OTHER FUNCTIONS-----------------------------------------------------------------
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2,3));
*/

//REVIEW FUNCTIONS--------------------------------------------------------------------------------
/*
const calcAge = function(birthYear) {
  return 2037 - birthYear;
}
const yearsUntilRetirement = function(birthYear, firstName)  {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} is retired`);//if we keep this after 'return' it would not be shown
    return -1;    
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

//INTRODUCTION TO ARRAYS---------------------------------------------------------------------------
/*
//arrays are data structures
//in programming we get data - process data - then give back data, for these we need to store data. thats why we need data structures
//the two most important data structure sin javascript are arrays and objects
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];//this is how we create array, it is called 'literal syntax'
console.log(friends);

const year = new Array(1991, 1994, 2008, 2021);//this is another way to create an array, 'Array' is function
console.log(friends[0]);//this is how we get the elements out
console.log(friends[2]);//these place values are called index and starts from '0'

console.log(friends.length);//length is a property to know how many elements an array have
console.log(friends[friends.length - 1]);//we can get the last element this way without knowing the index
friends[2] = 'Jay';
console.log(friends);
//though 'friends' value is defined by 'const' the value can be changed, because it is not a primitive value, only primmitive values are immutable, so array is mutable as i is not primitive
// friends = ['Bob', 'Alice']; //but this cnnot be done, we cannot replace the entire array

const firstName = 'Gaurab';
const gaurab = [firstName, 'Sarkar', 2037 - 1992, `teacher`, friends];//we can put variable, expression, and another array inside
console.log(gaurab); 
console.log(gaurab.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2019];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];//we can do function calls also from inside an array
console.log(ages);
*/

//BASIC ARRAY OPERATIONS(METHODS)------------------------------------------------------------------
/**/
//javascript has built in functions which we can apply on arrays, these are called 'methods'
/* 
const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
friends.push('Jay');
console.log(friends);
//push is a function, thus it returns something, it reurns a length
const newLength = friends.push('Gon');
console.log(newLength);

friends.unshift('Jhon');//new element at the start
//unshift also returns length
console.log(friends);

//Remove elements
friends.pop();//removes Last element
console.log(friends);
//pop function returns the removed element
console.log(friends.pop());

friends.shift(); //removes first element
console.log(friends);

console.log(friends.indexOf('Steven'));//tells the index of the element
console.log(friends.indexOf('Bob'));//if element is not there then it returns '-1'

console.log(friends.includes('Steven'));//es6 method for knwing index, it returns true or false
console.log(friends.includes('Bob'));

friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));//'includes' method includes strict equality for checking, thus in 23 it will give true, and in '23' it will give false

//we can use this method to write conditionals
if (friends.includes('Bob')) {
  console.log('You have a friend called Bob');
} else {
  console.log('You dont have friend called Bob');
}
*/

//INTRODUCTION TO OBJECTS--------------------------------------------------------------------------
/*
//like arrays, objects is another data structure in javascript
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];
//objects are key value pairs
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
//keys are also called properties, like object 'jonas' has property of firstName with value of 'Jonas'
//objects are most fundamental concept in the whole javascript language
//there are many ways of creating an object, using curly braces {} is the most simple way, and it is called the object litral syntax
//arrays for structured or ordered data because order of elements matters, objects for unstructured data, we get data from objects with respect to property names
*/

//DOT AND BRACKET NOTATION------------------------------------------------------------------------
/*
//we change and retrive data from object using dot and bracket notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);//properties are ordered alphabatically in console, thus order of properties doesnot matter

//getting properties with dot notation
console.log(jonas.firstName);//'.' dot is an operator which goes in the 'jonas' and brings back the property
//bracket notation
console.log(jonas['firstName']);//in this way we can write opertation inside the bracket and make it compute the property, for example:
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);//but this will not work in dot notation
//so use bracket notation for computation, or else use dot notation

const intrestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonas.intrestedIn);//undefined, because object 'jonas' has no property 'intrestedIn'
console.log(jonas[intrestedIn]);

if(jonas[intrestedIn]) {
  console.log(jonas[intrestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

//adding properties 
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

//challenge
//print 'Jonas has 3 best friends, and his best friend is called Michael'
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
//'jonas.friends' acts as an array so we can apply 'length' and '[0]' like we do in arrays
*/

//OBJECT METHODS------------------------------------------------------------------------------------
/*
//functions are values, so it means we can create a 'key : value' pair such that the 'value' is a 'function'
//any function attached to object is called 'method'
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function(birthYear) {
    return 2037 - birthYear;
  },

  //read birthyear directly from the object
  calcAge1: function() {
    console.log(this);//'this' is equal to 'jonas' object
    return 2037 - this.birthYear; //this.birthYear = jonas.birthYear, (if we write jonas.birthYear then also it will work, but if object name 'jonas' is changed above then it will create an error, thus we use 'this' keyword)
  },
  //'this' keyword or 'this' variable is basically equal to the object on which the method is called, it is equal to th object calling the method

  //store the value of function in the object, and call it when needed
  calcAge2: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
  }
};
//method is a property which holds a funcion value
console.log(jonas.calcAge(1990));
console.log(jonas['calcAge'](1992));

console.log(jonas.calcAge1());//the 'jonas' object is calling the method, so 'this' keyword will be equal to 'jonas'

//if we used to call jonas.calcAge1 multiple times then it is a heavier computation because for te same value four times computation is done, thus we use 'calcAge2' method, in this method we store the value by creating a property of the object named 'age' and calling it four times
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challange:
//"Jonas is a 46-year old teacher, and he has a drivers license"
const jonas1 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge4: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge4()}-year old ${this.job}, and he ${this.hasDriversLicense ?'a' : 'no'} drivers license`;
  } 
}
console.log(jonas1.getSummary());
//arrays are also objects, its just that they are special kind of objects, they have functions or methods that we can use to manipulate them like push, pop etc., these methods are built in, thus arrays are objects since they have methods
*/

//ITERATION: THE FOR LOOP---------------------------------------------------------------------------
/*
//like if/else statements, the other controlled structures are loops 
//loops allows us to automate the repititive tasks, thus important in every programming language
// console.log(`Lifting weights repitition 1 🏋️‍♂️`);
// console.log(`Lifting weights repitition 2 🏋️‍♂️`);
// console.log(`Lifting weights repitition 3 🏋️‍♂️`);
// console.log(`Lifting weights repitition 4 🏋️‍♂️`);
// console.log(`Lifting weights repitition 5 🏋️‍♂️`);
// console.log(`Lifting weights repitition 6 🏋️‍♂️`);
// console.log(`Lifting weights repitition 7 🏋️‍♂️`);
// console.log(`Lifting weights repitition 8 🏋️‍♂️`);
// console.log(`Lifting weights repitition 9 🏋️‍♂️`);
// console.log(`Lifting weights repitition 10 🏋️‍♂️`);
//this violates DRY principle, and also we have problem if there is any change required
//loops has three parts, 1.initial value of a counter, 2.logical condition that is evaluated before each iteration of loop( for loop keeps running while condition is TRUE, once the value becomes FALSE the loop stops), 3.increasing the counter, this takes place after the end of each iterartion
for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repitition ${rep} 🏋️‍♂️`);
}
*/

//LOOPING ARRAYS, BREAKING AND CONTINUING-----------------------------------------------------------
/**/
//one of the most used applications of for loop is to loop through arrays
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
//reading array
for(let i = 0; i < 5; i++){ //this is hardcoded, if new elements are added then it wont be shown
  console.log(jonas[i]);
}
for(let i = 0; i < jonas.length; i++){//new elements auomatically gets included
  console.log(jonas[i], typeof jonas[i]);
}

//filling an array
const types = [];//we create an empty array
const types1 = [];
for(let i = 0; i < jonas.length; i++) {
  types[i] = typeof jonas[i];
  //this can be also written as:
  types1.push(typeof jonas[i]);
}
console.log(types);
console.log(types1);

//another example of filling an array
const years = [1991, 2007, 1969, 2021];
const ages = [];

for(let i = 0; i < years.length; i++){
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
//continue is to exit the current iteraton of the loop and continue to the next one
//break is used to completely terminate the whole loop

console.log('---ONLY STRINGS---');
for(let i = 0; i < jonas.length; i++){
  if(typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('---BREAK WITH NUMBERS---');
for(let i = 0; i < jonas.length; i++){
  if(typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}




