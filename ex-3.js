// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];

let min = studentScores [0];

  for (let i = 1; i < studentScores.length; i++) {
    if (studentScores[i] < min) {
      min = studentScores[i];
    }
  }

  console.log(min);
