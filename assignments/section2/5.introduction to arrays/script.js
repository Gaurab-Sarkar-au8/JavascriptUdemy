const populations = [1000, 200, 331, 224];
console.log(populations.length === 4);

const percentagezOfWorld1 = function(value) {
  return (value/7900)*100
}
const percentages = [
  percentagezOfWorld1(populations[0]), 
  percentagezOfWorld1(populations[1]), 
  percentagezOfWorld1(populations[2]), 
  percentagezOfWorld1(populations[3])
]; 

console.log(percentages);