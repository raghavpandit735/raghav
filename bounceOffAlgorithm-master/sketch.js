var movingrect, fixedrect;
function setup(){
  createCanvas(900, 900);
  movingrect = createSprite(100, 100, 50, 80);
  fixedrect = createSprite(200, 200, 10, 70);
}

function draw(){
background(0, 0, 0);
bounceoff(movingrect, fixedrect);
drawSprites();
movingrect.x = mouseX
movingrect.y = mouseY
}
function bounceoff(object1,object2){
  if(object1.x-object2.x< object1.width/2-object2.width/2
    && object2.x-object1.x< object1.width/2-object2.width/2){
movingrect.shapeColor = "red";
fixedrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "white";
    fixedrect.shapeColor = "white";
  }  
  
} 