// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let check = [];
let player;

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
    if (keyIsPressed) {
      if (keyCode === UP_ARROW) {
        this.y -= this.xSpeed;
        this.angle -= 15;
      }
      if (keyCode === DOWN_ARROW) {
        this.y += this.xSpeed;
        this.angle += 15;
      }
      if (keyCode === LEFT_ARROW) {
        this.x -= this.xSpeed;
        this.angle -= 15;
      }
      if (keyCode === RIGHT_ARROW) {
        this.x += this.xSpeed;
        this.angle += 15;
      }
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
