// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tWidth = 10;
let start = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNER);
  noLoop();
}



function drawTerrian() {
  //To draw Terrian
  let xOff = start;
  let highest = height;
  let highestX = 0;
  for (let x = 0; x < width; x += tWidth) {
    //rect(x, random(height), x + tWidth, height);
    let curHeight = noise(xOff) * height;
    rect(x, curHeight, x + tWidth, height);
    xOff += 0.012;
  }
  start += 0.4;
}

function draw() {
  background(0);
  drawTerrian();
}
