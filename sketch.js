var bg;
var oasis, desert, plains, swamp;
var knight, knightImg, dragon, dragonImg;
var ground;
var appleImage, appleGroup;


function preload(){
    loadBgImages();
    knightImg = loadImage("Images/Knight.png");
    dragonImg = loadImage("Images/dragon.png");
    appleImage = loadImage("Images/fruit.png");
    
}

function setup() {
    createCanvas(1400, 800);

    //knight
    knight = createSprite(200, 650);
    knight.addImage(knightImg);
    knight.scale = 0.6;
    knight.debug = true;

    //dragon
    dragon = createSprite(150, 200);
    dragon.addImage(dragonImg);
    dragon.scale = 0.6;

    //ground
    ground = createSprite(700, 780, 1400, 20);

    
    
}

function draw() {
    chooseBackground();
    background(bg);
    knight.collide(ground);
    ground.visibile = false;

    if(keyWentDown(UP_ARROW) && knight.y >= 600){
        knight.velocityY = -20;
    }
    if(keyWentDown(DOWN_ARROW)){
        knight.velocityY = 10;
    }
    knight.velocityY += 1;

    apples();

    console.log(appleGroup);
    if(touching(knight, appleGroup)) {
        apple.visible = false;
        appleGroup.remove(apple);
        console.log(apple.visible);
        apple.lifetime = 0;
    }

    drawSprites();
}

function chooseBackground() {
    if(frameCount <= 100) {
        bg = plains;
    }
    if(frameCount <= 200 && frameCount > 100) {
        bg = desert;
    }
    if(frameCount <= 250 && frameCount > 200) {
        bg = oasis;
    }
    if(frameCount <= 300 && frameCount > 250) {
        bg = desert;
    }
    if(frameCount <= 400 && frameCount > 300) {
        bg = swamp;
    }
}

function loadBgImages() {
    oasis = loadImage("Images/oasis.jpg");
    print(oasis);
    desert = loadImage("Images/desert.jpg");
    print(desert);
    plains = loadImage("Images/plains.jpg");
    print(plains);
    swamp = loadImage("Images/swamp.jpg");
    print(swamp);
}

function apples() {
    appleGroup = new Group();
    if(frameCount % 100 === 0) {
        // var apple = new Apple();
        // apple.sprite.debug = true;
        // console.log(apple.sprite);
        var apple = createSprite(1500, random(400, 600));
        apple.addImage(appleImage);
        apple.velocityX = -4;
        apple.lifetime = 1500;
        apple.scale = 0.1;
        apple.depth = knight.depth;
        appleGroup.add(apple);
    }
    // console.log(appleGroup);
    
    
}
