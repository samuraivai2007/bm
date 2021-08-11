var spaceImg,space;
var asteroidImg,asteroid,asteroidGroup;
var rocketImg,rocket;
var gameState="play";
var song;

function preload(){
spaceImg = loadImage("space1.jpg");
asteroidImg=loadImage("astro.png");
rocketImg=loadImage("work.png")
song=loadSound("Broozer Squares Up.mp3");

}

function setup() {
 createCanvas(600,600);
 space=createSprite(300,300);
 space.addImage("space",spaceImg);
 space.velocityY=1;
 //space.scale=1.5;


 song.play();

 rocket=createSprite(300,500,50,50);
 rocket.scale=0.3;
 rocket.addImage(rocketImg);
rocket.debug=true;
rocket.setCollider("circle",0,0,50)
 asteroidsGroup=new Group();
}

function draw() {
 background(0);
 if(space.y>400){
    space.y=300
}

 if(gameState==="play"){

  
    if(keyDown("left_arrow")){
        rocket.x=rocket.x-3;
    }
    if(keyDown("right_arrow")){
        rocket.x=rocket.x+3;
    }
spawnAsteroid();


    if(rocket.isTouching(asteroidsGroup)){
        rocket.velocityY=0;
        rocket.destroy();
        asteroidsGroup.destroyEach();
        space.destroy();
        gameState="end";
      song.stop();
    }
 }
 if(gameState==="end"){
     stroke("yellow");
     fill("yellow");
     textSize(30);
     text("GAME OVER",250,230)
 }
 drawSprites();
}
function spawnAsteroid(){
    if(frameCount%100===0){
        var asteroid1=createSprite(200,-50);
        asteroid1.addImage(asteroidImg);
        asteroid1.x=Math.round(random(100,400));
        asteroid1.lifetime=800;
        asteroid1.scale=0.20;
        asteroid1.velocityY=12;
        asteroidsGroup.add(asteroid1);
 //       rocketGroup.add(rocket);
    }
}