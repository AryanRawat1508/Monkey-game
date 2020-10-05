
var monkey , monkey_running
var banana ,bananaImage, obstacle1 , obstacleImage;
var food ,food1,FoodGroup, obstacleGroup
var score
var ground,invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  food1 = loadImage("banana.png")
}



function setup() {
  createCanvas(600,200)
  monkey=createSprite(40,156,20,20)
monkey.addAnimation("mo",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(30,190,1200,10)
  FoodGroup=createGroup();
 obstacleGroup=createGroup();
  
  invisibleGround=createSprite(30,190,1200,20)
  invisibleGround.visible = false;
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
}


function draw() {
background("white")
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  ground.velocityX=-4
  if (invisibleGround.x < 0){
      invisibleGround.x = invisibleGround.width/2;
    }
  spawnObstacles();
  
  var survivalTime=0;
stroke("white")
textSize(20);
fill("white")
text("Score:"+score,500,50);

stroke("black");
textSize(20);
fill("black")
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+ survivalTime,100,50);
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    
  }
  spawnFood();
  
  monkey.collide(invisibleGround);
  drawSprites();
}

function spawnObstacles(){
if(frameCount % 80 === 0) {
var  obstacle1 = createSprite(30,190,12,12)  
  obstacle1.x=Math.round(random(40,600));
    obstacle1.addImage(obstacleImage)
   
    obstacle1.velocityX = ground.velocityX
  obstacleGroup.add(obstacle1)
}
   if(keyDown("space")&& monkey.y >= 100)  {
        monkey.velocityY = -12;
        monkey.velocityY = monkey.velocityY + 0.8
    }
    monkey.velocityY = monkey.velocityY + 0.8


}

function spawnFood(){
 if(frameCount % 20 === 0) {
   var food = createSprite(400,160,12,12)
    food.y=Math.round(random(10,50));
   
   food.addImage(food1)
   food.scale=0.2
   food.velocityX=-4
   FoodGroup.add(food)
   
   
 }
  
  
  
  
  

}
