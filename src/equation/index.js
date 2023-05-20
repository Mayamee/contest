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
  if (a + b === c ** 2 && 2 * a + b === c ** 2) {
    return "MANY SOLUTIONS";
  }
  if (a === 0) return "NO SOLUTION";
  const ans = (c ** 2 - b) / a;
  const trunced = Math.trunc(ans);
  if (ans !== trunced) return "NO SOLUTION";
  return ans;
}
