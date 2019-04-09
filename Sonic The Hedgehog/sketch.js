// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let speed = 0;
let speed1 = 1;
let counter = 0;
let pinImages = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload() {
  for (let i = 1; i < 9; i++) {
    pinImages.push(loadImage('assets/SonicL-0' + i + '.png'));
  }
  for (let l = 1; l < 9; l++) {
    pinImages.push(loadImage('assets/SonicR-0' + l + '.png'));
  }
  for (let a = 1; a < 6; a++) {
    pinImages.push(loadImage('assets/SonicAFK0' + a + '.png'));
  }
}

function draw() {
  frameRate(60);
  background(220);

  image(pinImages[counter], speed, height / 2, 100, 200);

  if (key === "ArrowLeft") {
    speed--;
    if (frameCount % 1.5 === 0) {
      counter++;
      if (counter > 7) counter = 0;
    }
  }
  if (key === "ArrowRight") {
    speed++;
    if (frameCount % 1.5 === 0) {
      counter++;
      if (counter > 16) counter = 9;
    }
  }
  if (key === " ") {
    speed;
    if (frameCount % 20 === 0)
      counter++;
    if (counter > 20 || counter < 16) counter = 16;
  }
}
