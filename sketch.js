let backgroundImages = [];
let whichBackgroundImage = 0;
let whiteShirtImg, suit2Img;
let whiteShirt, suit2;
let frankCenter;
let mySound;

function preload() {
    // load images into the array called backgroundImages
    backgroundImages[0] = loadImage("backgroundflat.png");
    backgroundImages[1] = loadImage("clouds.jpg");
    myGuy = loadImage("base.png");
    whiteShirtImg = loadImage("whiteShirt.png");
    suit2Img = loadImage("suit2Img.png");
    soundFormats("flac", "mp3", "ogg", "wav");
    mySound=loadSound("rise.wav");
}

function setup() {
    new Canvas(1436,727);
    frankCenter = createVector(455,425);

    whiteShirt = new Sprite();
    whiteShirt.img = whiteShirtImg;
    whiteShirt.position = createVector(750,420);
    whiteShirt.drag = 10;
}

function draw() {
    clear();
    image(backgroundImages[whichBackgroundImage], 0, 0);
    image(myGuy, 410, 70);
    
    //handle dragging    
    if (whiteShirt.mouse.dragging()) {
        whiteShirt.moveTowards(
            mouseX + whiteShirt.mouse.x,
            mouseY +whiteShirt.mouse.y,
            1)
        console.log("dragging whiteShirt")
    }

    //snap into position + trigger message

    if (dist(whiteShirt.x,whiteShirt.y,frankCenter.x,frankCenter.y) < 20) {
        console.log("wearing whiteShirt");
        whiteShirt.position = createVector(frankCenter.x, frankCenter.y);
        text("here!", 210, 80);
        whichBackgroundImage = 1;
      
    } else {
        whichBackgroundImage = 0;
    }

}

function mousePressed() {
    mySound.play();
}