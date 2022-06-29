function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    noFill()

    for (i=1; i<30; i++) {
        size = i*10
        rect((windowWidth-size)/2, (windowHeight-size)/2, size, size)
    }
  }
   
  function draw() {
  }