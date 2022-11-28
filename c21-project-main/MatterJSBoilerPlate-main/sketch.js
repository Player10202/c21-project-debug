var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(400,690,800,20)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
	
/*var option={
  restitution:0.5
 }
 ball=Bodies.circle(100,200,20,option)
 World.add(world,ball)*/
}


function draw() {
  Engine.run(engine);
  ground.show();
 
}

function force(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.5})

}