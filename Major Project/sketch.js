// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let player;
let up, down, left, right = false;
let bullets;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  player = (new Player(width / 2, height / 2));
  bullets = (new Bullets(width/2,height/2));
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
      if (this.y > 34) {
        this.y -= this.xSpeed;
        this.angle -= 15;
      }
    }
    if (down === true) {
      if (this.y < 758) {
        this.y += this.xSpeed;
        this.angle += 15;
      }
    }
    if (left === true) {
      if (this.x > 34) {
        this.x -= this.xSpeed;
        this.angle -= 15;
      }
    }
    if (right === true) {
      if (this.x < 1568) {
        this.x += this.xSpeed;
        this.angle += 15;
      }
    }
  }
  display() {
    rectMode(CENTER);
    fill(255);
    strokeWeight(2);
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

class Bullets {
  constructor() {
    this.x;
    this.y;
    this.xSpeed;
    this.ySpeed;
    this.life = 255;
    this.size = 10;
  }
  Bullets() {

  }
  move() {
    x = x + xSpeed;
    y = y + ySpeed;

  }
  display() {
    rectMode(CENTER);
    fill(244,2,2);
    noStroke();
    push();
    translate(mouseX, mouseY,this.x, this.y);
    rect(30, 20, 55, 55)
    pop();

  }
}

class Shield {
  constructor() {

  }
  move() {

  }
  display() {

  }
}