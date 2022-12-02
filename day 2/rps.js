const fs = require("fs");

const inputFile = "input.txt";

function judge_guess(val) {
  let sub_split = val.split(" ");

  if (sub_split[0] === "A") {
    if (sub_split[1] === "X") {
      return 4;
    }
    if (sub_split[1] === "Y") {
      return 8;
    }
    if (sub_split[1] === "Z") {
      return 3;
    }
  } else if (sub_split[0] === "B") {
    if (sub_split[1] === "X") {
      return 1;
    }
    if (sub_split[1] === "Y") {
      return 5;
    }
    if (sub_split[1] === "Z") {
      return 9;
    }
  } else {
    if (sub_split[1] === "X") {
      return 7;
    }
    if (sub_split[1] === "Y") {
      return 2;
    }
    if (sub_split[1] === "Z") {
      return 6;
    }
  }
}

function judge_real(val) {
  let sub_split = val.split(" ");

  if (sub_split[0] === "A") {
    if (sub_split[1] === "X") {
      return 3;
    }
    if (sub_split[1] === "Y") {
      return 4;
    }
    if (sub_split[1] === "Z") {
      return 8;
    }
  } else if (sub_split[0] === "B") {
    if (sub_split[1] === "X") {
      return 1;
    }
    if (sub_split[1] === "Y") {
      return 5;
    }
    if (sub_split[1] === "Z") {
      return 9;
    }
  } else {
    if (sub_split[1] === "X") {
      return 2;
    }
    if (sub_split[1] === "Y") {
      return 6;
    }
    if (sub_split[1] === "Z") {
      return 7;
    }
  }
}

fs.readFile(inputFile, { flag: "r", encoding: "utf-8" }, (err, data) => {
  let split = data.split("\r\n");

  let fakeScores = split.map(judge_guess);
  let realScores = split.map(judge_real);

  let fakeScore = 0;
  let realScore = 0;

  for (let i = 0; i < split.length; i++) {
    fakeScore += fakeScores[i];
    realScore += realScores[i];
  }

  console.log(fakeScore);
  console.log(realScore);
});
