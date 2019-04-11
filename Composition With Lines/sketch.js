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

function drawComposition() {
  x = random(width);
  y = random(height);
  if (dist(x,y,width/2, height/2)< 200){
    ellipse(x,y,20 ,20);
  }
}


function draw() {
  //background(220);
  drawComposition();
}