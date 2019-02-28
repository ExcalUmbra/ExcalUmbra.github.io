// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 800;
let y = 400;
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colors.push(color(255,0,0));
  colors.push(color(0,20,0));
  colors.push(color(0,0,200));
  colors.push(color(255,0,20));
  colors.push(color(25,0,255));

}

function drawTargetWhile(){
  let diameter = 200;
  let counter = 0;
  while (counter < 5){
    ellipse(width/2, height/2,diameter, diameter);
    diameter -= 40;
    counter ++;
  }
}

function drawTargetFor(){
  
  for (let i = 5; i > 0; i--){
    fill(colors[i-1]);
    ellipse(x,y,i*200, i*200);
  }
}

function draw() {
  background(220);
  //drawTargetWhile();
  drawTargetFor();
}