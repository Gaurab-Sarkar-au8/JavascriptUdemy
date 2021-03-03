const populaions = [1000, 1221, 1450, 200];
const percentages2 = [];
const percentages3 = [];

const percentageOfWorld1 = function(value) {
  return (value / 7900) * 100;
}

//for loop
for(let i = 0; i < populaions.length; i++){
  percentages2.push(percentageOfWorld1(populaions[i]));
}

//while loop
let i = 0;
while(i < populaions.length){
  percentages3.push(percentageOfWorld1(populaions[i]));
  i++;
}

console.log(percentages2);
console.log(`WHILE: `,percentages3);