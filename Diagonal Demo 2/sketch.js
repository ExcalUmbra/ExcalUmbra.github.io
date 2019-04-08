// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const squareSize = 15;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noLoop();
}

function drawRectangles() {
  for (let x = squareSize / 2; x < width - squareSize / 2; x += squareSize) {
    for (let y = squareSize / 2; y < height - squareSize / 2; y += squareSize) {
      push();
      translate(x,y);
      let rMount = map(y,0, height,0,100);
      rotate(radians(random(-rMount,rMount)));
      let offSet = map(y,0,height,0,15);
      rect(random(-offSet, offSet),random(-offSet, offSet),squareSize, squareSize);
      pop();
    }
  }
}
function draw() {
  background(220);
  drawRectangles();
}
