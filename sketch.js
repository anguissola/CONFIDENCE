let backgroundImages = [];
let whichBackgroundImage = 0;

//these variables are a mess but everytime i touch something it all breaks, so i'm leaving the jenga tower be
let whiteShirtImg, suit2Img;
let whiteShirt, whitePants;
let redJacket; 
let brownPants, sweater, blackPants, blackShoes, shortBoots, tallBoots;
let textBox;

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


function preload() {
    // preloading backgrounds
    backgroundImages[0] = loadImage("backgroundflat.png");
    backgroundImages[1] = loadImage("clouds.jpg");

    //preloading mannequin and text box
    myGuy = loadImage("base.png");
    textBox = loadImage ("text box.png");

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
 
//triggered images
    memory1= loadImage("hat.png");
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

    //creating clothes in "closet"
    whiteShirt = new Sprite();
    whiteShirt.img = whiteShirtImg;
    whiteShirt.position = createVector(750,420);
    whiteShirt.drag = 10;
    whiteShirt.rotationSpeed=0;

    whitePants = new Sprite();
    whitePants.img = whitePantsImg;
    whitePants.position = createVector(800,520);
    whitePants.drag = 10;
    whitePants.rotationSpeed=0;
    whiteShirt.overlaps(whitePants);

    sweater = new Sprite ();
    sweater.img = sweaterImg;
    sweater.position = createVector(1200, 300);
    sweater.drag = 10;
    sweater.rotationSpeed = 0;
    whiteShirt.overlaps(sweater);
    sweater.overlaps(whitePants);

    brownPants = new Sprite ();
    brownPants.img = brownPantsImg;
    brownPants.position = createVector(980, 470);
    brownPants.drag = 10;
    brownPants.rotationSpeed = 0;
    whiteShirt.overlaps(brownPants);
    brownPants.overlaps(whitePants);
    sweater.overlaps(brownPants);

    blackPants = new Sprite ();
    blackPants.img = blackPantsImg;
    blackPants.position = createVector(1200, 500);
    blackPants.drag = 10;
    blackPants.rotationSpeed = 0;
    whiteShirt.overlaps(blackPants);
    blackPants.overlaps(whitePants);
    blackPants.overlaps(brownPants);
    blackPants.overlaps(sweater);

    redJacket = new Sprite();
    redJacket.img = redJacketImg;
    redJacket.position = createVector(990,330);
    redJacket.drag = 10;
    redJacket.rotationSpeed = 0;
    redJacket.overlaps(whiteShirt);
    redJacket.overlaps(whitePants);
    redJacket.overlaps(brownPants);
    redJacket.overlaps(sweater);
    redJacket.overlaps(blackPants);

    blackShoes = new Sprite();
    blackShoes.img = blackShoesImg;
    blackShoes.position = createVector (110, 500);
    blackShoes.drag = 10;
    blackShoes.rotationSpeed = 0;
    blackShoes.overlaps(whiteShirt);
    blackShoes.overlaps(whitePants);
    blackShoes.overlaps(redJacket);
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
    shortBoots.overlaps(whitePants);
    shortBoots.overlaps(redJacket);
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
    whitePants.overlaps(tallBoots);
    tallBoots.overlaps(redJacket);
    tallBoots.overlaps(brownPants);
    tallBoots.overlaps(sweater);
    tallBoots.overlaps(blackPants);

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
    

    //snap into position p3 --> trigger message

    if (dist(whiteShirt.x,whiteShirt.y,frankCenter.x,frankCenter.y) < 20) {
        console.log("wearing whiteShirt");
        whiteShirt.position = createVector(frankCenter.x, frankCenter.y);
        text("here!", 210, 80);
        image(memory1, 210, 80);
        whichBackgroundImage = 1;
      
    } else {
        whichBackgroundImage = 0;
    }

    if (dist(redJacket.x,redJacket.y,frankRedJacket.x,frankRedJacket.y) < 20) {
        console.log("wearing redJacket");
        redJacket.position = createVector(frankRedJacket.x, frankRedJacket.y);
        text("here!", 210, 80);
      }

    if (dist(sweater.x,sweater.y,frankCenter2.x,frankCenter2.y) < 20) {
        console.log("wearing sweater!");
        sweater.position = createVector(frankCenter2.x,frankCenter2.y);
        text("sweater here!!", 210, 80);
    }

    if (dist(whitePants.x,whitePants.y,frankPants.x,frankPants.y) < 20) {
        console.log("wearing whitePants");
        whitePants.position = createVector(frankPants.x,frankPants.y);
        text("pants here!", 210, 180);
    }

    if (dist(brownPants.x,brownPants.y,frankBrownPants.x,frankBrownPants.y) < 20) {
        console.log("wearing brownPants");
        brownPants.position = createVector(frankBrownPants.x,frankBrownPants.y);
        text("brown pants here!", 210, 180);
    }

    if (dist(blackPants.x,blackPants.y,frankBlackPants.x,frankBlackPants.y) < 20) {
        console.log("wearing brownPants");
        blackPants.position = createVector(frankBlackPants.x,frankBlackPants.y);
        text("black pants here!", 210, 180);
    }

    if (dist(blackShoes.x,blackShoes.y,frankBlackShoes.x,frankBlackShoes.y) < 20) {
        console.log("wearing blackShoes");
        blackShoes.position = createVector(frankBlackShoes.x,frankBlackShoes.y);
        text("black shoes here!", 210, 180);
    }

    if (dist(tallBoots.x,tallBoots.y,frankTallBoots.x,frankTallBoots.y) < 20) {
        console.log("wearing tall boots");
        tallBoots.position = createVector(frankTallBoots.x,frankTallBoots.y);
        text("tall boots shoes here!", 210, 180);
    }

    if (dist(shortBoots.x,shortBoots.y,frankShortBoots.x,frankShortBoots.y) < 20) {
        console.log("wearing shortBoots");
        shortBoots.position = createVector(frankShortBoots.x,frankShortBoots.y);
        text("shortBoots shoes here!", 210, 180);
    }

    

}

