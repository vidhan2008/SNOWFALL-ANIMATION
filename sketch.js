const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImage;
var snow1,snowImg1
var snow2,snowImg2

function preload(){
bgImage = loadImage("snow2.jpg")
snowImg1=loadImage("snow4.webp")
snowImg2=loadImage("snow5.webp")
}

function setup() {
  createCanvas(1279,679);


}

function draw() {
  if (bgImage)
  background(bgImage);

 createsnow1();
 createsnow2();
  drawSprites();
}
function createsnow1(){
if(frameCount%80===0){
    snow1=createSprite(random(-10,1300),40,10,10)
   snow1.addImage(snowImg1)
   snow1.velocityY=3
  snow1.scale=0.18
   snow1.lifetime=1100
   
  
     }

   
}
function createsnow2(){
  if(frameCount%100===0){
      snow2=createSprite(random(0,1300),40,10,10)
     snow2.addImage(snowImg2)
     snow2.velocityY=3
    snow2.scale=0.1
     snow2.lifetime=1100
     
    
       }
  
     
  }