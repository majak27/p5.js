let drawBall;
let circles = [];

function setup() {
  createCanvas(500,500);
  for(let i = 0; i < 25; i++) {
    circles[i] = new Circle(random(width), random(height), random(-3, 3), random(-3, 3));
  }
}

function draw() {
  background(230)
  rect(200,200,100,100)
  fill(0)
  for(let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
    }
  }

class Circle {
  constructor(x, y, v, u, r,g,b, size, radius) {
    this.x = x;
    this.y = y;
    this.v = v;
    this.u = u;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
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
    if (this.x >= 200-this.radius && this.x <= 300 + this.radius) {
      this.v *= -1
    }
    if (this.y >= 200-this.radius && this.y <= 300 + this.radius) {
      this.u *= -1
    }
  }

  display() {
    ellipse(this.x, this.y, this.size);
    fill(this.r, this.b, this.g);
    noStroke();
  }
}
