let backgroundImages = [];
let whichBackgroundImage = 0;

//these variables are a mess but everytime i touch something it all breaks, so i'm leaving the jenga tower be
let whiteShirtImg, suit2Img;
let whiteShirt, whitePants;
let redJacket; 
let brownPants, sweater, blackPants, blackShoes, shortBoots, tallBoots;
let hat;

//establishing textbox and alternatives
let textBox;
let display1, display2, display3;

//establishing pants effects
let head1, puttyHead, colorHead;

//establishing shoe set pieces
let camera, bigBaby, necklace;



//establishing position for snapping
let frankCenter;
let frankCenter2;
let frankPants;
let frankBrownPants;
let frankBlackPants;
let frankRedJacket;
let frankBlackShoes;
let frankShortBoots;
let frankTallBoots;
let frankHat;


function preload() {
    // preloading backgrounds
    backgroundImages[0] = loadImage("backgroundflat.png");
    backgroundImages[1] = loadImage("clouds.jpg");
    backgroundImages[2] = loadImage("angel.png");

    //preloading mannequin and text box
    myGuy = loadImage("base.png");
    textBox = loadImage ("secrecyAgreement.png");

    //preloading clothing images
    whiteShirtImg = loadImage("whiteShirt.png");
    whitePantsImg = loadImage("whitePants.png");
    redJacketImg = loadImage("redJacket.png");
    brownPantsImg = loadImage("brownPants.png");
    sweaterImg = loadImage("sweater.png");
    blackPantsImg = loadImage("blackPants.png");
    blackShoesImg = loadImage("blackShoes.png");
    shortBootsImg = loadImage ("shortBoots.png");
    tallBootsImg = loadImage ("tallBoots.png");
    hatImg = loadImage ("hat.png"); 
//triggered images
    display1= loadImage("display0.png");
    display2= loadImage("display1.png");
    display3=loadImage("display2.png");
    camera=loadImage("camera.png");
    bigBaby=loadImage("bigBaby.png");
    necklace=loadImage("textImg.png");
    head1=loadImage("headSprite.png");
    puttyHead=loadImage("puttyHead.png");
    colorHead=loadImage("colorHead.png");
}

function setup() {
    new Canvas(1436,727);

    //snapping position p2 --> creating vectors
    frankCenter = createVector(455,425);
    frankCenter2 = createVector(530,300);
    frankPants = createVector(505, 535);
    frankBrownPants = createVector(528, 458);
    frankBlackPants = createVector(525,520);
    frankRedJacket = createVector(530,338);
    frankBlackShoes = createVector(485, 680);
    frankShortBoots = createVector(482, 670);
    frankTallBoots = createVector(490, 645);
    frankHat = createVector(530, 90);

    //creating clothes in "closet"

    whiteShirt = new Sprite();
    whiteShirt.img = whiteShirtImg;
    whiteShirt.position = createVector(750,420);
    whiteShirt.drag = 10;
    whiteShirt.rotationSpeed=0;

    sweater = new Sprite ();
    sweater.img = sweaterImg;
    sweater.position = createVector(1200, 300);
    sweater.drag = 10;
    sweater.rotationSpeed = 0;
    whiteShirt.overlaps(sweater);

    brownPants = new Sprite ();
    brownPants.img = brownPantsImg;
    brownPants.position = createVector(980, 470);
    brownPants.drag = 10;
    brownPants.rotationSpeed = 0;
    whiteShirt.overlaps(brownPants);
    sweater.overlaps(brownPants);

    blackPants = new Sprite ();
    blackPants.img = blackPantsImg;
    blackPants.position = createVector(1200, 500);
    blackPants.drag = 10;
    blackPants.rotationSpeed = 0;
    whiteShirt.overlaps(blackPants);
    blackPants.overlaps(brownPants);
    blackPants.overlaps(sweater);

   
    blackShoes = new Sprite();
    blackShoes.img = blackShoesImg;
    blackShoes.position = createVector (110, 500);
    blackShoes.drag = 10;
    blackShoes.rotationSpeed = 0;
    blackShoes.overlaps(whiteShirt);
    blackShoes.overlaps(brownPants);
    blackShoes.overlaps(sweater);
    blackShoes.overlaps(blackPants);

    shortBoots = new Sprite();
    shortBoots.img = shortBootsImg;
    shortBoots.position = createVector (180, 400);
    shortBoots.drag = 10;
    shortBoots.rotationSpeed = 0;
    shortBoots.overlaps(blackShoes);
    shortBoots.overlaps(whiteShirt);
    shortBoots.overlaps(brownPants);
    shortBoots.overlaps(sweater);
    shortBoots.overlaps(blackPants);


    tallBoots = new Sprite();
    tallBoots.img = tallBootsImg;
    tallBoots.position = createVector (300, 500);
    tallBoots.drag = 10;
    tallBoots.rotationSpeed = 0;
    tallBoots.overlaps(blackShoes);
    tallBoots.overlaps(shortBoots);
    tallBoots.overlaps(blackShoes);
    tallBoots.overlaps(whiteShirt);
    tallBoots.overlaps(brownPants);
    tallBoots.overlaps(sweater);
    tallBoots.overlaps(blackPants);

    whitePants = new Sprite();
    whitePants.img = whitePantsImg;
    whitePants.position = createVector(800,520);
    whitePants.drag = 10;
    whitePants.rotationSpeed=0;
    whiteShirt.overlaps(whitePants);
    whitePants.overlaps(tallBoots);
    shortBoots.overlaps(whitePants);
    blackPants.overlaps(whitePants);
    brownPants.overlaps(whitePants);
    sweater.overlaps(whitePants);
    blackShoes.overlaps(whitePants);

    redJacket = new Sprite();
    redJacket.img = redJacketImg;
    redJacket.position = createVector(990,330);
    redJacket.drag = 10;
    redJacket.rotationSpeed = 0;
    redJacket.overlaps(whiteShirt);
    redJacket.overlaps(brownPants);
    redJacket.overlaps(sweater);
    redJacket.overlaps(blackPants);
    redJacket.overlaps(whitePants);
    tallBoots.overlaps(redJacket);
    shortBoots.overlaps(redJacket);
    blackShoes.overlaps(redJacket);

    hat = new Sprite();
    hat.img = hatImg;
    hat.position = createVector(200,620);
    hat.drag = 10;
    hat.rotationSpeed=0;
    hat.overlaps(whiteShirt);
    hat.overlaps(brownPants);
    hat.overlaps(sweater);
    hat.overlaps(blackPants);
    hat.overlaps(whitePants);
    tallBoots.overlaps(hat);
    shortBoots.overlaps(hat);
    blackShoes.overlaps(hat);
    hat.overlaps(redJacket);
}

//now onto dragging


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

    if (brownPants.mouse.dragging()) {
        brownPants.moveTowards(
            mouseX + brownPants.mouse.x,
            mouseY +brownPants.mouse.y,
            1)
        console.log("dragging brownPants")
    }

    if (sweater.mouse.dragging()) {
        sweater.moveTowards(
            mouseX + sweater.mouse.x,
            mouseY +sweater.mouse.y,
            1)
        console.log("dragging sweater")
    }

    
    if (blackPants.mouse.dragging()) {
        blackPants.moveTowards(
            mouseX + blackPants.mouse.x,
            mouseY +blackPants.mouse.y,
            1)
        console.log("dragging blackPants")
    }

    if (blackShoes.mouse.dragging()) {
        blackShoes.moveTowards(
            mouseX + blackShoes.mouse.x,
            mouseY +blackShoes.mouse.y,
            1)
        console.log("dragging blackShoes")
    }

    if (shortBoots.mouse.dragging()) {
        shortBoots.moveTowards(
            mouseX + shortBoots.mouse.x,
            mouseY +shortBoots.mouse.y,
            1)
        console.log("dragging shortBoots")
    }

    if (tallBoots.mouse.dragging()) {
        tallBoots.moveTowards(
            mouseX + tallBoots.mouse.x,
            mouseY +tallBoots.mouse.y,
            1)
        console.log("dragging tallBoots")
    }
    
    if (hat.mouse.dragging()) {
        hat.moveTowards(
            mouseX + hat.mouse.x,
            mouseY +hat.mouse.y,
            1)
        console.log("dragging hat")
    }

    //snap into position p3 --> trigger message

    if (dist(whiteShirt.x,whiteShirt.y,frankCenter.x,frankCenter.y) < 20) {
        console.log("wearing whiteShirt");
        whiteShirt.position = createVector(frankCenter.x, frankCenter.y);
        image(display1, 30,55);
    }

    if (dist(redJacket.x,redJacket.y,frankRedJacket.x,frankRedJacket.y) < 20) {
        console.log("wearing redJacket");
        redJacket.position = createVector(frankRedJacket.x, frankRedJacket.y);
        image(display2, 30,55);
      }


    if (dist(sweater.x,sweater.y,frankCenter2.x,frankCenter2.y) < 20) {
        console.log("wearing sweater!");
        sweater.position = createVector(frankCenter2.x,frankCenter2.y);
        image(display3, 30,55);
    }

    if (dist(hat.x,hat.y,frankHat.x,frankHat.y) < 20) {
        console.log("wearing hat!");
        hat.position = createVector(frankHat.x,frankHat.y);    
        whichBackgroundImage = 2;
    //   } else {
    //     whichBackgroundImage = 0;
    }

    if (dist(whitePants.x,whitePants.y,frankPants.x,frankPants.y) < 20) {
        console.log("wearing whitePants");
        whitePants.position = createVector(frankPants.x,frankPants.y);
        image(head1, 400,30);
        image(head1, 450,90);
        image(head1, 500,150);
        image(head1, 550,210);
        image(head1, 600,270);
        image(head1, 650,330);
        image(head1, 700,390);
        image(head1, 750,450);
        image(head1, 800,510);
        image(head1, 850,570);
        image(head1, 900,630);
        image(head1, 950,690);
    }

    if (dist(brownPants.x,brownPants.y,frankBrownPants.x,frankBrownPants.y) < 20) {
        console.log("wearing brownPants");
        brownPants.position = createVector(frankBrownPants.x,frankBrownPants.y);
        image(puttyHead, 450,70);
    }

    if (dist(blackPants.x,blackPants.y,frankBlackPants.x,frankBlackPants.y) < 20) {
        console.log("wearing brownPants");
        blackPants.position = createVector(frankBlackPants.x,frankBlackPants.y);
        image(colorHead, 483,70);
    }

    if (dist(blackShoes.x,blackShoes.y,frankBlackShoes.x,frankBlackShoes.y) < 20) {
        console.log("wearing blackShoes");
        blackShoes.position = createVector(frankBlackShoes.x,frankBlackShoes.y);
        image(necklace, 690,525);
    }

    if (dist(tallBoots.x,tallBoots.y,frankTallBoots.x,frankTallBoots.y) < 20) {
        console.log("wearing tall boots");
        tallBoots.position = createVector(frankTallBoots.x,frankTallBoots.y);
        image(bigBaby, 652,0)
    }

    if (dist(shortBoots.x,shortBoots.y,frankShortBoots.x,frankShortBoots.y) < 20) {
        console.log("wearing shortBoots");
        shortBoots.position = createVector(frankShortBoots.x,frankShortBoots.y);
        image(camera, 0,0);
    }

    

}

