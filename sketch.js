var canvas;
var music;

var box1, box2, box3, box4;
var square;
var edges; 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    

    box1 = createSprite(695,590,200,20);
    box1.shapeColor = "green";
    
    box2 = createSprite(490,590,200,20);
    box2.shapeColor = "red";

    box3 = createSprite(285,590,200,20);
    box3.shapeColor = "orange";

    box4 = createSprite(80,590,200,20);
    box4.shapeColor = "blue";

    square = createSprite(400,300,20,20);
    square.shapeColor = "white";
    square.velocityX = 4;
    square.velocityY = -5;



    

}

function draw() {
    background(rgb(169,169,169))

    edges = createEdgeSprites()

    square.bounceOff(edges);
    

    if(box1.isTouching(square) && square.bounceOff(box1)) {

       square.shapeColor = "green";
       music.play;

    }

    if(box2.isTouching(square) && square.bounceOff(box2)) {

        square.shapeColor = "red";
        music.play;
 
    }

    if(box3.isTouching(square) && square.bounceOff(box3)) {

       square.shapeColor = "orange";
       music.play;
 
    }
    
    if(box4.isTouching(square) && square.bounceOff(box4)) {

        square.shapeColor = "blue";
        music.play
 
    }



    drawSprites();
}
