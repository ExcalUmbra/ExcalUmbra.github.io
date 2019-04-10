// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 10;
let rectHeight = 50;
let colors = [];
let counter = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  drawRowRGB(height * 0.2);
  drawRowHSB(height /2);
  drawRowCustom(height * 0.8);
}

function drawRowCustom(yPos) {
  colorMode(RGB);
  for (let x = 0; x < width; x += rectWidth) {
    fill(colors[counter%5]);
    rect(x, yPos, rectWidth, rectHeight);
    counter++;
  }
}

function drawRowHSB(yPos) {
  colorMode(HSB, 360);
  for (let x = 0; x < width; x += rectWidth) {
    fill(x / 10 % 360, 280, 330);
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function drawRowRGB(yPos) {
  colorMode(RGB);
  for (let x = 0; x < width; x += rectWidth) {
    fill(random(255), random(255), random(255));
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function draw() {
  //background(220);
}
