// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tWidth = 80;
let start = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNER);
  //noLoop();
}



function drawTerrian() {
  //To draw Terrian
  let xOff = start;
  let highest = height;
  let highestX = 0;
  for (let x = 0; x < width; x += tWidth) {
    //rect(x, random(height), x + tWidth, height);
    let curHeight = noise(xOff) * height;
    //fill(random(255),random(255),random(255));
    rect(x, curHeight / 2, x + tWidth, height / 2);
    xOff += 0.05;
  }
  start += 0.01;
}

function draw() {
  background(0);
  drawTerrian();
}
