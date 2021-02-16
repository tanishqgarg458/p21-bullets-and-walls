//Tanishq
var speed,wall,bullet,weight,thickness;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)
bullet=createSprite(50,200,50,50)
wall=createSprite(1200,200,thickness,height/2)


bullet.velocityX=speed

}
function draw() {
  background(255,255,255); 
  //bulllet is touching wall or not....algo1 
 if(algo1(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
 if(damage >10){
	 wall.shapeColor = "red";
 }
 if(damage <10){
	wall.shapeColor = "green";
}
}
  drawSprites();
}