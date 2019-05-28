// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let player;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = (new Player(width/2, height/2));
}

function draw() {
  background(225);
  player.move();
  player.display();
}

class Player {
  constructor (x_,y_){
    this.x = x_;
    this.y = y_;
    this.size = 50;


  }

  move(){
    
  }


  display(){
    rectMode(CENTER);
    fill(255);
    push();
    translate(this.x,this.y);
    rect(0,0, this.size, this.size);
    pop();
  }
}
