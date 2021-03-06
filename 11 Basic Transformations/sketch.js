// Basic Transformations Sandbox


// let originalSpacing = 20;
// let x = 100;
// let y = 100;
// let xSpeed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background option 1
  //background(255);
  //background option 2
  // fill(255, 20);
  // rect(0,0,width,height);
  // drawBasicGrid(220);
  push();
  translate(400, 400);
  circleBlack(0, 0);

  //drawBasicGrid(220);
  pop();
  //transformation one: TRANSLATION
  // push();
  // translate(100,20);
  // rectangleRed(0,40);
  // pop();

  // push();
  // translate(mouseX, mouseY);
  // drawBasicGrid(220);
  // rectangleBlue(0,0);
  // pop();
  //add push()  pop()
  // rectangleRed(0,0);
  // push();
  // rectMode(CENTER);
  // scale(mouseX/100);
  // translate(100,100);
  // drawBasicGrid(50);
  // rectangleBlue(0,0);
  // pop();

  //transformation two: SCALE

  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  // push();
  // translate(x,60);
  // rotate(radians(frameCount));
  //drawBasicGrid(50);
  // face(mouseX,mouseY);
  // pop();

  // x += xSpeed;
  // if (x < 0 || x > width) {
  //   xSpeed += -1;
  // }
  //Combinations of Transformations

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x, y);
  ellipseMode(CENTER);
  fill(200, 200, 0);
  stroke(0);
  ellipse(0, 0, 80, 80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25, 0, 10, 10);
  ellipse(25, 0, 10, 10);
  strokeWeight(5);
  line(-30, -10, 30, -10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }
}

function circleBlack(x, y) {
  stroke(100);
  fill(255);
  ellipse(x, y, 400, 400, 300);
  stroke(50);
  fill(0);
  ellipse(x, y, 10, 10, 5);
}