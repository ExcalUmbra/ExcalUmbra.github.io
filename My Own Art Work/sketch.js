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
  createCanvas(windowWidth, windowHeight);
  //rectMode(CENTER);
  noLoop();
}
function drawRecttop(OffSet) {
  for (let b = 0; b < width / 4; b += Cube) {
    for (let y = 0; y < height / 4; y += Cube) {
      noStroke();
      setFill();
      rect(b - OffSet, y - OffSet, b, y, Cube / 2, Cube);
    }
  }
  setFill();
}
function drawRectbottom(offSet) {
  for (let a = 500; a < width/4; a += dDouble) {
    for (let s = 0; s < height/4; s += dDouble) {
      noStroke();
      setFill();
      rect(a - offSet, s + offSet, a,s, dDouble / 2, dDouble);
    }
  }
  setFill();
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
  background(0);
  for (let b = -400; b < 200; b += 20) {
    drawRecttop(b);
  }
  for (let a = -250; a < 400; a += 20) {
    drawRectbottom(a);
  }
  for (let x = -150; x < 150; x += 25) {
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
