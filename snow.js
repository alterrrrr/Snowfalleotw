class Snow{
    constructor(x, y, radius) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius);
        this.x = x
        this.y = y
        this.r = radius
        this.image1 = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image1, 0, 0, this.r, this.r);
        pop();
      }
}