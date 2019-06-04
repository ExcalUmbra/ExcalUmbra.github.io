// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let player;
let up, down, left, right = false;
let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  player = (new Player(width / 2, height / 2));
  

}

function mousePressed(){
  bullets.push(new Bullets(mouseX, mouseY));
}

function draw() {
  background(225);
  player.display();
  player.move();

  for (let i = 0; i < bullets.length; i++){
    bullets[i].move();
    bullets[i].display();
  }
  // Bullets.display();
  // Bullets.move();

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
  constructor(x_,y_) {
    this.x = x_;
    this.y = y_;
    this.w = 10;
    this.xSpeed = 4;
    this.ySpeed = 0;
    this.life = 255;
    this.size = 10;
    this.bulletVisible = false;
  }
 
  move() {
    this.x = this.x + this.xSpeed;
    this.x = this.x + this.ySpeed;
    if (this.x < 20) {
      this.life -= -1;
    }
    if (this.y < 20) {
      this.life -= -1;
    }
    if (this.x > width - 20) {
      this.life -= -1;
    }
    // if (this.y < width - 4) {
    //   this.life -= -1;
    // }
    if (this.life === -1) {
      this.bulletVisable = false;
    }
  }
  display() {
    rectMode(CENTER);
    fill(244, 2, 2);
    noStroke();
    push();
    translate(this.x, this.y);
    rect(30, 20, 55, 55);
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