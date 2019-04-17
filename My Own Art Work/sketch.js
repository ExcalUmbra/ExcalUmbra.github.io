// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const squareSize = 20;
let black = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //rectMode(CENTER);
  noLoop();
}

function drawRectangles(offset) {
  for (let x = 0; x < width; x += squareSize) {
    noStroke();
    setFill();
    rect(x + offset, x, squareSize, squareSize);
  }
  setFill();
}



function draw() {
  background(225);
  for (let x = 0; x < 200; x += 50) {
    drawRectangles(x);
  }

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
