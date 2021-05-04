class Ball
{
    constructor() {
        var options ={
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle (300,50,40,options);
        this.x=50;
        this.y=50;
        this.radius=20;

        World.add(world,this.body)
        
        
    }
    display(){
        image (this.image, this.body.position.x, this.body.position.y, 80,80 )
    }
}