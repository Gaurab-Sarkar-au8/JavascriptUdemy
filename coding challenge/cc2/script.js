const markMass1 = 78;
const markHeight1 = 1.69;

const johnMass1 = 95;
const johnHeight1 = 1.95;

const markBMI1 = markMass1 / (markHeight1 ** 2);
const johnBMI1 = johnMass1 / (johnHeight1 ** 2);

if (markBMI1 > johnBMI1) {
  console.log(`Mark's BMI (${markBMI1}) is higher than Jhon's (${johnBMI1})!`);
} else {
  console.log(`Jhon's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
}
 console.log(`DONE!`);