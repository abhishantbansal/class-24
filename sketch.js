const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
    

    box1 = new Box(1500,300,100,100);
    box2 = new Box(1300,300,100,100);
    pig1 = new pig(1400,300,50,50);
    log1 = new log(1400,250,400,0);

    box3 = new Box(1500,200,100,100);
    box4 = new Box(1300,200,100,100);
    pig2 = new pig(1400,200,50,50);
    log2 = new log(1400,100,400,0);

    box5 = new Box(1400,50,100,100);
    log3 = new log(1300,40,200,-45);
    log4 = new log(1500,40,200,45);

    support= new ground();
}

function draw(){
    background(0);
    Engine.update(engine);
    box2.display();
    box1.display();
    support.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
}
