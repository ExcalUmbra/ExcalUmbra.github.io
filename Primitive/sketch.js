// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let anonymous = 150;
let randomShapes = false;
let x = 500;
let y = 500;
let N = "By Allan";

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  if (randomShapes === true) {
    ellipse(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
    triangle(random(30, windowWidth), random(75, windowHeight), random(58, windowWidth), random(20, windowHeight), random(86, windowWidth), random(75, windowHeight));
    rect(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
  }
  ellipse(anonymous, 300, 300, 300, 300);
  fill(random(0, 255), random(0, 255), random(0, 255));
  anonymous += 0;
  if (anonymous > width + 100) {
    anonymous = 10;
  }
}
function keyPressed() {
  if (key === "r") {
    randomShapes = !randomShapes;
    return false;
  }
  fill(random(0, 255), random(0, 255), random(0, 255));
  if (key === "w") {
    rect(mouseX, mouseY, random(30, 260), random(30, 260));
  }
  if (key === "a") {
    rect(mouseX, mouseY, 60, 60, 30);
  }
  if (key === "s") {
    triangle(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
  }
  if (key === "d") {
    ellipse(mouseX, mouseY, random(20, 90), random(20, 90));
  }
  if (key === "b") {
    background(255);
  }
  text(); {
    textSize(64);
    fill(80);
    text(N, 20, 20, 280, 160);
  }
}