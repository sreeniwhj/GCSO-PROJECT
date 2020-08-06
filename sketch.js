var fixedrect,moverect;
var box1;

function setup() {
  createCanvas(400,400);
  fixedrect=createSprite(200, 200, 50, 80);
  fixedrect.shapeColor="blue";


  moverect = createSprite(200,300,80,50);
  moverect.shapeColor = "green";

  box1 = createSprite(200,350,100,50)
  box1.shapeColor = "violet";
}

function draw() {
  background(0);
  moverect.x = mouseX;
  moverect.y = mouseY; 
  console.log(moverect.x-fixedrect.x);

  isTouching(moverect,box1);
  drawSprites();
}

function isTouching(object1,object2)
{
  if(object1.x-object2.x<= object1.width/2+object2.width/2
    && object2.x-object1.x<=object1.width/2+object2.width/2
    && object1.y-object2.y<=object1.height/2+object2.height/2
    && object2.y-object1.y<=object1.height/2+object2.height/2  )
  {
  text("collision detected",100,100);
moverect.shapeColor = "red";
box1.shapeColor = "red";


  }
  else{
    text("collision not detected");
    moverect.shapeColor ="blue";
    box1.shapeColor = "green";
  }








}