const readline = require("readline");
// read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
});
// start reading
let lineCounter = 0;
let a, b, c;
rl.on("line", (line) => {
  const l = +line.trim();
  switch (lineCounter) {
    case 0:
      a = l;
      break;
    case 1:
      b = l;
      break;
    case 2:
      c = l;
      break;
    default:
      break;
  }
  lineCounter++;
});
rl.on("close", () => {
  console.log(solveEquation(a, b, c));
});
// sqrt(ax+b) = c
// c >= 0
// ax + b = c^2
// x = (c^2 - b) / a
function solveEquation(a, b, c) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c))
    return null;
  if (c < 0) return "NO SOLUTION";
  if (a === 0) {
    if (c ** 2 === b) return "MANY SOLUTIONS";
    return "NO SOLUTION";
  }
  return Math.trunc((c ** 2 - b) / a);
}
