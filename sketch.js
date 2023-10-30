let backgroundImages = [];
let suit1Img, suit2Img;
let suit1, suit2;
let frankCenter;
let whichBackgroundImage = 0;

function preload() {
    // load images into the array called backgroundImages
    backgroundImages[0] = loadImage("backgroundImg.png");
    backgroundImages[1] = loadImage("clouds.jpg");
    suit1Img = loadImage("suitImg.png");
    suit2Img = loadImage("suit2Img.png");
}

function setup() {
    new Canvas(1436,727);
    frankCenter = createVector(460,450);

    suit1 = new Sprite();
    suit1.img = suit1Img;
    suit1.position = createVector(750,450);
    suit1.drag = 10;
}

function draw() {
    clear();
    image(backgroundImages[whichBackgroundImage], 0, 0);
    
    //handle dragging    
    if (suit1.mouse.dragging()) {
        suit1.moveTowards(
            mouseX + suit1.mouse.x,
            mouseY +suit1.mouse.y,
            1)
        console.log("dragging suit1")
    }

    //snap into position + trigger message

    if (dist(suit1.x,suit1.y,frankCenter.x,frankCenter.y) < 20) {
        console.log("wearing suit1");
        suit1.position = createVector(frankCenter.x, frankCenter.y);
        text("here!", 210, 150);
        whichBackgroundImage = 1;
    } else {
        whichBackgroundImage = 0;
    }

}