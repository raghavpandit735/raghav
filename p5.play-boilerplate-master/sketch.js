var wall, thickness, bullet, speed, weight, Ibullet, Iwall;

function setup() {
  createCanvas(1600, 400);
  thickness = random(23, 83);
  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = ("blue");
  speed = random(223, 321);
  weight = random(30, 52);
bullet = createSprite(600, 200, 70, 10);
}

function draw() {
  background("black"); 
  bullet.velocityX = speed;
  drawSprites();
  if(hascollided(bullet, wall))
  {
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness* thickness *thickness);

  
    if(damage>10){
      wall.shapecolor=color(255,0,);

    }
     wall.shapeColor=color(0,255,0);
  }
}

function hascollided(Ibullet, Iwall) {
bulletRightEdghe=Ibullet.x +Ibullet.width;
wallLeftEdge=Iwall.x;
if(bulletRightEdge>=wallLeftedge){
  return true
}
return false;
}