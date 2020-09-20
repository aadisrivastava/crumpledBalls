
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ground,brick1,brick2,brick3;
 var paperSprite;
function preload()
{

	
}

function setup() {
	createCanvas(800, 700);
    //Create the Bodies Here.
	brick1=createSprite(400,540,200,20);

	brick2=createSprite(300,500,20,100);
	
	brick3=createSprite(500,500,20,100);
	groundSprite=createSprite(width/2, 560, width,10);
	groundSprite.shapeColor=color(255);
	
	engine = Engine.create();
	world = engine.world;
	ground=Bodies.rectangle(width/2,560, width,10);
	World.add(world,ground);
    paperSprite= new paperClass(150,500,5);
	World.add(world,paperSprite)
   Engine.run(engine);
      
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperSprite.display();
  
 
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	  	Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:85,y:-85});
	  
		}



	                
	}




