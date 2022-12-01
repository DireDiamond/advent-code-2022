const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");

const inputFile = "input.txt";

function toNumber(val) {
  return Number(val);
}

fs.readFile(inputFile, { flag: "r", encoding: "utf-8" }, (err, data) => {
  let split = data.split("\r\n");
  let calories = split.map(toNumber);

  let sums = [];
  let j = 0;
  let sum = 0;
  for (let i = 0; i < calories.length; i++) {
    if (calories[i] == 0) {
      sums[j] = sum;
      j++;
      sum = 0;
    } else {
      sum += calories[i];
    }
  }

  let three = 0;
  for (let i = 0; i < 3; i++) {
    three += Math.max.apply(null, sums);
    sums.splice(sums.indexOf(Math.max.apply(null, sums)), 1);
    }
    
  console.log(three);
});
