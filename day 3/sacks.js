const fs = require("fs");

const inputFile = "input.txt";

function removeDuplicates(val) {
  return Array.from(new Set(val.split("")));
}

function downTheMiddleNoDupes(val) {
  return [
    removeDuplicates(val.slice(0, val.length / 2)),
    removeDuplicates(val.slice(val.length / 2, val.length)),
  ];
}

function whatIsTheRepeat(val) {
  for (let i = 0; i < val[0].length; i++) {
    if (val[1].includes(val[0][i])) {
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
  let splitNoDupe = split.map(downTheMiddleNoDupes);
  let commons = splitNoDupe.map(whatIsTheRepeat);
  let scores = commons.map(getPriority);

  console.log(scores.reduce((a, b) => a + b, 0));
});
