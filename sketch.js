
var sprite
function setup() {
createCanvas(1200,1200);
sprite = createSprite (100,200,100,100);
}

function draw() 
{
background("white");
if(keyIsDown(LEFT_ARROW))
{
  sprite.position.x = sprite.position.x -5
}
if(keyIsDown(UP_ARROW))
{
  sprite.position.y = sprite.position.y -5
}
if(keyIsDown(DOWN_ARROW))
{
  sprite.position.y = sprite.position.y +5
}
if(keyIsDown(RIGHT_ARROW))
{
  sprite.position.x = sprite.position.x +5
}
drawSprites();

}




