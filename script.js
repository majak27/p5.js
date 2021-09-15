let drawBall;
let circles = [];

function setup() {
  createCanvas(500,500);
  for(let i = 0; i < 25; i++) {
    circles[i] = new Circle(random(width), random(height), random(-3, 3), random(-3, 3));
  }
}

function draw() {
  background(230);
  for(let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
    }
  }

class Circle {
  constructor(x, y, v, u, color, size, radius) {
    this.x = x;
    this.y = y;
    this.v = v;
    this.u = u;
    this.color = (random(0,255),random(0,255),random(0,255),random(0,255))
    this.size = random(10,100)
    this.radius = (this.size/2)
  }

  move() {
    this.x += this.v;
    if (this.x < 25 || this.x > width) {
      this.v *= -1;
    }
    this.y += this.u;
    if (this.y < 25 || this.y > height) {
      this.u *= -1;
    }
    if (this.x > 150|| this.x == 350) {
      this.x *= -1
    }
  }

  display() {
    ellipse(this.x, this.y, this.size);
    fill(this.color);
    noStroke();
  }
}
