const country = "India";
let population = 49;
const language = 'English';
const island = false;

const sarahPopulation = (population < 50) ;
const sarahisland = (!island == true);
const sarahLanguage = (language === 'English');

if(sarahPopulation && sarahisland && sarahLanguage) {
  console.log(`You should live in ${country} :)`);
}else {
  console.log(`${country} doesnot meet your criteria :(`);
}