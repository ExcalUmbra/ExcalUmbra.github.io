// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const squareSize = 20;
let black = 0;
let squareX = 250;
let squareY = 250;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noLoop();
}

function drawRectangles(offset) {
  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {
      noStroke();
      setFill();
      rect(squareX+offset, squareY+offset, squareSize, squareSize);
      squareX -= squareSize;
      squareY -= squareSize;
    }
    setFill();
  }
}

function draw() {
  background(225);
  drawRectangles(600.4);
}
function setFill() {
  if (black === 0) {
    fill(random(255), random(255), random(255));
    black = 1;
  }
  else {
    fill(0);
    black = 0;
  }
}
