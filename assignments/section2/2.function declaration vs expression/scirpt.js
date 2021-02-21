function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const china = percentageOfWorld1(1441);
const india = percentageOfWorld1(1000);
const pakistan = percentageOfWorld1(500);
console.log(china, india, pakistan);

const percentageOfWorld2 = function(population) {
  return (population / 7900) * 100;
}

const kabul = percentageOfWorld2(200);
const egypt = percentageOfWorld2(900);
const siberia = percentageOfWorld2(600);
console.log(kabul, egypt, siberia);