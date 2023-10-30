let backgroundImg;
let suit1Img, suit2Img;
let suit1, suit2;
let frankCenter;

function preload() {
    backgroundImg = loadImage("backgroundImg.png");
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
    image(backgroundImg,0,0)

    //handle dragging    
    if (suit1.mouse.dragging()) {
        suit1.moveTowards(
            mouseX + suit1.mouse.x,
            mouseY +suit1.mouse.y,
            1)
        console.log("dragging suit1")
    }

    //snap into position

    if (dist(suit1.x,suit1.y,frankCenter.x,frankCenter.y) < 20) {
        console.log("wearing suit1");
        suit1.position = frankCenter;
    }

}