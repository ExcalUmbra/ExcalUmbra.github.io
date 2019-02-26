// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let buttonX, buttonY, buttonSize;
let rectX, rectY, rectW, rectH;
let rectShade = 0;
let fadeIn = false;
let buttonOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width / 2;
  buttonY = height / 4;
  buttonSize = 50;
  rectX = width / 2;
  rectY = height * 0.6;
  rectW = width / 2;
  rectH = height * 0.4;
  noStroke();
  ellipseMode(CENTER);
  rectMode(CENTER);
}
function mouseDistance(x1, y1, x2, y2) {
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a) + sq(b));
  return c;
}
function draw() {
  print(mouseDistance(mouseX, mouseY, buttonX, buttonY));
  background(255);
  //draw a circle
  if (mouseDistance(mouseX, mouseY, buttonX, buttonY) < buttonSize / 2) {
    fill(40, 20, 30);
  }
  else {
    fill(75, 60, 65);
    buttonOver = false;
  }
  ellipse(buttonX, buttonY, buttonSize, buttonSize);
  //draw a rectangle
  if (fadeIn = true); {
    rectShade += 2;
  }
  fill(rectShade);
  rect(rectX, rectY, rectW, rectH);
}
function mousePressed() {
  if (buttonOver) {

  }
}