var sun;
var mercury;
var venus;
var earth;
var mars;
var jupitar;
var saturn;
var uranus;
var neptune;
var angle;
var anglespeed;
var suni;
var mercuryi;
var venusi;
var earthi;
var marsi;
var jupitari;
var saturni;
var uranusi;
var neptunei;

function preload(){
 suni=loadImage("sun.jpg");
mercuryi=loadImage("mercury.jpg");
venusi=loadImage("venus.jpg");
earthi=loadImage("earth.jpg");
marsi=loadImage("mars.jpg");
jupitari=loadImage("jupitar.jpg");
saturni=loadImage("saturn.jpg");
uranusi=loadImage("uranus.jpg");
neptunei=loadImage("neptune.jpg");
}


function setup() {
  createCanvas(800,800);
  sun=createSprite(0,0);
  sun.addImage("s",suni);
sun.scale=0.2;
sun.setCollider("circle", -85, -60, 140);
  mercury=createSprite(70,50);
  mercury.addImage("m",mercuryi);
  mercury.setCollider("circle", 0, 0, 300);
 venus=createSprite(210,60);
venus.addImage("v",venusi);
venus.scale = 0.15;
 earth=createSprite(150,-18);
earth.addImage("e",earthi);
earth.scale = 0.22;
 mars=createSprite(30,220);
mars.addImage("ma",marsi);
mars.scale = 0.2;
 jupitar=createSprite(-180,210);
jupitar.addImage("j",jupitari);
jupitar.scale = 0.3;

 saturn=createSprite(340,-30);
saturn.addImage("su",saturni);

 uranus=createSprite(220,350);
uranus.addImage("u",uranusi);
uranus.scale = 0.2;
 neptune=createSprite(-340,-320);
neptune.addImage("n",neptunei);
neptune.scale = 0.1;
 angle=0;
 anglespeed=0.3;
}

function draw() {
  background(0);
  angleMode(DEGREES)
 translate(width/2,height/2)
  rotate(angle)
  if(sun.collide(mercury)){
    mercury.destroy();
  }

  if(sun.collide(venus)){
    venus.destroy();
  }
  if(sun.collide(earth)){
    earth.destroy();
  }
  if(sun.collide(mars)){
    mars.destroy();
  }
  if(sun.collide(jupitar)){
    jupitar.destroy();
  }
  if(sun.collide(saturn)){
    saturn.destroy();
  }
  if(sun.collide(uranus)){
    uranus.destroy();
  }
  if(sun.collide(neptune)){
   neptune.destroy();
  }
  angle=angle+anglespeed
  if(frameCount%1==0){
    sun.scale=sun.scale+0.2
  }








  drawSprites();
}