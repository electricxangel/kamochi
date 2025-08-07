/* VARIABLES */
let screen = "home";
let duck;
let duckStage = "egg";
let food = 50;
let happiness = 50;
let health = 50;
let duckImg;
let eggImg;
let ducklingImg;
let roomImg;
let outsideImg;
let breadImg;
let windowImg;
let longOutsideImg;
let bowlImg;
let windowSprite;
let bowl;
let font;
let bread;
let gameState = 1;
let duckImgFlipped;
let score = 0;
let totalScore = 0;
let quack;
let rock;
let coin;
let rockImg;
let coinImg;
let spawn;
let lowerStat;
let statToLower;
let bowlOutlined;
let windowOutlined;
let breadSound;
let taDaAudio;
let bed;
let bedImg;
let bedOutlined;
let sleep = 50;
let notepad;
let notepadImg;
let nightImg;
let timerValue = 0;
let ghostImg;
let ghostFlipped;
let ghost;
let ghostPick;
let windowDarkImg;
let windowDarkOutlinedImg;
let movement;
let duckSleep;
let ducklingSleep;
let ghostNoise;

function preload() {
  duckImg = loadImage("assets/duck_eye_open_64 (2).png");
  eggImg = loadImage("assets/egg.png");
  ducklingImg = loadImage("assets/duckling.png");
  roomImg = loadImage("assets/room.png");
  outsideImg = loadImage("assets/sunny bg.png");
  font = loadFont("assets/BitcountPropSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf");
  breadImg = loadImage("assets/bread_eye_open (1).png");
  duckImgFlipped = loadImage("assets/duck_flipped.png");
  windowImg = loadImage("assets/window.png");
  bowlImg = loadImage("assets/bowl.png");
  quack = loadSound("assets/ytmp3free.cc_quack-sound-effect-youtubemp3free.org.mp3")
  longOutsideImg = loadImage("assets/sunny bg long.png");
  rockImg = loadImage("assets/New Piskel-1.png (3).png");
  coinImg = loadImage("assets/coin.png");
  bowlOutlined = loadImage("assets/bowl-outlined.png");
  windowOutlined = loadImage("assets/window-outlined.png");
  breadSound = loadSound("assets/ytmp3free.cc_toast-falling-over-youtubemp3free.org.mp3");
  taDaAudio = loadSound("assets/ytmp3free.cc_ta-da-sound-effects-youtubemp3free.org.mp3");
  bedImg = loadImage("assets/bed.png")
  bedOutlined = loadImage("assets/bed-outlined.png")
  notepadImg = loadImage("assets/notepad.png");
  nightImg = loadImage("assets/night bg.png");
  ghostImg = loadImage("assets/ghost.png");
  ghostFlipped = loadImage("assets/ghost-flipped.png");
  windowDarkImg = loadImage("assets/window-dark.png");
  windowDarkOutlinedImg = loadImage("assets/window-dark-outline.png");
  duckSleep = loadImage("assets/duck-sleep.png");
  ducklingSleep = loadImage("assets/duckling-sleeping.png");
  ghostNoise = loadSound("assets/ghost noise.mp3");
  }

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(800,400);
  background(224,224,224);

  //Create window
  windowSprite = new Sprite(windowImg, width/4-100, 125, 148, 148);
  windowSprite.collider = "k";

  //Create bowl
  bowl = new Sprite(bowlImg, width/4+25, 350, 100, 61);
  bowl.collider = "k";

  //Create catcher
  catcher = new Sprite(1000,1000,104,95);
  catcher.image = duckImg;
  catcher.collider = "k";

  //Create bed
  bed = new Sprite(bedImg, 75, 350, 128, 75)
  bed.collider = "k";
  
  //Create bread
  bread = new Sprite(breadImg, width/4, -1000, 32)
  bread.rotationLock = true;

  //Create duck
  duck = new Sprite(eggImg, width/2-50,350, 104, 95);
  duck.vel.x = 0;
  duck.collider = "k";
  duck.overlaps(bowl)
  duck.overlaps(bed)
  
  //Create rock
  rock = new Sprite(rockImg, 1000, 1000, 50, 50)
  rock.rotationLock = true;
  rock.collider = "k";
  
  //Create coin
  coin = new Sprite(coinImg, 1000, 1000, 50, 50)
  coin.rotationLock = true;
  coin.collider = "k";

  //Create notepad
  notepad = new Sprite(notepadImg, 5000, 5000, 100, 200)

  //Create ghost
  ghost = new Sprite(ghostImg, 1000, 1000, 100, 100);
  ghost.rotationlock = true;
  ghost.collider = "k";

  

  setInterval(timeIt, 1000)

  
}

/* DRAW LOOP REPEATS */
function draw() {
  if (screen != "happiness") {
    image(roomImg, 0, 0, 800, 400);
    textFont(font);
    textSize(30);
    textAlign(LEFT);
    text("food: " + food, 425, 50);
    text("happiness: " + happiness, 425, 100);
    text("sleep: " + sleep, 425, 150)
    text("news:", 450, 245);
    
    if (duckStage == "duckling") {
      text("Your egg hatched\ninto a duckling!", 450, 275)
    }
    if (duckStage == "duck") {
      text("Your duckling grew\nup to a duck!", 450, 275)
    }
  }
  
  
  //Main menu
  if (screen == "home") {
    
    //Lower stats randomly
    lowerStat = Math.floor(Math.random() * 150);
    if (lowerStat == 1) {
      statToLower = Math.floor(Math.random() * 3);
      if (statToLower == 0) {
        food = food - 10;
        if (food < 0) {
          food = 0;
        }
      }
        
      else if (statToLower == 1) {
        sleep = sleep - 10;
        if (sleep < 0) {
          sleep = 0;
        }
      }
        
      else {
        happiness = happiness - 10;
        if (happiness < 0) {
          happiness = 0;
        }
      }
    }


    //Have duck move randomly
    if (timerValue <= 0) {
      movement = Math.floor(Math.random() * 3);
      if (movement == 0 || duckStage == "egg") {
        duck.vel.x = 0;
      }
      else if (movement == 1) {
        duck.vel.x = 0.5;
        if (duckStage == "duck") {
          duck.image = duckImgFlipped;
        }
      }
      else {
        duck.vel.x = -0.5;
        if (duckStage == "duck") {
          duck.image = duckImg;
        }
      }
      timerValue = 2;
    }

    if (duck.x < 50) {
      duck.x = 50;
    }
    if (duck.x > 350) {
      duck.x = 350;
    }
    
    

    if (mouseX >= bowl.x-50 && mouseX <= bowl.x+50 &&
        mouseY >= bowl.y-31 && mouseY<= bowl.y+31) {
      bowl.image = bowlOutlined;
    }
    else {
      bowl.image = bowlImg;
    }

    if (mouseX >= windowSprite.x-74 && mouseX <= windowSprite.x+74 && 
        mouseY >= windowSprite.y-74 && mouseY <= windowSprite.y+74) {
      if (sleep <= 30) {
        windowSprite.image = windowDarkOutlinedImg;
      }
      else {
        windowSprite.image = windowOutlined;
      }
      
    }
    else {
      if (sleep <= 30) {
        windowSprite.image = windowDarkImg;
      }
      else {
        windowSprite.image = windowImg;
      }
    }

    if (mouseX >= bed.x-64 && mouseX <= bed.x+64 && 
      mouseY >= bed.y-50 && mouseY <= bed.y+50) {
      bed.image = bedOutlined;
    }
    else {
      bed.img = bedImg
    }
    
    //Game over sequence if a stat drops below zero
    if (food <= 0 || happiness <= 0 || sleep <= 0) {
      textSize(40);
      hideAllSprites();
      color(255,255,255)
      notepad.pos = {x: width/4, y: height/2-20};
      notepad.draw();
      text("Game over :(", 75, height/2-10);
      
      
    }

    if (duck.mouse.presses()) {
      quack.play();
    }

    
    if (bowl.mouse.presses()) {
      leaveHome();
      catcher.pos = {x: width/4, y: 350}
      catcher.image = duck.image;
      resetBread();
      gameState = 1;
      screen = "food";
    }

    if (windowSprite.mouse.presses()) {
      leaveHome();
      duck.pos = {x: 50, y: height/2};
      if (duck.image == duckImg) {
        duck.image = duckImgFlipped;
      }
      gameState = 0;
      screen = "happiness";
    }

    if (bed.mouse.presses()) {
      leaveHome();
      duck.pos = {x: width/4, y: 350}
      gameState = 1;
      timerValue = 10;
      ghost.pos = {x: random(50, width/2-50), y: random(50, height-50)}
      screen = "sleep";
    }
  }


  
  
  //Food collection game (food)
    
  else if (screen == "food") {
    image(outsideImg, 0, 0, 800, 400);

    if (gameState == 1) {
      textSize(30);
      text("Move the duck with the\nleft and right arrow keys \nto catch the falling bread.", width/2 + 15, 30);
      fill(0,0,0);
      textFont(font);
      textSize(30);
      textAlign(LEFT);
      text("Score: " + score, 20, 50);
      
      //If bread reaches bottom, game over
      if (bread.y >= height) {
        breadSound.play();
        catcher.pos = {x: 1000, y: 1000};
        bread.pos = {x: -1000, y: -1000};
        bread.vel.y = 0;
        
        food = food + score;
        
        if (food >= 100) {
          food = 100;
        }
        
        gameState = 2;
      }

      //Move catcher
      if (kb.pressing("left")) {
        if (duckStage == "duck") {
          catcher.image = duckImg;
        }
        else {
          catcher.image = duck.image;
        }
        catcher.vel.x = -4;
      }
      else if (kb.pressing("right")) {
        if (duckStage == "duck") {
          catcher.image = duckImgFlipped;
        }
        else {
          catcher.image = duck.image;
        }
        catcher.vel.x = 4;
      }
      else {
        catcher.vel.x = 0;
      }

      //Stop catcher at the edge of the screen
      if (catcher.x < 50) {
        catcher.x = 50;
      }
      else if (catcher.x > 350) {
        catcher.x = 350;
      }

      //If bread collides with catcher, move back to random position at top
      if (bread.collides(catcher)) {
        score = score + 1
        quack.play();
        resetBread();
      }
    }
    if (gameState == 2) {
      textSize(50);
      textAlign(CENTER);
      text("Game over", width/4, height/2 - 20);
      textSize(20);
      text("Press space\nto return.", width/4, height/2 + 5)
      
      if (kb.pressing("space")) {
        goHome();
      }
    }

    
  }

  //timing/coordination game (happiness)
    
  else if (screen == "happiness") {
    image(longOutsideImg, 0, 0, 800, 400);
    textFont(font);
    textSize(30);
    fill(0,0,0)
    textAlign(LEFT);
    text("Score: " + score, 20, 50);

    if (gameState == 0) {
      textSize(30);
      textAlign(CENTER);
      text("Click the coins as they hit the duck.\nDon't click the rocks!", 300, 125);
      textSize(20);
      text("Press space to start.", 300, height/2 + 5)

      if (kb.pressing("space")) {
        respawnCoinRock();
        gameState = 1;
    }
    }

    if (gameState == 1) {
      if (0 <= coin.x && coin.x <= 150) {
        if (mouseIsPressed) {
          score = score + 1;
          quack.play();
          respawnCoinRock();
        }
      }
      if (0 <= rock.x && rock.x <= 150) {
        if (mouseIsPressed) {
          breadSound.play();
          happiness = happiness + score;
          if (happiness >= 100) {
            happiness = 100;
          }
          gameState = 2;
          rock.x = 1000;
          rock.vel.x = 0;
          coin.x = 1000;
          coin.vel.x = 0;
          duck.x = 1000;
        }
      }
      
      if (coin.x < 0 || rock.x < 0) {
        respawnCoinRock();
        }
      }

    if(gameState == 2) {
      textSize(50);
      textAlign(CENTER);
      text("Game over", width/4, height/2 - 20);
      textSize(20);
      text("Press space\nto return.", width/4, height/2 + 5)

      if (kb.pressing("space")) {
        goHome();
      }
    }
  }

  //point and click game (sleep)
  else if (screen == "sleep") {
    image(nightImg, 0, 0, 800, 400);
    textFont(font);
    textSize(30);
    fill(0,0,0);
    text("Click as many ghosts\nas you can before\ntime runs out!", width/2 + 15, 30);
    fill(255,255,255);
    textSize(30);
    textAlign(LEFT);
    text("Score: " + score, 20, 50);

    if (duckStage == "duck") {
      duck.image = duckSleep;
    }
    else if (duckStage == "duckling") {
      duck.image = ducklingSleep;
    }

    if (gameState == 1) {
      
      if (timerValue == 0) {
        gameState = 2;
      }

      if (ghost.mouse.presses()) {
        ghostNoise.play();
        score++;
        ghostPick = Math.floor(Math.random() * 2);
        if (ghostPick == 0) {
          ghost.image = ghostImg;
        }
        else {
          ghost.image = ghostFlipped;
        }
        
        ghost.pos = {x: random(50, width/2-50), y: random(50, height-50)}
        
      }
    }
    if (gameState == 2) {
      ghost.pos = {x: 1000, y: 1000};
      textSize(50);
      textAlign(CENTER);
      text("Time's up!", width/4, height/2 - 20);
      textSize(20);
      text("Press space\nto return.", width/4, height/2 + 5)

      if (kb.pressing("space")) {
        score = Math.floor(score / 2);
        sleep = sleep + score
        fill(0,0,0);
        goHome();
      }
    }  

    
  } 
  
}

//Functions

function resetBread() {
  bread.y = 0;
  bread.x = random(width/2);
  bread.vel.y = random(5, 10);
  bread.direction = "down";
}

function goHome() {
  screen = "home";
  timerValue = 2;
  checkTotalScore();
  
  windowSprite.pos = {x: width/4-100, y: 125};
  duck.pos = {x: width/2-50, y: 350};
  bowl.pos = {x: width/4+25, y: 350};
  bed.pos = {x: 75, y: 350};

  gameState = 1;
}

function leaveHome() {
  windowSprite.pos = {x: 1000, y: 1000};
  duck.pos = {x: 1000, y: 1000};
  duck.vel.x = 0;
  bowl.pos = {x: 1000, y: 1000};
  bed.pos = {x: 1000, y: 1000};
}

function respawnCoinRock() {
  rock.x = 1000;
  rock.vel.x = 0;
  coin.x = 1000;
  coin.vel.x = 0;
  
  spawn = Math.floor(Math.random() * 2);
  
  if (spawn == 0) {
    rock.x = width-20;
    rock.y = height/2;
    rock.vel.x = random(-10, -20);
  }
  else {
    coin.x = width-20;
    coin.y = height/2;
    coin.vel.x = random(-10, -20);
  }
}

function checkTotalScore() {
  
  if ((totalScore + score >= 25 && totalScore < 25) || (totalScore + score >= 75 && totalScore < 75)) {
    taDaAudio.play();
  }
  
  totalScore = totalScore + score;
  score = 0;
  
  if (totalScore >= 75) {
    duckStage = "duck";
    duck.image = duckImg;
  }
  else if (totalScore >= 25) {
    duckStage = "duckling"
    duck.image = ducklingImg;
  }
}

function hideAllSprites() {
  duck.pos = {x: 1000, y: 1000};
  leaveHome();
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}
