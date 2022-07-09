let loc = [];
let vel = [];
let nball = 10;
let diameter = 20

function setup() {
  createCanvas(windowWidth, windowHeight); //画面を生成
  frameRate(60); //フレームレート
  noStroke(); //枠線なし
  fill(0, 127, 255); //塗りの色
  for (let index = 0; index < nball; index++) {
    loc[index] = createVector(
      random(0, windowWidth), random(0, windowHeight)
    )
    vel[index] = createVector(
      random(-10, 10), random(-10, 10)
    )
  }
}

function draw() {
  background(0); //背景を描画
  for (let i = 0; i < nball-1; i++) {
    for (let j = i+1; j < nball; j++) {
      if (
        dist(loc[i].x, loc[i].y, loc[j].x, loc[j].y) < diameter
      ) {
        vel[i].x = -vel[i].x;
        vel[i].y = -vel[i].y;
        vel[j].x = -vel[j].x;
        vel[j].y = -vel[j].y;
      }
    }
  }
  for (let index = 0; index < nball; index++) {
    loc[index].x = modulo(
      loc[index].x + vel[index].x, windowWidth*2
    ); //円のX座標を更新
    loc[index].y = modulo(
      loc[index].y + vel[index].y, windowHeight*2
    ); //円のY座標を更新
    ellipse(
      windowWidth - abs(windowWidth - loc[index].x),
      windowHeight - abs(windowHeight - loc[index].y),
      diameter
    ); //指定した位置に円を描画
  }
}

function modulo(a, b) {
  return ((a%b)+b)%b;
}