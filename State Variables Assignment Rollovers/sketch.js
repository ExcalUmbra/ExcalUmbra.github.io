// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let quadrant = 1;
let mouseOver = false;
let q1fill = 255;
let q2fill = 255;
let q3fill = 255;
let q4fill = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
}
function determineQuadrant() {
  if (mouseX < width / 2) { //left side
    if (mouseY < height / 2) quadrant = 1;  //top L
    else quadrant = 3;  //bottom L
  }
  else { //right side
    if (mouseY < height / 2) quadrant = 2; //top R
    else quadrant = 4; //bottom R
  }
}
function draw() {
  background(255);
  mouseOver = false;
  if (mouseX, mouseY, mouseOver) {
    //fill(random(0, 255), random(0, 255), random(0, 255));
    mouseOver = true;
  }
  determineQuadrant();
  print(quadrant);
  rectMode(CENTER);

  if (quadrant === 1) {
    if(q1fill < 255) {
      q1fill = q1fill += 5;
    }
  }
  else {
    if (q1fill > 0) {
      q1fill = q1fill -= 5;
    }
  }
  if (quadrant === 3) {
    if(q2fill < 255) {
      q2fill = q2fill += 5;
    }
  }
  else {
    if (q2fill > 0) {
      q2fill = q2fill -= 5;
    }
  }
  if (quadrant === 2) {
    if(q3fill < 255) {
      q3fill = q3fill += 5;
    }
  }
  else {
    if (q3fill > 0) {
      q3fill = q3fill -= 5;
    }
  }
  if (quadrant === 4) {
    if(q4fill < 255) {
      q4fill = q4fill += 5;
    }
  }
  else {
    if (q4fill > 0) {
      q4fill = q4fill -= 5;
    }
  }

  fill(q1fill);
  rect(width / 4, height / 4, width / 2, height / 2);

  fill(q2fill);
  rect(width / 4, height - height / 4, width / 2, height / 2);

  fill(q3fill);
  rect(width - width / 4, height / 4, width / 2, height / 2);

  fill(q4fill);
  rect(width - width / 4, height - height / 4, width / 2, height / 2);
}