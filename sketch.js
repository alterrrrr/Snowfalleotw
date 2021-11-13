const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var scene, sceneImg
var snow1, snow2, snow1Img, snow2Img
function preload(){
sceneImg = loadImage("snow1.jpg")
snow1Img = loadImage("snow4.webp")
snow2Img = loadImage("snow5.webp")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  scene = createSprite(400, 200, 50, 50);
  scene.addImage(sceneImg)
  scene.scale = 1.5
  snow1 = new Snow(100,100,20)
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  snow1.display();
  spawnSnow();
  drawSprites();
}

function spawnSnow(){
  if(frameCount %80===0){
  snow2 = createSprite(Math.round(random(50,750)),0, 10,10)
  snow2.addImage(snow2Img)
  snow2.scale = 0.1
  snow2.velocityY = 1
  snow2.lifetime = 500
   }
}