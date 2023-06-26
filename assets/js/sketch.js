var canvas;

var n = 0;
var ne = 1;
var e = 2;
var se = 3;
var s = 4;
var sw = 5; 
var w = 6;
var nw= 8;

var shade;
//var dark = false;

var light = false;

var stepSize;
// var stepSizeX;
// var stepSizeY;
var diameter = 1;

var delayInMilliseconds = 10; 
let randomFollow;
let numOfCircles;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // stepSizeX = windowWidth/50;
  // stepSizeY = windowHeight/30;
  //stepSize = windowHeight/50;
  numOfCircles = int(random(100, 300));
  stepSize = windowWidth/numOfCircles;
  canvas.position(0, 0);
  canvas.style('z-index', '-1');   
  posX = stepSize/2 + int(random(10))*stepSize;
  posY = stepSize/2 + int(random(10))*stepSize;
  //background(0);
  noStroke();
  frameRate(17);



  document.body.style.backgroundColor = "#1c1c1c";
  
}






function draw() {

  
  shade = int(random(155,255));
  direction = int(random(0, 8));
  randomFollow = random(1);

  if (randomFollow < 0.7) {
    if (direction == n) {
      posY -= stepSize;
    } else if (direction == ne) {
      posX += stepSize;
      posY -= stepSize;
    } else if (direction == e) {
      posX += stepSize;
    } else if (direction == se) {
      posX += stepSize;
      posY += stepSize;
    } else if (direction == s) {
      posY += stepSize;
    } else if (direction == sw) {
      posX -= stepSize;
      posY += stepSize;
    } else if (direction == w) {
      posX -= stepSize;
    } else if (direction == nw) {
      posX -= stepSize;
      posY -= stepSize;
    }
  } else {
    //here to the mouse
    if (mouseX < posX) {
      posX -= stepSize;
     } else {
      posX += stepSize;
     }
     if (mouseY < posY) {
      posY -= stepSize;
     } else {
      posY -= stepSize;
     }
  }
  

  
if (posX > width) {
  posX = stepSize / 2;
} else if (posX < stepSize /2) {
  posX = width - (width % stepSize) - (stepSize / 2);
}
if (posY > height) {
  posY = stepSize / 2;
} else if (posY < stepSize /2) {
  posY = height - (height % stepSize) - (stepSize / 2);
}

  
 shade = int(random(200, 240));
  if (light == true) {
    shade = int(random(15,75));
  }
  fill(shade);
  
  
  ellipse(posX, posY, stepSize, stepSize);
  

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  lightModeToggle.position(width-30, height-130);
  bodyToggle.position(width-30, height-100);
}
/* 
function DarkMode() {
  if (dark == false) {
    dark = true;
    //CHANGE BACKGROUND COLOR
    document.body.style.backgroundColor = "#1c1c1c";
    //CHANGE BUTTON COLORS
    bodyToggle.style("background-color", "#1c1c1c");
    bodyToggle.style("color", "#dedede");
    bodyToggle.html(bodyVisibleButtonText);
    darkModeToggle.style("background-color", "#1c1c1c");
    darkModeToggle.style("color", "#dedede");
 
  } else {
    dark = false;
    //CHANGE BACKGROUND COLOR
    document.body.style.backgroundColor = "#dedede";
    //CHANGE BUTTON COLORS
    bodyToggle.style("background-color", "#dedede");
    bodyToggle.style("color", "#1c1c1c");
    bodyToggle.html(bodyVisibleButtonText);
    darkModeToggle.style("background-color", "#dedede");
    darkModeToggle.style("color", "#1c1c1c");
  }
} */



