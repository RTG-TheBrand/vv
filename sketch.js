const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render=Matter.Render;
var d,dimage;
var wall1,wall2,wall3;
var earth,paper;

function preload(){

dimage=loadImage("dustbin.png");

}

function setup(){
    var canvas = createCanvas(1360,657);
    engine = Engine.create();
    world = engine.world;

  d=createSprite(1165,420,280,280);
   d.scale=0.9;
   d.addImage("image",dimage);

    paper=new ball(180,50,50);
		earth=new ground(680,580,width,20);
    wall1=new box(1165,559,280,20);
		wall2=new box(1040,410,20,270);
		wall3=new box(1290,410,20,270);

    /*var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width:1200,
        height: 700,
        wireframe: false
      }

    });*/

    Engine.run(engine);
}  
function draw(){
    background("white");
    Engine.update(engine);
  
	earth.display();
	wall1.display();
	wall2.display();
	wall3.display();
  paper.display();

  drawSprites();
}
function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:155,y:-155});
}

if(keyCode === DOWN_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:-155,y:-155});
}

}
