const readline = require("readline");
// read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
});
// start reading
let K1, M, K2, P2, N2;
rl.on("line", (line) => {
  [K1, M, K2, P2, N2] = line.trim();
});
rl.on("close", () => {
  console.log(solveAmbulance(K1, M, K2, P2, N2));
});

function solveAmbulance(K1, M, K2, P2, N2) {
  //* Находим среднее кол-во квартир на этаже
	//* номер квартиры / этаж = среднее количество квартир на этаж
	//* номер квартиры с учетом подъезда это как раз все этажи по отношению к номеру квартиры
  const avg = Math.ceil(K2 / (N2 + M * (P2 - 1)));
	//* Подъезд новой квартиры
	const P1 = 
	
}
