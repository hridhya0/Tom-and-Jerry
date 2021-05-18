var cat, catImg;
var mouseGift, mouseGiftImg;
var gardenImg; 
var catwalk, catwalkImg;
var catSit, catSitImg;
var mouseHappy, mouseHappyImg;


function preload() {    
gardenImg = loadImage("garden.png");
mouseGiftImg = loadImage("mouse1.png");   
catwalkImg = loadImage("cat2.png");
catSitImg = loadImage("cat1.png");    
mouseHappyImg = loadImage("mouse3.png");
}
function setup(){                                                        
    createCanvas(1000,800);

catwalk = createSprite(100,500,50,50);
catwalk.addImage = ("catwalk",catwalkImg);
catwalk.scale = 0.3;
catwalk.visible = false;

mouseHappy = createSprite(300,500,50,50); 
mouseHappy.addImage = ("mouseHappy",mouseHappyImg);
mouseHappy.scale = 0.3;

catSit = createSprite(50,300,50,50);
catSit.addImage = ("catSit",catSitImg);
catSit.scale = 0.3;


mouseGift = createSprite(50,300,50,50);
mouseGift.addImage = ("mouseGift",mouseGiftImg);
mouseGift.scale = 0.3;
mouseGift.visible = false



  




}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown("left_arrow")){
  mouseGift.visible = true;
  }
  if(keyDown("right_arrow")){
  catwalk.visible = true;
  catwalk.velocityX = -10;
 }

}
    
