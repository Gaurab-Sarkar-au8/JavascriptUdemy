const populaions = [1000, 1221, 1450, 200];
const percentages2 = [];

const percentageOfWorld1 = function(value) {
  return (value / 7900) * 100;
}

for(let i = 0; i < populaions.length; i++){
  percentages2.push(percentageOfWorld1(populaions[i]));
}

console.log(percentages2);