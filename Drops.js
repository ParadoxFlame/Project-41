class Drops {
    constructor(x, y,radius) {
      var options = {
          isStatic: false,
          'friction':0.1,
          'restitution':0
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.image = loadImage("raindrop.png");
      this.body = Bodies.circle(this.x, this.y,this.radius, options);
     
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      push()
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 50, 50);
      pop()
      
    }
  }