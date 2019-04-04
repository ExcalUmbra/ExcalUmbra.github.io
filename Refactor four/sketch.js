// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let black = 0;
//Chess Board
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let x = 0; x < width; x += width/8) {
    for (let y = 0; y < height; y += height/8) {
      setFill();
      rect(x, y, width/8, height/8);
    }
    setFill();
  }
}

function setFill(){
  if (black === 0) {
    fill(255);
    black = 1;
  }
  else {
    fill(0);
    black = 0;
  }
}
