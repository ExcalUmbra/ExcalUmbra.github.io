// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mySound;
function preload(){
  mySound = loadSound("assets/energy.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySound.setvolume(5);
  mySound.play();
}

function draw() {
  background(220);
}
