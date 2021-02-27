const neighbours = ['India', 'Pakistan', 'China'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')) {
  console.log('Probalbly not a central European Country :D');
}

neighbours[neighbours.indexOf('Pakistan')] = 'Bangladesh';
console.log(neighbours);