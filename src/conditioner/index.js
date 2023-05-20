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
  const avaliableModes = ["freeze", "heat", "auto", "fan"];
  if (!avaliableModes.includes(mode)) return null;
  if (tRoom === tCond) return tRoom;
  if (mode === "auto") return tCond;
  if (mode === "fan") return tRoom;
  if (tRoom > tCond) {
    switch (mode) {
      case "freeze":
        return tCond;
      case "heat":
        return tRoom;
    }
  } else {
    switch (mode) {
      case "freeze":
        return tRoom;
      case "heat":
        return tCond;
    }
  }
}
