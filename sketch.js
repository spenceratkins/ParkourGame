let player
let platforms = []
let data = [{x: 0, y: 390},{x: 85, y: 360},{x: 180, y: 340},{x: 280, y: 315},{x: 25, y: 310},{x: 220, y: 260},{x: 330, y: 200},{x:10, y: 190},{x: 129, y: 220},{x:330, y: 60},{x:135, y: 290},]

function setup() {
  createCanvas(400, 400);
    player = new Player(30,350, "chartreuse")
   for (let i = 0; i < 11; i++) {
    let platform = new Platform(data[i].x,data[i].y
)
  
    platforms.push(platform)
    
  }
   //platforms  = new Platform(10,10, "black")
}


function draw() {  platforms.filter(platform => platform.active).forEach(platform => {
    
    //platform.update()
    platform.draw()
  
  })
  background("lightblue");
 
  platforms.filter(platform => platform.active).forEach(platform => {
    
    //platform.update()
    platform.draw()
    checkCollisions(platform)
  })
  player.draw()
    player.update()
                 
                
}

function checkCollisions(p) {
player.bounce(p)
  }



function keyPressed() {

    if (keyCode === UP_ARROW) {
     player.move (0, -1)
    } else if (keyCode === DOWN_ARROW) {
      player.move (0, 1)
    } else if (keyCode === LEFT_ARROW) {
      player.move(-.5, -.5)
    } else if (keyCode === RIGHT_ARROW) {
      player.move(0.5, -.5)
    }

  }

function keyReleased() {
  player.stop()
}
function collide(player1, player2) {
  if(player1.x < player2.x + player2.width &&
    player1.x + player1.width > player2.x &&
    player1.y < player2.y + player2.height &&
    player1.y + player1.height > player2.y) {
      return true
  }
  else {
   return false 
  }
}



