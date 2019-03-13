// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//let xoff1 = 0;
//let xoff2 = 10000;

let xOff = 0.03;
let inc = 0.06;
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  xOff = start;
  beginShape();
  for (let x = 0; x < width; x++) {
    stroke(255);
    //let y = random(height);
    let y = noise(xOff) * 10 + height / 2 + sin(xOff) * height / 2;
    vertex(x, y);
    xOff += inc;
  }
  endShape();
  start += inc;
  //let x = map(noise(xoff1), 0, 1, 0, width);
  //let y = map(noise(xoff2), 0, 1, 0, width);
  //xoff1 += 0.02;
  //xoff2 += 0.02;
  //ellipse(x, y, 24, 24);
}
