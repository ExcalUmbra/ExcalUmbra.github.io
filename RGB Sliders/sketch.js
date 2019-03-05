// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let slider1;
let slider2;
let slider3;
let shape1;
let shape2;
let shape3;
let radio;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider1 = createSlider(0, 255, 0); {
    slider1.position(50, 670);
    slider1.style("width", "100px");
  }
  slider2 = createSlider(0, 255, 0); {
    slider2.position(50, 700);
    slider2.style("width", "100px");
  }
  slider3 = createSlider(0, 255, 0); {
    slider3.position(50, 730);
    slider3.style("width", "100px");
  }
  shape1 = createSlider(0, 255, 0); {
    shape1.position(50, 10);
    shape1.style("width", "100px");
  }
  shape2 = createSlider(0, 255, 0); {
    shape2.position(50, 40);
    shape2.style("width", "100px");
  }
  shape3 = createSlider(0, 255, 0); {
    shape3.position(50, 70);
    shape3.style("width", "100px");
  }
  radio = createRadio();
  radio.option("black");
  radio.option("white");
  radio.option("gray");
  radio.style("width", "100px");
  textAlign(CENTER);
  fill(255, 0, 0);
  radio.position(180, 10);
}

function draw() {
  background(255);
  print(slider1.value());
  print(slider2.value());
  print(slider3.value());
  rectMode(CENTER);
  fill(slider1.value(), slider2.value(), slider3.value());
  rect(width / 2, height / 2, width / 2, height / 2);

  if (shape1.value() === 1); {
    //rect(width/2, height - height/4, width - width/4 , height/2);
  }
}
