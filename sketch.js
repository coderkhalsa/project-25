
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	r1 = new Dustbin();
	
	land = new Ground(400,900,900,20);
	ball = new Ball(200,500,50);

	
  
}


function draw() {
  
  background("pink");
  Engine.update(engine);
r1.display();
land.display();
ball.display();
}

function keyPressed() {

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
	
}


