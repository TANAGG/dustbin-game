class PaperObject {
    constructor(x,y){
     var options={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
    }
       this.body = Bodies.rectangle(200,200,20,20,options);
    }
}

display();



