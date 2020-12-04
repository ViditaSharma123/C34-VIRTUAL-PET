//Create variables here

var dog;
var happyDog;
var database;
var foodS;
var foodStock = 20;
var dogImg;
var hDogImg;

function preload()
{
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  

  dog = createSprite(200,300);
  dog.addImage(dogImg);
  dog.scale = 0.2;
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
if(keyWentUp(UP_ARROW)){
  dog.addImage(dogImg);
}

  drawSprites();
  //add styles here
  fill(200);
  text("Food Remaining: "+foodS,200,200)

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=20;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}


