// Refactoring Exersize
// Allan
// 3/28/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, charle, delta; //describe varible
function setup() {
  createCanvas(windowWidth, windowHeight);
  //set varible
  x = 200; //positions
  y = 300; //positions
  charle = random(3, 8); //random varible location 
  delta = random(3, 8); 
}
function draw() { // Uses the moveable function 
  moveable();
  background(80, 80, 80); //color of the background
  rect(x, y, 250, 75); //The shape of the object
}
function moveable() {
  x += charle; 
  y += delta;
  if (y >= height - 75 || y <= 0) { // Everytime bravo is >= and <= then delta is equal to itself and * - 1 eachtime
    delta = delta * -1;
  }
  if (x >= width - 250 || x <= 0) { // Same with the first if statement
    charle = charle * -1;
  }
}