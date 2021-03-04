// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//SETTING UP PRETTIER AND VS CODE-------------------------------------------------------------------
/*
//PRETTIER----------------
//prettier is an opienated code formatter, which means it makes assumptions about how good code should look like, so if we use it the code will be nicely formatted

//after installing prettier, second step is to define prettier as the default formatter of our code

const x = '27';
if (x == 27) console.log(x);

//DOCS: https://prettier.io/docs/en/options.html (for editing prettier)
//easiest way to configure pretier is to create a configuration file in the current project folder '.prettierrc'

//SNIPPETS---------------
//files => prferences => user snippets => new global snippets file => then enter the 'name' for the file
console.log();
*/

//INSTALLING NODE JS AND SETTING UP A DEV ENVIRONMENT-----------------------------------------------
/*
//Live server
//we can create live server 1.either by installing the vs code extension, 2.another way(professional way) is to use node js and npm package
//1.METHOD: download 'live server' extension, bottom right corner of screen press 'Go Live' button which has appeared after installation
//2.METHOD: install node js(node js is a javascript runtime, node js is a way of running javascript outside the browser and also runnning development tools like the 'live server'), then install npm package named 'live server'

//install node js, open terminal and type 'node-v', this will give version of npm, then type in terminal 'npm install live-server -g' for installing live server, '-g' means globally this will make live server available all over the computer
//npm is node package manager, which is basically a program to download tools
//now if you type 'live-server' in terminal and press enter, it will start
console.log(`javascript is funny`);
*/

//USING GOOGLE, StackOverflow and MDN--------------------------------------------------------------
/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperature amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};
calcTempAmplitude([100, 500, 201, -201]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implemen functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  let temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temperatures, [100, 200, 50]);
console.log(amplitudeNew);
*/
//DEBUGGING WITH THE CONSOLE AND BREAKPOINTS---------------------------------------------------
//First using console---
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // C) FIX
    // value: Number(prompt('Degree Celcius')),
    // value: prompt('Degree Celcius'),

    value: 10,
  };

  // B) FIND
  console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

//Second using debugger in google chrome---
//open console, click 'Sources' tab on right side, then press 'Page' and then 'script.js' on left side
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitudeBug = function (t1, t2) {
  let temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug(temperatures, [100, 200, 50]);
// A) IDENTIFY
console.log(amplitudeBug);
