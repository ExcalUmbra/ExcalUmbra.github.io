// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let direction = 1;
let SonicL, SonicR;
let pinImages = [];
let counter = 0;
let speed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload() {
  SonicL = loadImage('assets/Sonic2-00.png');
  SonicR = loadImage('assets/Sonic1.png');
  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage('assets/Sonic' + i + '.png'));
  }
  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage('assets/Sonic2-0' + i + '.png'));
  }
}

function draw() {
  background(220);
  Sonic();
  imageMode(CENTER);
  push();
  translate(mouseX, mouseY);
  scale(2);
  image(pinImages[counter], width / 5, height / 5);
  speed = map(mouseX, 0, width, 1, 8);
  if (frameCount % int(speed) === 0) {
    counter++;
    if (counter > 8) counter = 0;
  }
  pop();
}

function Sonic() {
  moving();
  imageMode(CENTER);
  push();
  translate(mouseX, mouseY);
  scale(1);
  if (direction === 1) {
    image(SonicL, 0, 0);
  }
  else {
    image(SonicR, 0, 0);
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