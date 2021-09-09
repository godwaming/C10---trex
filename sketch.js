var trex;
var trex_running;
var edges;
var ground, groundImg;

function preload()
{

   trex_running = loadAnimation('trex1.png', "trex3.png",'trex4.png');
  groundImg = loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
   trex = createSprite(100, 120, 10, 30);
   trex.addAnimation("trex",trex_running);
   trex.scale = 0.3;

    //ground
    ground = createSprite(300, 170, 600, 10)
    ground.addImage(groundImg)

   edges = createEdgeSprites();
  }

function draw(){
  background("220");

  textSize(20);
  fill("white")
  text(mouseX + "," + mouseY, mouseX, mouseY)

  //make the ground move
   ground.velocityX = -2;

   //reset the ground
   if(ground.x <0)
   {
        ground.x = 300;
   }
   //console.log(ground.x);

  //make the trex jump
  if(keyDown("space")){
    trex.velocityY = -10
  }

  //gravity logic
  trex.velocityY = trex.velocityY  + 0.6;

  //make the trex not to fall off
  //0 ->left 1->right 2->top 3->down
   trex.collide(ground)
   trex.collide(edges[3]);

  
  drawSprites();
}
