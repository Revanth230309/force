const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1,button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

ball_option={
restitution:0.9

}

  ball = Bodies.circle(200,300,20,ball_option);
 World.add(world,ball);

 button1 = createImg('up.png');
 button1.position(20,30);
 button1.size(50,50)
 button1.mouseClicked(vforce)
 button2 = createImg('right.png');
 button2.position(200,30);
 button2.size(50,50)
 button2.mouseClicked(hforce)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
}

function hforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})


}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  
  
  }
