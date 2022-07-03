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

        r = random(sqrt(width**2+height**2)/2-offset)
        src_phi = random(0, PI)

        phi = int(src_phi/(PI/section))*(PI/section)*2 + src_phi%(PI/section)
        os_phi = phi+r/100
        ellipse(
            (r+offset)*cos(os_phi), -(r+offset)*sin(os_phi), r/5
        )
    }
  }
   
  function draw() {
  }