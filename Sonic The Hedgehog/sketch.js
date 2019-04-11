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
  for (let s = 1; s < 6; s++) {
    pinImages.push(loadImage('assets/SonicAFKBW0' + s + '.png'));
  }
}

function draw() {
  frameRate(60);
  background(220);
  
  image(pinImages[counter], speed * 5, height * 0.3, 200, 300);
  //Left and Right Animation
  if (key === "ArrowLeft") {
    speed--;
    if (frameCount % 5 === 0) {
      counter++;
      if (counter > 7) counter = 0;
    }
  }
  if (key === "ArrowRight") {
    speed++;
    if (frameCount % 5 === 0) {
      counter++;
      if (counter > 16) counter = 9;
    }
  }
  //Idle Animation
  if (key === " ") {
    speed;
    if (frameCount % 20 === 0)
      counter++;
    if (counter > 20 || counter < 16) counter = 16;
  }
  if (key === "v") {
    speed;
    if (frameCount % 20 === 0)
      counter++;
    if (counter > 25 || counter < 22) counter = 22;
  }
}
