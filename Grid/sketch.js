// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220); 
  for ( let i = 0; i < width; i += 20) {
    rect(x, y, 100 ,100);
  }
  //rect(width / 4, height / 4, width / 2, height / 2);
}
