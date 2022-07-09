function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);


    //noFill()
    noStroke()


  }
   
  function draw() {
    translate(width/2, height/2)
    offset = 15
    section = 8
    for (i=0; i<10; i++){
        put_ellipse(offset, section)
    }
  }

  function put_ellipse(offset, section) {

    src_r = random(sqrt(width**2+height**2)/2-offset)
    src_phi = random(0, PI)

    colorMode(HSB)
    fill(src_phi/PI*255, random(127), random(127), 150)
    phi = int(src_phi/(PI/section))*(PI/section)*2 + src_phi%(PI/section)+src_r/100
    r = src_r+offset
    diam = src_r/10
    ellipse(r*cos(phi), -r*sin(phi), diam)

  }