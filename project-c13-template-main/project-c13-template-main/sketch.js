var garden,rabbit;
var gardenImg,rabbitImg,appleImg;
var apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=word.mouseX;
  
  drawSprites();
  
}

 function createAples(){
apple=createSprite(randon(50,350),40,10,10)
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY= 3;
apple.lefTime=150;
 }

  function createOrange(){
   orange=createSprite(randon(50,350),40,10,10);
   orange.addImage(orangeImg);
   orange.scale=0.07;
   orange.velocityY= 3;
   orange.lefTime=150;
  
  }

  function createRed(){
   red=createSprite(randon(50,350),40,10,10);
   red.addImage(Img);
   red.scale=0.07;
   red.velocityY= 3;
   red.lefTime=150;
  }