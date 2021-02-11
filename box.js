class Box{
    constructor(x,y,height,width){
        var options=
        {
         density:8,
         restituion:8,
         friction:7,
         
         
        
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body);
       
   
    }
   
      display(){
          var pos=this.body.position 
          rectMode(CENTER);
         fill("black");
         rect(pos.x,pos.y,this.width,this.height);
          
          
      }
   
   }