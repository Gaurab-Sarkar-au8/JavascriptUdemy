const myCountry = {
  country: 'India',
  capital: 'Delhi',
  language: 'Hindi',
  population: 1000,
  neighbours: ['Pakistan', 'China', 'Nepal', 'Bangladesh', 'Mayanmar'],

  describe: function() {
    console.log(this);
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`
  },

  checkIsland: function() {
    // this.neighbours.length === 0 ? this.isIsland = true : this.isIsland = false;
    // Even simpler version (see why this works...)
    this.isIsland = !Boolean(this.neighbours.length);
  }  
}
console.log(myCountry.describe());

myCountry.checkIsland();
console.log(myCountry.isIsland);