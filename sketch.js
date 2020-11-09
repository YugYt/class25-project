
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust ; 
var bin ; 




function preload()
{
	
}

function setup() {
	createCanvas(600, 600);

	dusts = createSprite(100, 300 , 20, 20 )
	bin = createSprite(500 , 300, 5, 100)
	bin = createSprite(400, 300, 5, 100)
	bin = createSprite(450, 350, 100, 5)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  drawSprites();
 
}



