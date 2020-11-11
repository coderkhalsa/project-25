 class Dustbin {
        constructor() {
          var options = {
             'isStatic':true,
            'restitution':0.8,
              'friction':1,
              'density':1.0
          }
        
          this.leftBody = Bodies.rectangle(800,650,10,300,options)
          this.rightBody = Bodies.rectangle(1000,650,10,300,options)
          this.bottomBody = Bodies.rectangle(900,695,200,10,options)
          World.add(world, this.leftBody);
          World.add(world, this.rightBody);
          World.add(world, this.bottomBody);
          this.image = loadImage("dustbingreen.png");
        }
        display(){
          
          rectMode(CENTER);
          fill("red");
          rect(this.leftBody.position.x, this.leftBody.position.y, 10, 100);
          rect(this.rightBody.position.x, this.rightBody.position.y, 10, 100);
          rect(this.bottomBody.position.x,this.bottomBody.position.y, 200, 10);
          image(this.image ,800,490,200,200)
        }
      };
      
    
    
   