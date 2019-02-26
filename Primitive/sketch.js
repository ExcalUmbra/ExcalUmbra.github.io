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

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  if (randomShapes === true) {
    ellipse(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
    triangle(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
    rect(x, y, random(30, 260), random(30, 260));
    
  }
  ellipse(anonymous, 240, 240, 200, 200);
  fill(random(0, 255), random(0, 255), random(0, 255));
  anonymous += 15;
  if(anonymous > width + 100){
    anonymous = 10;
  }
}

function keyPressed() {
  if (key === "r") {
    if (randomShapes === false) {
      randomShapes = !randomShapes;
      return false;
    }
  }
  fill(random(0, 255), random(0, 255), random(0, 255));
  if (key === "w") {
    rect(mouseX, mouseY, random(30, 260), random(30, 260));
  }
  if (key === "a") {
    rect(mouseX, mouseY, random(0, 255), random(0, 255), random(0, 255));
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
}