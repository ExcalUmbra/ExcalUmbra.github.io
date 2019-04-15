// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let tWidth = 1;
let start = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  //noLoop();
}


function drawTerrain() {
  let xOff = start;
  for (let x = 0; x < width; x += tWidth) {
    let curHeight = noise(xOff) * height * 0.5;
    stroke(0);
    rect(x, curHeight, x + tWidth, height);
  }
  xOff += 0.01;
}
function draw() {
  background(220);
  drawTerrain();
}
