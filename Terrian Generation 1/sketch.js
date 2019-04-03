// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let peeky;
let tWidth = 1;
let start = 0;
let start2 = 40;
let start3 = 80;
let highest;
let highestX = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  highest = height;
  peeky = height;
  rectMode(CORNERS);
  //noLoop();
}
function drawTerrain() {
  peeky = height;
  //do all the work to draw terrain 1 frame
  let xOff = start;
  for (let x = 0; x < width; x += tWidth) {
    let curHeight = noise(xOff) * height * 0.5;
    stroke(0);
    rect(x, curHeight, x + tWidth, height);
    if (curHeight < peeky) {
      peeky = curHeight;
      highestX = x;
    }
    xOff += 0.01;
  }
  drawflag(highestX, peeky);
  start += 0.01;
}
function draw() {
  background(220);
  drawTerrain();
}
function drawflag(x, y) {
  stroke(255, 0, 0);
  line(x, y, x, y - 20);
  line(x + 10, y - 15, x, y - 20);
  line(x + 10, y - 15, x,y - 10);
}