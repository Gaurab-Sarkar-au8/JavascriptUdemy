percentageWorld1 = (population) => (population / 7900) * 100;

describePopulation = (country, population) => {
  percentage = percentageWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}

const india = describePopulation('India', 1000);
console.log(india);