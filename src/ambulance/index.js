const readline = require("readline");
// read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
});
// start reading
let K1, M, K2, P2, N2;
rl.on("line", (line) => {
  const l = line
    .trim()
    .split(" ")
    .map((e) => +e);
  [K1, M, K2, P2, N2] = l;
});
rl.on("close", () => {
  console.log(solveAmbulance(K1, M, K2, P2, N2).join(' '));
});

function solveAmbulance(K1, M, K2, P2, N2) {
  //* Находим среднее кол-во квартир на этаже
  //* номер квартиры / этаж = среднее количество квартир на этаж
  //* номер квартиры с учетом подъезда это как раз все этажи по отношению к номеру квартиры
  const avge = Math.floor(K2 / (N2 + M * (P2 - 1)));
  //* Средняя по подъезду
  const avgp = avge * M;
  //* Подъезд новой квартиры
  const P1 = Math.floor(K1 / avgp);
  //* Кол-во квартир до K1 в подъезде P1
  const G1 = K1 % avgp;
  //* Этаж N1
  const N1 = Math.floor(G1 / avge);
  return [P1, N1];
}
