function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    //noFill()
    fill(0, 127, 255, 32)
    noStroke()

    cx = windowWidth/2
    cy = windowHeight/2

    translate(cx, cy)


    d = cx
    for (i=0; i<64; i++){
        ellipse(cx/2, 0, d)
        ellipse(-cx/2, 0, d)
        rotate(PI/32)
        d = d/1.05
        cx = cx/1.03
    }
  }
   
  function draw() {
  }