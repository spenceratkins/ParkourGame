class Platform {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.vx = 0;
    this.vy = 0;
    this.width = 60
    this.height = 10
    
    this.SPEED = 5
    this.active = true
  }
draw() {
    fill("black")
    rect(this.x, this.y, this.width, this.height)
  }
}