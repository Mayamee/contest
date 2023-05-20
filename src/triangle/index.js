const readline = require("readline");
// read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
});
// start reading
let A, B, C;
let lineCounter = 0;
rl.on("line", (line) => {
  const l = Number(line.trim());
  switch (lineCounter) {
    case 0:
      A = l;
      break;
    case 1:
      B = l;
      break;
    case 2:
      C = l;
      break;
  }
  lineCounter++;
});
rl.on("close", () => {
  console.log(solveTriangle(A, B, C));
});
function solveTriangle(A, B, C) {
  const isNumber = (n) => typeof n === "number";
  if (!isNumber(A) || !isNumber(B) || !isNumber(C)) return null;
  const condition = A + B > C && B + C > A && A + C > B;
  return condition ? "YES" : "NO";
}
