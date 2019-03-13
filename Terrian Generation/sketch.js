// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lineX = 0;
let lineY = 0;

function setup() {
  background(240);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(0);
  noStroke();
  rect(lineX,lineY, 200, 16, 16);
  lineX = lineX + 5;
}
