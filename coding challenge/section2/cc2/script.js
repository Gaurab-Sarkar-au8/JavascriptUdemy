const calcTip = function(value) {
  if(value >= 50 && value <= 300) {
    return 0.15 * value; 
  } else {
    return 0.2 * value;
  }
}
//function using ternary operator
const calcTip1 = function(value) {
  return value >= 50 && value <=300 ? value * 0.15 : value * 0.2;
} 
//arrow function
const calcTip2 = value => value >= 50 && value <=300 ? value * 0.15 : value * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];
console.log(`Bills`, bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`Tips`, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`Total`, total);