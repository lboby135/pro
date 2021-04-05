var roof,rope1,bobobject1,bobobject2,bobobject3,bobobject4,bobobject5,bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,300,30);
	World.add(world,roof);

	//Create the Bodies Here.

	bobobject1 = new Bob(250,300);
	bobobject2 = new Bob(300,300);
	bobobject3 = new Bob(350,300);
    bobobject4 = new Bob(400,300);
    bobobject5 = new Bob(450,300);


	rope1 = new Rope(bobobject1.body,roof.body,-100,0);
	World.add(world,rope1);

	rope2 = new Rope(bobobject2.body,roof.body,-50,0);
	world.ad(world,rope2);

	rope3 = new Rope(bobobject3.body,roof.body,0,0);
	World.add(world,rope3);

	rope4 = new Rope(bobobject4.body,roof.body,+50,0);
	World.add(world,rope4);

	rope5 = new Rope(bobobject5.body,roof.body,+100,0);
	World.add(world,rope5);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  roof.display();


  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keypressed(){
if(keyCode===UP_ARROW){
Matter.body.applyForce(bobobject1.body,bobobject1.body.postition,{x:-730,y:0})	
}	

}



