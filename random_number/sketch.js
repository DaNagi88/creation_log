function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    translate(width/2, height/2)

    //noFill()
    noStroke()
    for (i=0; i<1000; i++) {
        fill(random(255), random(255), random(255), 150)
        offset = 50
        r = random(sqrt(width**2+height**2)/2-offset)
        phi = random(-PI, PI)
        ellipse(
            (r+offset)*cos(phi), (r+offset)*sin(phi), r/5
        )

    }
  }
   
  function draw() {
  }