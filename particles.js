class Particles{
    constructor(x,y,r,color){
        var options={
            restitution: 0,
            isStatic: false
        }
        this.x=x;
        this.x=y;
        this.x=r;

        this.body = Bodies.circle(x,y,r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    }
