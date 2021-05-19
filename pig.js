class pig {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("green");
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  