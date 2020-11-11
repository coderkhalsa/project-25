class Ball {
  constructor(x,y,radius){
    var options = {
    isStatic : true,
    restituion:0.3,
    friction:0.5,
    density:1.2
    
    }
  
  this.body = Bodies.circle(x,y,radius,options )
  this.radius = radius
  this.image = loadImage("paper.png");
 World.add(world,this.body)
  }

display(){
  
  imageMode(CENTER);
 
  image(this.image ,this.body.position.x,this.body.position.y,3*this.radius,3*this.radis)
 
}

}