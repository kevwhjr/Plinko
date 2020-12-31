const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var col1, col2, col3;

function setup() 
{
  createCanvas(600, 500);

  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  ground = new Ground(width/2, height - 10, width, 20, color("brown")); 

  
  for (var j=40; j <= width; j=j+50)
  {
    plinkos.push(new Plinko(j, 75, 10, color(255, 255, 255)));
  }
  
  for (var j=15; j <= width-10; j=j+50)
  {
    plinkos.push(new Plinko(j, 175, 10, color(255, 255, 255)));
  }

  for (var k=10; k<=width; k=k+80)
  {
    divisions.push(new Ground(k, height - 80, 10, 160, color("white")));
  }
 

}

function draw() 
{
  background(0);  
  Engine.update(engine);
  

  ground.display();
  

  for(var j=0; j<plinkos.length; j++)
  {
      plinkos[j].display();
  }

  for(var i=0; i<divisions.length; i++)
  {
      divisions[i].display();
  }

  if (frameCount%60===0)
  {
    col1 = random(0, 255);
    col2 = random(0, 255);
    col3 = random(0, 255);
    particles.push(new Particle(random((width/2)-200, (width/2)+200), 10, 10, color(col1, col2, col3)));
  }

  for(var k=0; k<particles.length; k++)
  {
    particles[k].display();
  }

  //drawSprites();
}