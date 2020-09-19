class dustbin{
    constructor(x, y){
        this.x=x;
        this.y=y;
        this.dustbinwidth=200;
        this.dustbinheight=100;
        this.wallthickness=20;
        this.angle=0;
        this.bwallBody=Bodies.rectangle(this.x, this.y, this.dustbinwidth, this.wallthickness, {isStatic:true});
        this.lwallBody=Bodies.rectangle(this.x-this.dusbtinwidth/2, this.y-this.dustbinheight/2,this.wallthickness, this.dustbinheight, {isStatic:true});
        this.rWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        Matter.Body.setAngle(this.lWallBody, this.angle);
        Matter.Body.setAngle(this.rWallBody, -1*this.angle);
		World.add(world, this.bwallBody);
		World.add(world, this.lWallBody);
		World.add(world, this.rWallBody);
    }
    display(){
        var posBottom=this.bwallBody.position;
        var posLeft=this.lWallBody.position;
	    var posRight=this.rWallBody.position;
    }
