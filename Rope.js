class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var op = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX,y:this.offsetY}
        }
        this.rope = Matter.constraint.create(op);
        World.add(world,this.rope);
       }
       display(){
           var point1 = this.rope.bodyA.postion;
           var point2 = this.rope.bodyB.postion;

           strokeWeight(2);

           var Anchor1X = point1.x;
           var Anchor1Y = point1.y;

           var Anchor1X = point1.x + this.offsetX; 
           var Anchor1Y = point1.y + this.offsetY;

           Line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);  
        
       }
}

