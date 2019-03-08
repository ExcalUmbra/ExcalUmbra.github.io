// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let colour = 0;
let positionX = 0;
let positionY = 0;
let rSize = 20;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(0);
  //stroke(255);
  //strokeWeight(2);
  noStroke();
  drawGrid();
}
function mousePressed() {
  if (mouseButton === LEFT) {
    rSize = rSize + 5;
    drawGrid();
  }
  if (mouseButton === RIGHT) {
    rSize = rSize - 5;
    drawGrid();
  }
}
function drawGrid() {
  positionX = 0;
  positionY = 0;
  for (let i = 0; i < width * height; i++) {
    fill(0, 0, random(255));
    rect(positionX, positionY, rSize, rSize);
    positionX = positionX + rSize;
    if (positionX >= width) {
      positionY = positionY + rSize;
      positionX = 0;
    }
  }
}
