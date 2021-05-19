class ground{

    //properties
    constructor(){
        var ground_options ={
            isStatic: true
        }
    this.body = Matter.Bodies.rectangle(800,580,1600,20,ground_options);
    Matter.World.add(world,this.body);
    }
  // function
  display(){
      rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,1600,20);
   
  }
}