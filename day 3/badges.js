const fs = require("fs");

const inputFile = "input.txt";

function removeDuplicates(val) {
  return Array.from(new Set(val.split("")));
}

function trippletsNoDupes(val) {
  let temp = [];
  for (let i = 0; i < val.length; i += 3) {
    temp.push([
      removeDuplicates(val[i]),
      removeDuplicates(val[i + 1]),
      removeDuplicates(val[i + 2]),
    ]);
  }
  return temp;
}

function whatIsTheRepeat(val) {
  for (let i = 0; i < val[0].length; i++) {
    if (val[1].includes(val[0][i]) && val[2].includes(val[0][i])) {
      return val[0][i];
    }
  }
}

function getPriority(val) {
  if (val == val.toUpperCase()) {
    return val.charCodeAt(0) - 64 + 26;
  } else return val.charCodeAt(0) - 96;
}

fs.readFile(inputFile, { flag: "r", encoding: "utf-8" }, (err, data) => {
  let split = data.split("\r\n");
  let tripplets = trippletsNoDupes(split);
  let commons = tripplets.map(whatIsTheRepeat);
  let scores = commons.map(getPriority);

  console.log(commons);

  console.log(scores.reduce((a, b) => a + b, 0));
});
