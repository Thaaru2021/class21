var fixedRect, movingRect;
var rect1, rect2, rect3,rect4;
function setup(){
  createCanvas(1200,800);
  fixedRect = createSprite(200,300,50,80);
  fixedRect.shapeColor  = "blue";

  movingRect = createSprite(200,300,80,30);
  movingRect.shapeColor  = "blue";

  rect1 = createSprite(100,100,50,50);
  rect1.shapeColor = "green";
  rect1.velocityX = 2;

  rect2 = createSprite(200,100,50,50);
  rect2.shapeColor = "green";
  rect2.velocityX=2;

  rect3 = createSprite(300,100,50,50);
  rect3.shapeColor = "green";
  rect3.velocityX=-2;
  
  rect4 = createSprite(400,100,50,50);
  rect4.shapeColor = "green";
rect4.velocityX = -2;
  //movingRect.velocityY=-5;
  //fixedRect.velocityY=5;
}

function draw(){
  background("lightblue");
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
  movingRect.x = World.mouseX;
  movingRect.y=World.mouseY;
  bounceOff(rect1,rect4);
  bounceOff (rect2,rect3);
  if(isTouching(movingRect,rect1)){
    rect1.shapeColor  = "pink";
    movingRect.shapeColor  = "pink";
  }
  else{
   rect1.shapeColor  = "green";
   movingRect.shapeColor  = "green";
 }
  drawSprites();
}




//Yes-> true
//No -> false
//50/2 = 25
//80/2 = 40
//40+25 = 65