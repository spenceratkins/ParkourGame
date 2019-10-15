class Player  {
  constructor(x, y, c) {
    this.x = x
    this.y = y
    this.vx = 0;
    this.vy = 0;
    this.width = 20
    this.height = 20
    this.color = c
    this.SPEED = 5
    this.active = true
    this.gravity = .15
    this.velo = 0
  }
  bounce(b) {
    if(collide(this,b)) {
      console.log("bounce")
     //this.vx = -this.vx
      this.vy = -this.vy* 1.
      this.update()
    } else console.log("no bounce")
  }
  draw() {
    fill(this.color)
    ellipse(this.x, this.y, this.width, this.height)
  }

  move(dx, dy) {
    this.vx = dx * this.SPEED
    this.vy = dy * this.SPEED
  }
  update() {
    this.x += this.vx
    this.y += this.vy
    this.vy += this.gravity
   // this.vy*=.5
    //this.y += this.velo
    this.x = constrain(this.x, 0, width)
      this.y = constrain(this.y, 0, height)
  }
  stop() {
    this.vx = 0
    this.vy = 0
  }

}

