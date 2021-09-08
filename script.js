var x, y, v;

function setup() {
  createCanvas(500,500);

  x = 300
  y = 50
  v = 3
  u = 3
}

function draw() {
  background(225);

  rect(x,y,50,50);
  x = x + v;
  y = y + u;
  
  if (x <= 0 || x > 450){
    v = v * -1;
  }
  if (y <= 0 || y > 450){
    u = u * -1;
  }
}