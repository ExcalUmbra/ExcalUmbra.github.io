// Refactor four
// Allan
// 4/5/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//let black varible 
let black = 0;
//Chess Board
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //for loop for x position
  for (let x = 0; x < width; x += width/8) {
    //for loop inside a for loop for y position
    for (let y = 0; y < height; y += height/8) {
      //setFill function to display
      setFill();
      //The size of the shape
      rect(x, y, width/8, height/8);
    }
    //setFill to redisplay 
    setFill();
  }
}
//function setFill will rotate between black or white 
//to not repeat the same color
function setFill(){
  if (black === 0) {
    fill(255);
    black = 1;
  }
  else {
    fill(0);
    black = 0;
  }
}
