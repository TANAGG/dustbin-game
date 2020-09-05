
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var   target,target1,target2;
var paperObject;

function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	target = new Target(770,170,20,170);
  target1 = new Target(895,260,270,20);
  target2 = new Target(1025,168,20,170);
  ball = new Ball(200,200,50);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  text(mouseX + ";" + mouseY,900,200);
 target.display();
 target1.display();
 target2.display();
  ground.display();
  ball.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}



