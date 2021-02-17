let dolphinsScoreAvg = (96 + 108 + 89) / 3;
let koalasScoreAvg = (88 + 91 + 110) / 3;

console.log(`Dolphins:${dolphinsScoreAvg} Koalas:${koalasScoreAvg}`)

if(dolphinsScoreAvg > koalasScoreAvg) {
 console.log('Dolphins are the winners!🏆');
} else if(dolphinsScoreAvg === koalasScoreAvg) {
  console.log('There is a Draw!🌟');
} else {
  console.log('Koalas are the winners!🏆');
}

//-----------------------------------------------------------------------------------------------

let dolphinsScoreAvg1 = (97 + 112 + 101) / 3;
let koalasScoreAvg1 = (109 + 95 + 123) / 3;

console.log(`BONUS1 Dolphins:${dolphinsScoreAvg1} Koalas:${koalasScoreAvg1}`)

if((dolphinsScoreAvg1 > koalasScoreAvg1) && (dolphinsScoreAvg1 >= 100)) {
 console.log('Dolphins are the winners!🏆');
} else if(dolphinsScoreAvg1 === koalasScoreAvg1) {
  console.log('There is a Draw!🌟');
} else if((dolphinsScoreAvg1 < koalasScoreAvg1) && (koalasScoreAvg1 >= 100)) {
  console.log('Koalas are the winners!🏆');
}

//-----------------------------------------------------------------------------------------------

let dolphinsScoreAvg2 = (97 + 112 + 101) / 3;
let koalasScoreAvg2 = (109 + 95 + 106) / 3;

console.log(`BONUS2 Dolphins:${dolphinsScoreAvg2} Koalas:${koalasScoreAvg2}`)

if((dolphinsScoreAvg2 > koalasScoreAvg2) && (dolphinsScoreAvg2 >= 100)) {
  console.log('Dolphins are the winners!🏆');
 } else if((dolphinsScoreAvg2 === koalasScoreAvg2) && (dolphinsScoreAvg2 >= 100) && (koalasScoreAvg2 >= 100)) {
   console.log('There is a Draw!🌟');
 } else if((dolphinsScoreAvg2 < koalasScoreAvg2) && (koalasScoreAvg2 >= 100)) {
   console.log('Koalas are the winners!🏆');
 } else {
   console.log('NO one wins the trophy!😔');
 }
