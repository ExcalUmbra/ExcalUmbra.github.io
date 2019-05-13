// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let angle = 5;
let angleSpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  smooth();
}

function draw() {
  //angle = map(mouseX, 0, width, -120 , 120);
  angle = angleSpeed;
  if (angle < -40 || angle > 40)angleSpeed*
  background(220);
  push();
  for (let i = 0; i < 500; i+= 49){
    push();

  }
  // rotateX(radians(frameCount));
  // rotateY(radians(frameCount));
  // sphere(250);
  pop(100);
}

function boxes(size){
  if (size > 20){
    rotateZ(angle);
    translate(size*1,5,0);
    box(size);

    boxes()
  }
}