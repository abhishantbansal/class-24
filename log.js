class log {
    constructor(x, y, width,angle) {
      var options = {
          'restitution':0.1,
          "friction":1
         
      }
      this.body = Bodies.rectangle(x, y, width,20, options);
      Matter.Body.setAngle(this.body, angle)
      this.width = width;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    Engine.update(engine);
    push();
      rectMode(CENTER);
      fill("white");
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      rect(0, 0, this.width,20);
      pop();
    }
  }
  

