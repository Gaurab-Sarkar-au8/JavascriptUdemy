/*
1) Understanding the problem
- array transformed to string, sperated by ...
- what is the x days? answer: index + 1

2) breaking up into sub problems
- transform array into string
- transform each element to string with °C
- strings need to contain day (index + 1)
- Add ... between elements and start and end of string
*/

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let resultString = `...`;
  for (let i = 0; i < arr.length; i++) {
    resultString += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  return resultString;
};
console.log(printForecast(testData1));
console.log(printForecast(testData2));
