function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    //noFill()
    fill(0, 127, 255, 127)
    //noStroke()

    width = windowWidth/2
    height = windowHeight/2
    for (let i=1; i<10; i++){
        rect(0, 0, width, height);
        rect(width, height, width, height);
        width = width/2
        height = height/2
    }
  }
   
  function draw() {
  }