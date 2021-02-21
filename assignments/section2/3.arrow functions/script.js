percentageOfWorld3 = (population, countryName) =>{
  const percent = (population/7900) * 100;
  console.log(`${countryName}'s population percentage ${percent}`)
} 

const china = percentageOfWorld3(1441, 'China');
const india = percentageOfWorld3(1000, 'India');
