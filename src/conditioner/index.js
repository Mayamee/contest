const readline = require("readline");
// read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
});
// start reading
let lineCounter = 0;
let tRoom, tCond;
let mode;
rl.on("line", (line) => {
  if (lineCounter === 0) {
    [tRoom, tCond] = line.split(" ").map((e) => +e);
  }
  if (lineCounter === 1) {
    mode = line;
  }
  lineCounter++;
});
rl.on("close", () => {
  console.log(solveConditioner(tRoom, tCond, mode));
});
function solveConditioner(tRoom, tCond, mode) {
  return {
    tRoom,
    tCond,
    mode,
  };
}
