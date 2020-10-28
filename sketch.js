var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxSprite,box2,box3,boxBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green");

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	 
	boxSprite=createSprite(width/2, 600, 100,10);
	box2=createSprite(350, 580, 10,50);
	box3=createSprite(450, 580, 10,50);
	engine = Engine.create();
	world = engine.world;
	
	boxBody = ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
	World.add(world, boxBody);

	packageBody = Bodies.circle(width/2 , 200 , 10 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
}

  if(packageBody.x=boxBody.x){
	Matter.Body.setStatic(packageBody,true);
	Matter.Body.packageBody.setRestitution(0);
}
 }