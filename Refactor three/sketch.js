// Refactoring Exercises 2
// Allan
// 4/4/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//let variable CONSTANT to make the it where you can change the Magic number
//whenever or any number 
const CIRCLESIZE = 40;
//Black and White Target
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(240);
  // The for loop starts at 400 size reducing while i is greater then 0.
  // i will subtract or equal to 40 each time
  for (let i = 400; i > 0; i -= CIRCLESIZE) { 
    //shape ellipse of the circle
    //200 is the x, y location and i , i is width and height
    ellipse(200, 200, i, i);
  }
  // >>> Waste of space of junk down here <<<
  // >>> not a effiecnt way of for loop <<<
  // ellipse(200, 200, 400, 400);
  // ellipse(200, 200, 360, 360);
  // ellipse(200, 200, 320, 320);
  // ellipse(200, 200, 280, 280);
  // ellipse(200, 200, 240, 240);
  // ellipse(200, 200, 200, 200);
  // ellipse(200, 200, 160, 160);
  // ellipse(200, 200, 120, 120);
  // ellipse(200, 200, 80, 80);
  // ellipse(200, 200, 40, 40);
}