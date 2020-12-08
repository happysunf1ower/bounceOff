var fixedRect, movingRect;
var obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
  
  obj1 = createSprite(400, 200, 20, 80);
  obj1.velocityY = +8;
  obj2 = createSprite(500, 500, 30, 30);
  obj3 = createSprite(100, 50, 10, 20);
  obj4 = createSprite(700, 700, 200, 150);
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, obj1);
  
  drawSprites();
}

