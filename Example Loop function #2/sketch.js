// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//input 80
//   floor50 -----------------------  ceiling100  
function setup() {
  createCanvas(400, 400);
  //noLoop();  //will only run draw() one time.
}

function draw() {
  background(220);
  print(myConstrain(50, 0, 100));   //prints 50
  print(myConstrain(1, 5, 10));   //prints 5
  print(myConstrain(-100, -300, -200));   //prints -200
  print(myConstrain(mouseX, 0, 200));   //prints values beween 0-200
}
function myConstrain(input, floor, ceiling) {
  if (input >= floor && input < ceiling) {
    return input;
  }
  if (input < floor) {
    return floor;
  }
  if (input > ceiling) {
    return ceiling;
  }
}