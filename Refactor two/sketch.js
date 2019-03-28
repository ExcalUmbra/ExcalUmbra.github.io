// Recatoring Exersize
// Allan
// 3/28/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(480, 270); //The size of the width and height
}
function draw() {
  background(255); //color of the background
  stroke(0); //The thickness of the line
  //location of the line
  line(240, 0, 240, 270);
  line(0, 135, 480, 135);
  noStroke(); //Removing the line thickness
  fill(0); //color black 
  if (mouseX < 240 && mouseY < 135) { //Retangle 1 location
    rect(0, 0, 240, 135);// size and location of x,y and the shape
  }
  else if (mouseX > 240 && mouseY < 135) { //Retangle 2 location
    rect(240, 0, 240, 135);
  }
  else if (mouseX < 240 && mouseY > 135) { //Retangle 3 location
    rect(0, 135, 240, 135);
  }
  else if (mouseX > 240 && mouseY > 135) { //Retangle 4 location
    rect(240, 135, 240, 135);
  }
}
