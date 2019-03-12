// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xoff = 0;
let yoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  let x = map(noise(xoff), 0, 1, 0, width);
  let y = map(noise(yoff), 0, 1, 0, height);
  xoff += 0.01;
  yoff += 0.01;
  ellipse(x, 400, 0, 1000);
  ellipse(y, 400, 2000, 0);
}