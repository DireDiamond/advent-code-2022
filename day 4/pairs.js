const fs = require("fs");
const { listeners } = require("process");
const { arrayBuffer } = require("stream/consumers");

const inputFile = "input.txt";

function toNumber(val) {
  return Number(val);
}

function innerSplit(val) {
  let split = val.split("-");
  return split.map(toNumber);
}

function doubleSplit(val) {
  let split = val.split(",");
  return split.map(innerSplit);
}

function calc(val) {
  if (val[0][0] >= val[1][0] && val[0][0] <= val[1][1]) {
    return 1;
  }

  if (val[0][1] >= val[1][0] && val[0][1] <= val[1][1]) {
    return 1;
  }

  if (val[1][0] >= val[0][0] && val[1][0] <= val[0][1]) {
    return 1;
  }

  if (val[1][1] >= val[0][0] && val[1][1] <= val[0][1]) {
    return 1;
  }

  return 0;
}

fs.readFile(inputFile, { flag: "r", encoding: "utf-8" }, (err, data) => {
  let split = data.split("\r\n");
  let splits = split.map(doubleSplit);
  let scores = splits.map(calc);

  console.log(scores.reduce((a, b) => a + b, 0));
});
