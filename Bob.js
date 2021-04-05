class Bob{

    constructor(x,y){
       var options = {
           isStatic: false,
           restitution: 1,
           friction: 0,
           debsity:7.8,
       } 
       this,body = bodies.circle(x,y,25,options);
       World.add(world,this.body);

       console.log(this.body);
    }
    display(){
         push();
         ellipseMode(RADIUS);
         fill(254,0,255);
         ellipse(this.body.postion.x,this.body.postion.y,25,25);
         pop();
    }

    }