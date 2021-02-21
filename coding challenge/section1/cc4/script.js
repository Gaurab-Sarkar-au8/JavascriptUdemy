let bill = 275;
let tip = 300 >= bill && bill >= 50 ? 0.15 * bill : 0.20 * bill;
console.log(`Bill:${bill}, Tip:${tip}, Final value:${bill+tip}`);

bill = 40;
tip = 300 >= bill && bill >= 50 ? 0.15 * bill : 0.20 * bill;
console.log(`Bill:${bill}, Tip:${tip}, Final value:${bill+tip}`);

bill = 430;
tip = 300 >= bill && bill >= 50 ? 0.15 * bill : 0.20 * bill;
console.log(`Bill:${bill}, Tip:${tip}, Final value:${bill+tip}`);