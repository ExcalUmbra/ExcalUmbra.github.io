// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let check = [];
let player;
let up = false;
let down = false;
let left = false;
let right = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  player = (new Player(width / 2, height / 2));
}

function draw() {
  background(225);
  player.display();
  player.move();
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 50;
    this.angle = 0;


  }

  move() {
    this.xSpeed = 15;
    this.ySpeed = 15;
    print(up, down, left, right);
    if (up === true) {
      this.y -= this.xSpeed;
      this.angle -= 25;
    }
    if (down === true) {
      this.y += this.xSpeed;
      this.angle += 25;
    }
    if (left === true) {
      this.x -= this.xSpeed;
      this.angle -= 25;
    }
    if (right === true) {
      this.x += this.xSpeed;
      this.angle += 25;
    }
  }


  display() {
    rectMode(CENTER);
    fill(255);
    push();
    translate(this.x, this.y);
    rotate(radians(this.angle));
    rect(0, 0, this.size, this.size);
    pop();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) up = true;
  if (keyCode === DOWN_ARROW) down = true;
  if (keyCode === LEFT_ARROW) left = true;
  if (keyCode === RIGHT_ARROW) right = true;
}

function keyReleased() {
  if (keyCode === UP_ARROW) up = false;
  if (keyCode === DOWN_ARROW) down = false;
  if (keyCode === LEFT_ARROW) left = false;
  if (keyCode === RIGHT_ARROW) right = false;
}
