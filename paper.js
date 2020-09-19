class Paper{
    constructor(x, y, radius, [options]) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic:false,
        }
        this.x=x;
        this.y=y;
        this.r=radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("green");
        fill(255);
        pop();
      } 
}
