const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
}

console.log(`test `,calcTip(100));

// for(let i = 0; i < bills.length; i++){
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }

//another way of doing it:
for(let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(`BILLS `, bills);
console.log(`TIPS`, tips);
console.log(`TOTALS`, totals);

//BONUS
const arr = [10, 20, 30, 40];
const calcAverage = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(`Average:`, calcAverage(arr));
console.log(`Totals average:`, calcAverage(totals));
console.log(`Tips average`, calcAverage(tips));