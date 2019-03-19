// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Image Demo
let lionL, lionR;
let direction = 1;
let pinImages = [];
// 1 - moving left
// 2 = moving right
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function preload() {
  lionL = loadImage('assets/lion-left.png');
  lionR = loadImage('assets/lion-right.png');
  pinImages.push(loadImage('assets/pin-00.png'));
}

function draw() {

  background(220);
  moving();
  imageMode(CENTER);
  push();
  translate(mouseX, mouseY);
  scale(0.5);
  if (direction === 1) {
    image(lionL, 0, 0);
  }
  else {
    image(lionR, 0, 0);
  }
  pop();
}

function moving() {
  if (mouseX > pmouseX) {
    direction = 2;
  }
  else if (mouseX < pmouseX) {
    direction = 1;
  }
}