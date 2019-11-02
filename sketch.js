var fixedRECT, moveRECT;

function setup() {
  createCanvas(800,400);
  fixedRECT = createSprite(200,90,60,70);
  fixedRECT.shapeColor = "red";
  moveRECT = createSprite(150,60,70,80);
  moveRECT.shapeColor = "red";
  fixedRECT.debug=true;
  moveRECT.debug=true;
  
}

function draw() {
  background(0,0,0);
  moveRECT.x = World.mouseX;
  moveRECT.y = World.mouseY;
 //Horizontal
  if(moveRECT.x-fixedRECT.x < fixedRECT.width/2+moveRECT.width/2 && 
    fixedRECT.x-moveRECT.x < fixedRECT.width/2+moveRECT.width/2 &&
    moveRECT.y-fixedRECT.y < fixedRECT.height/2+moveRECT.height/2 &&
    fixedRECT.y-moveRECT.y < fixedRECT.height/2+moveRECT.height/2)
    {
    fixedRECT.shapeColor = "blue";
    moveRECT.shapeColor = "blue";

  }
 else {
   fixedRECT.shapeColor = "red";
   moveRECT.shapeColor = "red";
 }

  
  drawSprites();
}