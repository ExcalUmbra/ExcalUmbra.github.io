// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const squareSize = 20;
const dDouble = 20;
const Cube = 20;
let black = 0;
function setup() {
  createCanvas(3000, 4500);
  //rectMode(CENTER);
  noLoop();
}

function drawRectbottom(offSet) {
  for (let a = 0; a < width*2; a += dDouble) {
    noStroke();
    setFill();
    rect(a - offSet, a, dDouble/4, dDouble);
  }
  setFill();
}

function drawRectangles(offset) {
  for (let x = 0; x < width * 2; x += squareSize) {
    noStroke();
    setFill();
    rect(x + offset, x, squareSize, squareSize);
  }
  setFill();

}

function draw() {
  background(0);
  for (let a = -2000; a < 2000; a += 20) {
    drawRectbottom(a);
  }
  for (let x = -1250; x < 1250; x += 15) {
    drawRectangles(x);
  }
}

function setFill() {
  if (black === 0) {
    fill(random(255), random(255), random(255));
    black = 1;
  }
  else {
    fill(random(255));
    black = 0;
  }
}

function keyPressed() {
  if (key === " ") {
    save();
  }
}