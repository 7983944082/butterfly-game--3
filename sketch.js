

var net , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redScore = 0;
var blueScore = 0;
var pinkScore = 0;
var greenScore = 0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  netImage = loadImage("Images/net.png");
  red_balloonImage = loadImage("Images/red_butterfly.png");
  green_balloonImage = loadImage("Images/green_butterfly.png");
  pink_balloonImage = loadImage("Images/pink_butterfly.png");
  blue_balloonImage = loadImage("Images/blue_butterfly.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating bg
  bg = createSprite(0,0,600,600);
  bg.addImage(backgroundImage);
  bg.scale = 2.5
  
  // creating net to shoot arrow
  net = createSprite(480,220,20,50);
  net.addImage(netImage); 
  net.scale = 0.2;
  
   score = 0 ;
   redGroup=new Group() ;
   blueGroup=new Group();
   greenGroup=new Group();
   pinkGroup=new Group();
 
   arrowGroup=new Group();
  
}

function draw() {

  // moving ground
    bg.velocityX = -3 

    if (bg.x < 0){
      bg.x = bg.width/2;
    }
  
  //moving bow
  net.y = World.mouseY
  
  
   
  if ( redGroup.isTouching(net) ){
    redScore= redScore +1;
    redGroup.destroyEach();
    
  }
   
  if ( blueGroup.isTouching(net) ){
    blueScore= blueScore +1;
    blueGroup.destroyEach();
    
  }

  if ( greenGroup.isTouching(net) ){
    greenScore= greenScore +1;
    greenGroup.destroyEach();
    
  }

  if ( pinkGroup.isTouching(net) ){
    pinkScore= pinkScore +1;
    pinkGroup.destroyEach();
    
  }
  
  //creating continous enemies
  var select_Butterfly = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_Butterfly == 1) {
      redButterfly();
    } else if (select_Butterfly == 2) {
      greenButterfly();
    } else if (select_Butterfly == 3) {
      blueButterfly();
    } else {
      pinkButterfly();
    }
  }


  
  drawSprites();
    fill ("red");
    textSize (20);
    text("Redbutterfly: "+ redScore, 450,50);

    fill ("blue");
    text("Bluebutterfly: "+ blueScore, 300,50);

    fill ("green");
    text("Greenbutterfly: "+ greenScore, 00,50);

    fill ("pink");
    text("Pinkbutterfly: "+ pinkScore, 160,50);
}


function redButterfly() {
  var redButterfly = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redButterfly.addImage(red_balloonImage);
  redButterfly.velocityX = 3;
  redButterfly.lifetime = 150;
  redButterfly.scale = 0.5;
  redGroup.add(redButterfly);
  
 

  return redButterfly;
  
}

function blueButterfly() {
  var blueButterfly = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blueButterfly.addImage(blue_balloonImage);
  blueButterfly.velocityX = 3;
  blueButterfly.lifetime = 150;
  blueButterfly.scale = 0.2;
  blueGroup.add(blueButterfly);
 
  return blueButterfly;
 
}

function greenButterfly() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.5;
  greenGroup.add(green);
  
  return green;   
}

function pinkButterfly() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.5;
  pinkGroup.add(pink);
  return pink;
}


