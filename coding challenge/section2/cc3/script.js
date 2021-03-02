const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

mark.bmi < john.bmi ? 
console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${mark.bmi})!`) : 
console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})!`) ;





