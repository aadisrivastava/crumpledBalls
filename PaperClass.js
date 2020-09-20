class paperClass{
    constructor(x,y,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:false

        }
        this.body = Bodies.circle(150,500, radius, options);
        this.image=loadImage("paper.png");
       
        World.add(world, this.body);
      }
    
    display(){

     var paperSprite=this.body.position;
      push()
      translate(paperSprite.x,paperSprite.y);
      rectMode(CENTER)
       
      strokeWeight(3);
      fill(255,0,255)
      ellipse(0,0,3,3);

      pop();




    }
}