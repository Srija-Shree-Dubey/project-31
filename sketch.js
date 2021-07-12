var Engine = Matter.Engine;
var World  = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;

function preload()
{
	bgIMG = loadImage("Background.png")
}

function setup() 
{
  createCanvas(800, 1005);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <= width; k = k + 80) 
  {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 25; j <= width -20; j = j + 40) 
  { 
    plinkos.push(new Plinko(j,260));
  }

  //create 2nd row of plinko objects
  for (var j = 45; j <=width-10; j = j + 40) 
  {
    plinkos.push(new Plinko(j,290));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width -20; j = j + 40) 
  {
    plinkos.push(new Plinko(j,320));
  }
  
  //create 4th row of plinko objects
  for (var j = 45; j <=width -10; j = j + 40) 
  {
    plinkos.push(new Plinko(j,350));
  }


  //create 5th row of plinko objects
  for (var j = 25; j <=width -20; j = j + 40) 
  {
    plinkos.push(new Plinko(j,380));
  }
  
  //create 6th row of plinko objects
  for (var j = 45; j <=width -10; j = j + 40) 
  {
    plinkos.push(new Plinko(j,410));
  }
  //create 7th row of plinko objects
  for (var j = 25; j <=width -20; j = j + 40) 
  {
    plinkos.push(new Plinko(j,440));
  }
  
  //create 8th row of plinko objects
  for (var j = 45; j <=width -10; j = j + 40) 
  {
    plinkos.push(new Plinko(j,470));
  }

/********************************************************************************/
  //create 9th row of plinko objects
  for (var j = 25; j <=width -20; j = j + 50) 
  {
    plinkos.push(new Plinko(j,510));
  }
  
  //create 8th row of plinko objects
  for (var j = 45; j <=width -10; j = j + 50) 
  {
    plinkos.push(new Plinko(j,540));
  }

  //create 11th row of plinko objects
  for (var j = 25; j <=width -20; j = j + 50) 
  {
    plinkos.push(new Plinko(j,570));
  }
  
  //create 12th row of plinko objects
  for (var j = 45; j <=width -10; j = j + 50) 
  {
    plinkos.push(new Plinko(j,600));
  }


  
  //create particle objects

  
    
}
function draw() 
{
  background(bgIMG);
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) 
  {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }

  //display the paricles 
  if(frameCount % 90 === 0)
  {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
  
  for (var s = 0; s < particles.length; s++)
  {
    particles[s].display();
  }
}