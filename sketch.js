var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500, 200, 60,100);
}

function draw() {
  background(255,255,255);  

  if(car.isTouching(wall)){
    car.velocityX = 0; 
    car.shapeColor = "red";
    wall.shapeColor = "green";
  }

  deformation = Math.round((0.5*weight*speed*speed/22500));

  if(deformation > 180 && car.isTouching(wall)){
    text("This car isn't lethal for passengers",800,200);
  }

  if(deformation <= 180 && deformation > 80 && car.isTouching(wall)){
    text("This car is ok for passengers",800,200);
  }

  if(deformation < 80 && car.isTouching(wall)){
    text("This car is lethal for passengers",800,200);
  }


  drawSprites();
}