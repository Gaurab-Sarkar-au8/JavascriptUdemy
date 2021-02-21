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
/* */
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
 




