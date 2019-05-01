// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//  Farm Game
const COLUMNS = 5;
const ROWS = 5;
let tilesSize = 100;
let playerX = 3;
let playerY = 4;

let tiles = []; //0 - blank
                //1 - chicken
                //2 - cow

let level = [ [0, 1, 0, 1, 0],
              [1, 1, 1 ,0, 0],
              [0, 0, 1, 1, 0],
              [1, 0, 0, 1, 1],
              [0, 0, 1, 2, 1] ];

function preload(){
  for (let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/"+i+".png"));
  }
}

function setup() {
  createCanvas(COLUMNS * tilesSize, ROWS * tilesSize);
}

function renderGame(){
  for (let x = 0; x < ROWS; x++){
    for (let y = 0; y < COLUMNS; y++){
      let index = level[y][x];
      image(tiles[index],x*tilesSize, y*tilesSize);
    }
  }
}


function swap(x1,y1,x2,y2){
  let swap = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = swap;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    swap(playerX, playerY,playerX-1,playerY);
    playerX--;
  }
  if (keyCode === RIGHT_ARROW){
    swap(playerX, playerY,playerX+1,playerY);
    playerX++;
  }
  if (keyCode === UP_ARROW){
    swap(playerX, playerY,playerX,playerY-1);
    playerY--;
  }
  if (keyCode === DOWN_ARROW){
    swap(playerX, playerY,playerX,playerY+1);
    playerY++;
  }
}

function draw() {
  background(220);
  renderGame();
}