let time;
let score;
let inputLetter;

function setup() {
  createCanvas(200, 200);
  startGame();
}
function startGame() {
  inputLetter = "a";
  score = 0;
  time = 600;
}

function draw() {
  background(220);

  text("Time:" + time, 10, 20);
  text("Score:" + score, 10, 40);
  text("Press " + inputLetter, 50, 100);

  if (time > 0) {
    time--;
  } else {
    text("GGWP! Press to start again!", 20, 120);
  }
}
function mousePressed() {
  if (time === 0) {
    startGame();
  }
}
function keyPressed() {
  if (time <= 0) {
    return;
  }
  if (key == inputLetter) {
    score += 1;
    inputLetter = random("abcdefghijklmnopqrstuvwxyz".split(""));
  } else {
    score -= 1;
  }
}
