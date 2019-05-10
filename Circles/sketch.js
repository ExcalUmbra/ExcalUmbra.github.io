// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  noLoop();
  noFill();
}

function draw() {
  //randomSeed(878);
  background(220);
  //fill(random(255),random(255),random(255));
  circles(width/2, height/2, height);
}

function circles(x, y, d){
  if (d > 1){
    ellipse(x,y,d,d);
    circles(x,y,d/1.3);
  }
}
