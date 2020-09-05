class Ball {
    constructor(x, y) {
      var options = {
         isSatic: false,
         restitution: 0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y,50,options);
      this.radius = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = 200;
      pos.y = 200;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white")
      fill("red");
      rect(0, 0, this.radius);
      pop();
    }
  };

  