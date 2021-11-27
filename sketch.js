
var runner
var runnerimg
var path
var pathimg


function preload(){
runnerimg=loadAnimation("Runner-1.png","Runner-2.png")
pathimg=loadImage("path.png")




}








function setup(){

createCanvas(800,400)
path=createSprite(200,0)
path.scale=1.5
path.addImage("path",pathimg)
path.velocityY=5
runner=createSprite(100,350,5,3)
runner.addAnimation("running_runner",runnerimg)
runner.scale=0.1



}







function draw(){
if (path.y>400){
    path.y=200
}
runner.x=mouseX
drawSprites()
}



