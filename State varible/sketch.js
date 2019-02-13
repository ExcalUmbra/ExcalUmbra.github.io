// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0; //0 - top, 1 - right
//2 - bottom, 3 - left
const rectSize = 30;
x = 0;
y = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === 0) {//on top, going right
    x += 20;
    if (x > windowWidth - rectSize) state = 1;
  }
  else if (state === 1) {//on right, going
    y += 20;
    if (y > windowHeight - rectSize) state = 2;
  }
  else if (state === 2) {
    x -= 20;
    if (x <= 0) state = 3;
  }
  else if (state === 3) {
    y -= 20;
    if (y <= 0) state = 0;
  }
rect(x, y, rectSize, rectSize);
}
