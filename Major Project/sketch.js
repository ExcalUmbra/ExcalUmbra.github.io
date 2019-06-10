// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let player;
let up, down, left, right = false;
let bullets = [];
let shield;
let mouse, center;
let V0;
let enemy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  V0 = createVector(1, 0);
  player = new Player(width / 2, height / 2);
  shield = new Shield(player.x, player.y);
  enemy = new Enemy(player.x, player.y);
}

function makeMouseVector() {
  mouse = createVector(mouseX, mouseY);
  center = createVector(player.x, player.y);
  mouse.sub(center);
  mouse.normalize();
  mouse.mult(35);
  stroke(2);
}

function mousePressed() {
  line(player.x, player.y, player.x + mouse.x, player.y + mouse.y);
  print(player.x, player.y, player.x + mouse.x, player.y + mouse.y);
  stroke(2);
  bullets.push(new Bullets(player.x, player.y, mouse.x, mouse.y));
}

function draw() {
  background(225);
  makeMouseVector();
  player.display();
  player.move();
  shield.move(player.x, player.y);
  shield.display();
  enemy.display();
  enemy.move();
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].move();
    bullets[i].display();
  }
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
      if (this.y < 750) {
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
      if (this.x < 1580) {
        this.x += this.xSpeed;
        this.angle += 15;
      }
    }
  }
  display() {
    rectMode(CENTER);
    fill(random(255), random(255), random(255));
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
  constructor(x_, y_, xSpeed_, ySpeed_) {
    this.x = x_;
    this.y = y_;
    this.w = 10;
    this.xSpeed = xSpeed_;
    this.ySpeed = ySpeed_;
    this.life = 255;
    this.size = 10;
    this.bulletVisible = false;
  }
  move() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
    if (this.x < 20) {
      this.life -= -1;
    }
    if (this.y < 20) {
      this.life -= -1;
    }
    if (this.x > width - 20) {
      this.life -= -1;
    }
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
    rect(0, 0, 15, 15);
    pop();
  }
}

class Shield {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.angle = 0;
  }

  move(x_, y_) {
    this.x = x_;
    this.y = y_;
  }

  display() {
    ellipseMode(CENTER);
    stroke(0, 0, 244);
    strokeWeight(3.5);
    noFill();
    push();
    translate(this.x, this.y);
    let angle = atan2(mouse.x, mouse.y);
    rotate(-angle);
    arc(0, 0, 175, 175, 0, PI);
    pop();
  }
}

class Enemy {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.size = 50;
    this.angle = 0;
    this.xSpeed;
    this.ySpeed;
    this.enemyVector;
  }

  move() {
    this.enemyVector = createVector(this.x, this.y);
    center = createVector(player.x, player.y);
    this.enemyVector.sub(center);
    this.enemyVector.normalize();
    this.enemyVector.mult(2);
    this.x += this.enemyVector.x;
    this.y += this.enemyVector.y;
  }

  display() {
    rectMode(CORNER);
    fill(0);
    push();
    translate(this.x, this.y);
    rotate(radians(this.angle));
    rect(0, 0, this.size, this.size);
    pop();
  }
}