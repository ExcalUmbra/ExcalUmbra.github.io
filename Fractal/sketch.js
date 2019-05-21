// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let angle = 5;
let angleSpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
}

function draw() {
  fill(random(255),random(255),random(255));
  angle = map(mouseX, 0, width, -30, 30);
  angle += angleSpeed;
  if (angle < -20 || angle > 20) angleSpeed *= -1;
  background(0);
  push();
  rotateZ(radians(frameCount));
  for (let i = 0; i < 360; i += 45) {
    push();
    rotateZ(radians(i));
    boxes(50);
    pop();
  }
  pop();
}

function boxes(size) {
  if (size > 5) {
    rotateZ(radians(angle));
    translate(size * 1.8, 0);
    box(size);

    boxes(size * 0.8);
  }
}