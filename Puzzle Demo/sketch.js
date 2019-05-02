// Grid Demo
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let winBlack = 16;
let winWhite = 4;
let gridData = [[0, 0, 0, 255, 0],
                [255, 0, 255, 0, 255],
                [0, 255, 0, 0, 0],
                [0, 0, 255, 0, 255]
              ];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  random([gridData], [gridData]);
}

function drawGrid() {
  // Render a Grid of Squares - fill color set 
  // According to data stored in 2D array.
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function determineActiveSquare() {
  //An expression to run each frame and to determine
  //where the mouse is!
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  print(currentCol, currentRow);
}
function mousePressed() {
  if (mouseButton === LEFT) {
    flip(currentCol, currentRow);//mouse
    flip(currentCol - 1, currentRow);//left
    flip(currentCol + 1, currentRow);//right
    flip(currentCol, currentRow - 1);//up
    flip(currentCol, currentRow + 1);//down
  }
  if (mouseButton === RIGHT) {
    flip(currentCol, currentRow);
  }
}

function winFactor(){
  if (winBlack === 20 || winWhite === 20){
    textSize(200);
    textAlign(CENTER);
    fill(255,0,0);
    text('You WIN', width/2 ,height/2);
  }
}

function flip(col, row) {
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    if (gridData[row][col] === 0) {
      gridData[row][col] = 255;
      winBlack -= 1;
      winWhite += 1;
    }
    else {
      gridData[row][col] = 0;
      winBlack += 1;
      winWhite -= 1;
    }
  }
}

function draw() {
  background(220);
  determineActiveSquare();
  drawGrid();
}