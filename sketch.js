var iss,issImg 
function preload() {
  issImg = loadImage("Images/iss.png")
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png"); 
  gym = loadAnimation("images/gym1.png", "images/gym1.png", "images/gym2.png", "images/gym2.png"); 
  eat = loadAnimation("images/eat1.png", "images/eat1.png", "images/eat1.png", "images/eat2.png", "images/eat2.png", "images/eat2.png"); 
  bath = loadAnimation("images/bath1.png", "images/bath1.png", "images/bath1.png", "images/bath2.png", "images/bath2.png", "images/bath2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
}




function setup() {
  createCanvas(1200,600);
  astronaut = createSprite(400, 200);
  astronaut.scale = 0.1;
  astronaut.addAnimation("sleep",sleep);
  astronaut.addAnimation("brush",brush);
  astronaut.addAnimation("gym",gym);
  astronaut.addAnimation("eat",eat);
  astronaut.addAnimation("bath",bath);
}

function draw() {
  background(issImg);  
  drawSprites();
  textSize(30);
   fill("white") 
   text("Instructions:", 20, 35); 
   textSize(22); 
   text("Up Arrow = Brushing", 20, 60); 
   text("Down Arrow = Gymming", 20, 80); 
   text("Left Arrow = Eating", 20, 95); 
   text("Right Arrow = Bathing", 20, 109); 
   text("m key = Moving", 20, 125);
   if(keyDown("up")) {
    astronaut.changeAnimation("brush",brush);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("down")) {
    astronaut.changeAnimation("gym",gym);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("left")) {
    astronaut.changeAnimation("eat",eat);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("right")) {
    astronaut.changeAnimation("bath",bath);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("m")) {
    astronaut.changeAnimation("move",move);
    astronaut.velocityY = 2;
    astronaut.velocityX = 2;
   }

   edges = createEdgeSprites();
   astronaut.bounceOff(edges);
}



