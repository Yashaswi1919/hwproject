
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var hammer;


function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,700,1600,90);
	box1 =new Box(400,200,100,100);
	box1.shapeColor="blue";
	box2 =new Box(700,300,80,60);


	box3=new Box(100,200,40,40);

	hammer=new Hammer(200,200,80,30);

	
	


	Engine.run(engine);
	
	
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  hammer.display();
  
  
  
  
 
}



