function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    translate(width/2, height/2)

    //noFill()
    noStroke()

    offset = 30
    section = 8

    for (i=0; i<1000; i++) {
        fill(random(255), random(255), random(255), 150)

        src_r = random(sqrt(width**2+height**2)/2-offset)
        src_phi = random(0, PI)

        phi = int(src_phi/(PI/section))*(PI/section)*2 + src_phi%(PI/section)+src_r/100
        r = src_r+offset
        diam = src_r/7
        ellipse(r*cos(phi), -r*sin(phi), diam)
    }
  }
   
  function draw() {
  }