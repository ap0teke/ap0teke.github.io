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

let numOfCircles;

//let darkModeToggle;
let lightModeToggle;

let bodyToggle;
let bodyVisible = true;
let bodyVisibleButtonText = "x";
//let darkModeToggleText = "o";
let lightModeToggleText = "o";

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // stepSizeX = windowWidth/50;
  // stepSizeY = windowHeight/30;
  //stepSize = windowHeight/50;
  numOfCircles = int(random(50, 200));
  stepSize = windowWidth/numOfCircles;
  canvas.position(0, 0);
  canvas.style('z-index', '-1');   
  posX = stepSize/2 + int(random(10))*stepSize;
  posY = stepSize/2 + int(random(10))*stepSize;
  //background(0);
  noStroke();
  frameRate(17);
  // //CREATE BUTTON FOR DARK MODE
  // darkModeToggle = createButton(darkModeToggleText);
  // darkModeToggle.size(30, 30);
  // darkModeToggle.position(width-30, height-130);
  // darkModeToggle.mousePressed(DarkMode);

    //CREATE BUTTON FOR LIGHT MODE
    lightModeToggle = createButton(lightModeToggleText);
    lightModeToggle.size(30, 30);
    lightModeToggle.position(width-30, height-130);
    lightModeToggle.mousePressed(LightMode);

  //CREATE BUTTON FOR CIRCLEGAZING
  //bodyVisibleButtonText = "here for the circles"
  bodyToggle = createButton(bodyVisibleButtonText);
  bodyToggle.size(30, 30);
  bodyToggle.id("body-toggle");
  bodyToggle.position(width-30, height-100);
  bodyToggle.mousePressed(HereForCircles);


  document.body.style.backgroundColor = "#1c1c1c";
  
}






function draw() {

  
  shade = int(random(155,255));
  direction = int(random(0, 8));
  
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

function LightMode() {
  if (light == false) {
    light = true;
    //CHANGE BACKGROUND COLOR
    document.body.style.backgroundColor = "#1c1c1c";
    //CHANGE BUTTON COLORS
    bodyToggle.style("background-color", "#1c1c1c");
    bodyToggle.style("color", "#dedede");
    bodyToggle.html(bodyVisibleButtonText);
    lightModeToggle.style("background-color", "#1c1c1c");
    lightModeToggle.style("color", "#dedede");
 
  } else {
    light = false;
    //CHANGE BACKGROUND COLOR
    document.body.style.backgroundColor = "#dedede";
    //CHANGE BUTTON COLORS
    bodyToggle.style("background-color", "#dedede");
    bodyToggle.style("color", "#1c1c1c");
    bodyToggle.html(bodyVisibleButtonText);
    lightModeToggle.style("background-color", "#dedede");
    lightModeToggle.style("color", "#1c1c1c");


  }
}


function HereForCircles() {
  if (bodyVisible == true) {
    bodyVisible = false;
    document.documentElement.style.setProperty('--default-opacity', '0.0');
    ;
  } else {
    document.documentElement.style.setProperty('--default-opacity', '0.95');
    bodyVisible = true;
  }
  } 

