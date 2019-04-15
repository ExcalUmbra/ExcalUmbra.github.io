// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 0;
let y = 0;
let lengthSwap;
let on = true;
let Speed = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function mouseClicked() {
  on = !on;
}


function drawComposition() {
  x = random(width);
  y = random(height);
  if (on === true) {
    lengthSwap = int(random(1, 4));
    if (dist(x, y, width / 2, height / 2) < 200) {
      Speed++;
      //fill(random(255), random(255),random(255));
      fill(0);
      if (lengthSwap === 1) {
        rect(x, y, random(5, 20), 5);
      }
      else if (lengthSwap === 2) {
        rect(x, y, 5, random(5, 20));
      }
      else {
        rect(x, y, 5, 5);
      }
    }
  }
}

function draw() {
  //background(220);
  drawComposition();
}

function keyPressed() {
  if (key === " ") {
    save();
  }
}