
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObj,groundObj;	
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,550,70);
	groundObject=new Ground(width/2,560,width,20);
	dustbinObj=new Dustbin(1050,540);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#66CDAA");
  
  groundObject.display();
  dustbinObj.display();
  paperObject.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-130});
  	}
}
