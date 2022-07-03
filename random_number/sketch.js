function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    //noFill()
    //noStroke()
    for (i=0; i<100; i++) {
        fill(random(255), random(255), random(255), 255)
        x = random(width)
        rect(x, random(height), x/3)

    }
  }
   
  function draw() {
  }