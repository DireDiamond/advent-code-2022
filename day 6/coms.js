const fs = require("fs");
const { listeners } = require("process");
const { arrayBuffer } = require("stream/consumers");

const inputFile = "input.txt";

function check4(val) {
  let list = Array.from(new Set(val));
  return list.length;
}

fs.readFile(inputFile, { flag: "r", encoding: "utf-8" }, (err, data) => {
  let split = data.split("");

  for (let i = 0; i < split.length; i++) {
    if (
      check4([
        split[i],
        split[i + 1],
        split[i + 2],
        split[i + 3],
        split[i + 4],
        split[i + 5],
        split[i + 6],
        split[i + 7],
        split[i + 8],
        split[i + 9],
        split[i + 10],
        split[i + 11],
        split[i + 12],
        split[i + 13],
      ]) == 14
    ) {
      console.log(i + 14);
      return i + 14;
    }
  }
});
