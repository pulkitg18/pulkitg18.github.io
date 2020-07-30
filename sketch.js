const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "start";
var bg = "bg1.png";
var score = 0;
var chances
var count = 0;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1950,1000);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(975,height,1950,20);
   
    platform = new Ground(150, 910, 300, 170);

    //Pyramid 1
    box1 = new Box(700,940,70,70);
    box2 = new Box(920,940,70,70);
    box3 = new Box(810,780,70,70);
    box4 = new Box(700,890,70,70);
    box5 = new Box(920,890,70,70);
   
    log1 = new Log(810,900,300, PI/2);
    log2 =  new Log(810,880,300, PI/2);
    log3 = new Log(760,760,150, PI/7);
    log4 = new Log(870,760,150, -PI/7);
    
    pig1 = new Pig(810, 920);
    pig2 = new Pig(810, 890);



support = new Ground(600,500,300,10)
    box16 = new Box(490,450,70,70);
    box17= new Box(710,450,70,70);
    box18 = new Box(490,400,70,70);
    box19= new Box(710,400,70,70);
    box20= new Box(600,320,70,70);
   
    log8 = new Log(600,420,300, PI/2);
    log9 =  new Log(600,390,300, PI/2);
     
    
    pig10 = new Pig(600, 430);
    pig11= new Pig(600, 350);






    // Pyramid 2
    ground1 = new Ground(1500,700,500,10)
    box6 = new Box(1350,650,70,70)
    log5 = new Log(1300,600,200,PI/90);
   
    bird = new Bird(200,650);
    //box7 = new Box (1350,450,70,70);
    box8 = new Box (1350,550,70,70);
    box9 = new StaticBox (1700,660,70,70)
    box10 = new StaticBox (1700,525,70,70);
    box11 = new StaticBox (1700,600,70,70);
    log6 = new Ground (1500,490,500,10);
    box12 = new Box (1350,200,70,200);
    box13 = new Box (1700,200,70,200);
    log7  = new Log(1500,170,500,PI/2)
  //  log10 = new Log(1730,600,200,PI/90);

    box14 = new Box (1350,10,70,70);
    box15 = new Box (1500,10,70,70);
    pig3 = new Pig(1450,630);
    pig4 = new Pig(1500,630);
    pig5 = new Pig(1570,630);
    pig6 = new Pig(1500,570)
    pig7 = new Pig(1500,430);
    pig8 = new Pig(1570,430)
    pig9 = new Pig(1500,400);
    pig12 = new Pig(1350,950)
    pig13 = new Pig(1500,950)
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:650});
}

function draw(){
    
        background(backgroundImg);
    chances = 20-count;
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
        text("Moves Left "+chances,250,50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box17.display();
   
   
    ground.display();

    support.display();
   
    pig1.display();
    pig1.score();
    log9.display();
    pig11.display();
    pig11.score();

    box16.display();
    log1.display();
    box20.display();
    log2.display();
    log3.display();
   // log10.display();
    log4.display();
    pig10.display();
    pig10.score();
    pig9.display();
    pig9.score();
    pig13.display();
    pig13.score();
    pig2.display();
    pig2.score();
log8.display();
    pig6.display();
    pig6.score();

    pig3.display();
    pig3.score();
    pig4.display();
    pig4.score();

    pig5.display();
    box19.display();
    pig5.score();

    pig7.display();
    pig7.score();

    pig12.display();
    pig12.score();

    pig8.display();
    pig8.score();
    
    // Pyramid - 2
    ground1.display();
    box6.display();
    log5.display();
   // box7.display();
    //pig3.display();
    bird.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
   // log10.display();
    box13.display();
    log7.display();
    platform.display();
    log6.display();
    box18.display();
    box14.display();
    box15.display();
    slingshot.display();    

    if(gameState === "start"){
        textSize(32);
        text("The Rules Are as follows -",742,94);
        text("1. You will get 20 chances to play ",742,120)
        text("2. You will win if you kill all pigies within 20 chance you win",742,150)
       text("3. To Play again refresh the screen by Ctrl+R",742,190);
       text("Zoom out the screen to see full game ",742,220)
       text("4. Press S to start ",742,250);
       
        
    }

    if(count === 20 && score !== 2600){
        textSize(60);
        text("YOU LOST PRESS CONTROL + R TO START NEW GAME",200,620);
        gameState = "end";
    }
 if(count <= 20 && score === 2600 ){
    textSize(60);
    text("YOU LOST PRESS CONTROL + R TO START NEW GAME",200,620);
     gameState = "end";
 }
}

function mouseDragged(){
    if( gameState!=="end" && gameState!=="start"){
 
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}
}


function mouseReleased(){
    if( gameState!=="end" && gameState!=="start"){
        count++;
    slingshot.fly();
    gameState = "launched";
}
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
       bird.trajectory=[];
       Matter.Body.setPosition(bird.body,{x:250,y:650});
    }
    if(keyCode === 83){
        gameState= "onSling";
     }
}


/*async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);

}*/