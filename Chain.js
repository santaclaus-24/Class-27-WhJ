class Chain {
    constructor(bodyA,bodyB){
        var options = {
           bodyA: bodyA,
           bodyB: bodyB,
           stiffness: 0.05,
           length: 7
        }
         this.chain = Constraint.create(options)
         World.add(world,this.chain)
    }
     display(){
         var pA= this.chain.bodyA.position
         var pB = this.chain.bodyB.position
         strokeWeight(2);
         stroke("black");
         line(pA.x, pA.y, pB.x, pB.y);
     }
}