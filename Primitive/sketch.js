// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;
let randomShapes = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (randomShapes === true) {
    ellipse(random(0, windowHeight), (random(0, windowWidth), 55, 55));
    if (key === "r") {
      randomShapes = !randomShapes;
    }
  }
}

function keyPressed() {
  fill(random(0, 255), random(0, 255), random(0, 255));
  if (key === "w") {
    rect(mouseX, mouseY, random(0, 255), random(0, 255));
  }
  if (key === "a") {
    rect(mouseX, mouseY, 60, 60, 40);
  }
  if (key === "s") {
    rect(mouseX, mouseY, 38, 31, 86, 20, 69, 63, 30, 76);
  }
  if (key === "d") {
    ellipse(mouseX, mouseY, random(20, 90), random(20, 90));
  }
  if (key === "b") {
    background(255);
  }
}