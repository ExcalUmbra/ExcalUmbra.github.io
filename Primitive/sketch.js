// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(...);
  rect(10, 10, 150, 55);
  fill(255);
  rect(110, 20, 35, 35);
}

function keyPressed() {
  fill(random(0, 255), random(0, 255), random(0, 255));
  if (key === "w") {
    ellipse(mouseX, mouseY, random(30, 20), random(0, 255));
  }
  if (key === "a") {
    ellipse(mouseX, mouseY, random(10 ,255), random(10, 255));
  }
  if (key === "s") {
    ellipse(mouseX, mouseY, random(21 ,255), random(21, 255));
  }
  if (key === "d") {
    ellipse(mouseX, mouseY, random(20 ,90), random(20, 90));
  }
}
function mouse