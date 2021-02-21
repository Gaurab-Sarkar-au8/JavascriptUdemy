calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


const checkWinner = function(avgDolphins, avgKoalas) {
  if(avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if(avgKoalas >= avgDolphins * 2) {
    console.log(`Dolphins win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins!!`)
  }
}

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(`TEST DATA 1
Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`);
checkWinner(avgDolphins, avgKoalas);

const avgDolphins1 = calcAverage(85, 54, 41);
const avgKoalas1 = calcAverage(23, 34, 27);
console.log(`TEST DATA 2
Dolphins: ${avgDolphins1}, Koalas: ${avgKoalas1}`);
checkWinner(avgDolphins1, avgKoalas1);