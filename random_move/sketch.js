let loc = [];
let vel = [];
let acc = [];
let nball = 5;
let diam = 20;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    //noFill()
    fill(0, 127, 255)
    //noStroke()
    for (let i = 0; i < nball; i++) {
        loc[i] = createVector(windowWidth/2, windowHeight/2)
        vel[i] = createVector(0, 0)
        acc[i] = createVector(0, 0)
    }
  }
   
  function draw() {
    background(0);
    for (let i = 0; i < nball; i++) {
        acc[i].x = random(-2, 2) - 0.1 * vel[i].x
        acc[i].y = random(-2, 2) - 0.1 * vel[i].y
        vel[i].x = vel[i].x + acc[i].x
        vel[i].y = vel[i].y + acc[i].y
        loc[i].x = loc[i].x + vel[i].x
        loc[i].y = loc[i].y + vel[i].y
        ellipse(
            modulo(loc[i].x, windowWidth), modulo(loc[i].y, windowHeight), diam
        )
    }
  }

function modulo(a, b) {
  return ((a%b)+b)%b;
}