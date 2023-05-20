const readline = require("readline");
// read data from stdin
const rl = readline.createInterface({
  input: process.stdin,
});
// start reading
let lineCounter = 0;
let listNumbers = [];
rl.on("line", (line) => {
  const l = line.trim();
  switch (lineCounter) {
    case 0:
      listNumbers.push(l);
      break;
    case 1:
      listNumbers.push(l);
      break;
    case 2:
      listNumbers.push(l);
      break;
    case 3:
      listNumbers.push(l);
      break;
  }
  lineCounter++;
});
rl.on("close", () => {
  if (listNumbers.every((v) => v.length === 0)) return null;
  const normalizedPhones = listNumbers.map(normalizePhoneNumber);
  const [numberToAdd, ...persistedPhones] = normalizedPhones;
  for (let persistedPhone of persistedPhones) {
    console.log(
      validatePhoneNumber(numberToAdd, persistedPhone) ? "YES" : "NO"
    );
  }
});
function validatePhoneNumber(number1, number2) {
  return (
    number1 === number2 ||
    number1 === "495" + number2 ||
    "495" + number1 === number2
  );
}
function normalizePhoneNumber(phoneNumber) {
  return phoneNumber.replace(/(^\+7)|(^8)|([\-\+\(\)])/g, "");
}
