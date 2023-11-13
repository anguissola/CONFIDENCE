let backgroundImages = [];
let whichBackgroundImage = 0;
let whiteShirtImg, suit2Img;
let whiteShirt, whitePants;
let redJacket; 
let brownPants, sweater, blackPants, blackShoes, shortBoots, tallBoots;
let textBox;
let frankCenter;
let mySound;

function preload() {
    // load images into the array called backgroundImages
    backgroundImages[0] = loadImage("backgroundflat.png");
    backgroundImages[1] = loadImage("clouds.jpg");
    myGuy = loadImage("base.png");
    textBox = loadImage ("text box.png");
    whiteShirtImg = loadImage("whiteShirt.png");
    whitePantsImg = loadImage("whitePants.png");
    redJacketImg = loadImage("redJacket.png");
    // brownPantsImg = loadImage("brownPants.png");
    // sweaterImg = loadImage("sweater.png");
    // blackPantsImg = loadImage("blackPants.png");
    // blackShoesImg = loadImage("blackShoes.png");
    // shortBootsImg = loadImage ("shortBoots.png");
    // tallBootsImg = loadImage ("tallBoots.png");
    // suit2Img = loadImage("suit2Img.png");
}

function setup() {
    new Canvas(1436,727);
    frankCenter = createVector(455,425);

    whiteShirt = new Sprite();
    whiteShirt.img = whiteShirtImg;
    whiteShirt.position = createVector(750,420);
    whiteShirt.drag = 10;
    whiteShirt.rotationSpeed=0;


    whitePants = new Sprite();
    whitePants.img = whitePantsImg;
    whitePants.position = createVector(750,620);
    whitePants.drag = 10;
    whitePants.rotationSpeed=0;
    whiteShirt.overlaps(whitePants);

    redJacket = new Sprite();
    redJacket.img = redJacketImg;
    redJacket.position = createVector(850,420);
    redJacket.drag = 10;
    redJacket.rotationSpeed = 0;
    redJacket.overlaps(whiteShirt);
    redJacket.overlaps(whitePants);

  


}

function draw() {
    clear();
    image(backgroundImages[whichBackgroundImage], 0, 0);
    image(myGuy, 410, 70);
    image(textBox, 30,55);
    
    //handle dragging    
    if (whiteShirt.mouse.dragging()) {
        whiteShirt.moveTowards(
            mouseX + whiteShirt.mouse.x,
            mouseY +whiteShirt.mouse.y,
            1)
        console.log("dragging whiteShirt")
    }

    if (whitePants.mouse.dragging()) {
        whitePants.moveTowards(
            mouseX + whitePants.mouse.x,
            mouseY +whitePants.mouse.y,
            1)
        console.log("dragging whitePants")
    }

    if (redJacket.mouse.dragging()) {
        redJacket.moveTowards(
            mouseX + redJacket.mouse.x,
            mouseY +redJacket.mouse.y,
            1)
        console.log("dragging redJacket")
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