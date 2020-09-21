var PLAY = 1;
var OVER = 0;
var gameState = PLAY;
var sword, swordImage;
var fruit1, fruit2, fruit3, fruit4;
var fruit, fruit1Image, fruit2Image, fruit3Image, fruit4Image;
var alien, alien1Image;
var alien2Image;
var randomFruit, randomAlien;
var rand
var alien11, alien22;
var fruit1Group,fruit2Group,fruit3Group,fruit4Group, alienGroup;
var woodenwallImage, woodenWall;
var apple, orange,pear,banana;
var appleImage, orangeImage, pearImage, bananaImage;
var orange, apple, pear, banana;
var invisibleBar;
var gameOverImage;
var restart, restartImage;
var score = 0;

function preload() {
  swordImage = loadImage("sword.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  alienImage = loadAnimation("alien1.png","alien2.png");
  woodenwallImage = loadImage("woodenwall.png");
  appleImage = loadImage("apple.jpeg");
  orangeImage = loadImage("orange.jpeg");
  pearImage = loadImage("pear.jpeg");
  bananaImage = loadImage("banana.jpeg");
  gameOverImage = loadImage("gameover.png");
  restartImage = loadImage("restart.jpg");
}

function setup() {
  createCanvas(400, 400);
  woodenWall = createSprite(200,200,400,400);
  woodenWall.addImage("wall",woodenwallImage);
  woodenWall.scale = 2.5;
  sword = createSprite(200, 200, 10, 10);
  sword.addImage("sword", swordImage);
  sword.scale = 0.7;
  restart = createSprite(width/2,height * (3/4),10,10);
  restart.addImage("restart",restartImage);
  restart.scale = 0.3;
  restart.visible = false;
  
  fruit1Group=new Group();
  fruit2Group=new Group();
  fruit3Group=new Group();
  fruit4Group = new Group();
  alienGroup = new Group();
}

function draw() {
  background(255);
 
  if(gameState == PLAY){
      fruits();
      alien();
    sword.x = mouseX;
    sword.y = mouseY;
    
     if(sword.isTouching(fruit1Group)){
     fruit1.addImage(orangeImage);
     score = score + 2;
    fruit1Group.setLifetimeEach(1);
    }
  if(sword.isTouching(fruit2Group)){
    fruit2.addImage(appleImage);
    score = score+2;
    fruit2Group.setLifetimeEach(1);
  }
  if(sword.isTouching(fruit3Group)){
    fruit3.addImage(pearImage);
    score = score +2;
    fruit3Group.setLifetimeEach(1);
  }
  if(sword.isTouching(fruit4Group)){
    fruit4.addImage(bananaImage);
    score = score +2;
    fruit4Group.setLifetimeEach(1);
    
  }
    
  if(sword.isTouching(alienGroup)){
     gameState = OVER;
     }
  } else if(gameState ==OVER){
    sword.addImage("sword",gameOverImage);
    fruit1Group.destroyEach();
    fruit2Group.destroyEach();
    fruit3Group.destroyEach();
    fruit4Group.destroyEach();
    alienGroup.destroyEach();
    sword.x = width/2;
    sword.y = height/2;
    restart.visible = true;
    if(mousePressedOver(restart)){
      resetGame();
    }
    
  }
   
  drawSprites();
  textSize(20);
  fill("white")
  textAlign(CENTER);
  text("score: " + score,200,20);
}

function fruits() {
  randomFruit = round(random(1,4));
  switch (randomFruit) {
    case 1: orange();
      break;
    case 2: apple();
      break;
    case 3: pear();
      break;
    case 4: banana();
      break;
  }
}

function orange(){
  if (frameCount % 60 == 0) {
    fruit1 = createSprite(round(random(10, 290)), height, 10, 10);
    fruit1.velocityY = -(5 + score/20);
    fruit1.velocityX = 1;
    fruit1.addImage(fruit1Image);
    fruit1.scale = 0.3;
    fruit1Group.add(fruit1);
  }
}
function apple(){
  if(frameCount % 60 ==0){
    fruit2 = createSprite(round(random(10,290)),height,10,10);
    fruit2.velocityY = -(5 + score/20);
    fruit2.velocityX = 1;
    fruit2.addImage(fruit2Image);
    fruit2.scale = 0.3;
    fruit2Group.add(fruit2);
  }
}
function pear(){
 if(frameCount%60==0){
   fruit3 = createSprite(round(random(10,290)),height,10,10);
   fruit3.velocityY = -(5 + score/20);
   fruit3.velocityX = 1;
   fruit3.addImage("fruit3",fruit3Image);
   fruit3.scale = 0.3;
   fruit3Group.add(fruit3);
 }
}

function banana(){
  if(frameCount%60==0){
   fruit4 = createSprite(round(random(10,290)),height,10,10);
   fruit4.velocityY = -(5+score/20);
   fruit4.velocityX = 1;
   fruit4.addImage("fruit4",fruit4Image);
   fruit4.scale = 0.3;
    fruit4Group.add(fruit4);
     
  }
}

function alien(){
  if(frameCount%80==0){
  alien11 = createSprite(round(random(10,290)),height,10,10);
  alien11.velocityY = -(5 + score/20);
  alien11.velocityX = 1;
  alien11.addAnimation("alien",alienImage);
  alienGroup.add(alien11);
  }
}

function resetGame(){
  restart.visible = false;
  gameState = PLAY;
  sword.addImage("sword",swordImage);
  score = 0;
}

