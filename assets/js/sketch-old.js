/*TEMPLATE
var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');   
}
function draw() {
}
*/


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
var dark = false;

var stepSize;
// var stepSizeX;
// var stepSizeY;
var diameter = 1;

var delayInMilliseconds = 10; 

let numOfCircles;

let darkModeToggle;
let bodyToggle;
let bodyVisible = true;
let bodyVisibleButtonText = "x";
let darkModeToggleText = "o";

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
  //CREATE BUTTON FOR DARK MODE
  darkModeToggle = createButton(darkModeToggleText);
  darkModeToggle.size(30, 30);
  darkModeToggle.position(width-30, height-130);
  darkModeToggle.mousePressed(DarkMode);

  //CREATE BUTTON FOR CIRCLEGAZING
  //bodyVisibleButtonText = "here for the circles"
  bodyToggle = createButton(bodyVisibleButtonText);
  bodyToggle.size(30, 30);
  bodyToggle.id("body-toggle");
  bodyToggle.position(width-30, height-100);
  bodyToggle.mousePressed(HereForCircles);

  //FOR DEFAULT EMPTY CIRCLES//
  /*for (let x = 0; x < width; x+=stepSize) {
    for (let y = 0; y < height; y+=stepSize) {
      circle(x+stepSize/2, y+stepSize/2, stepSize);
    }
  }*/

  
}






function draw() {
  //bgColor = 250;
  //ect(0, 0, width, height);
  
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
  /*if (direction == n) {
    posY -= stepSizeY;
  } else if (direction == ne) {
    posX += stepSizeX;
    posY -= stepSizeY;
  } else if (direction == e) {
    posX += stepSizeX;
  } else if (direction == se) {
    posX += stepSizeX;
    posY += stepSizeY;
  } else if (direction == s) {
    posY += stepSizeY;
  } else if (direction == sw) {
    posX -= stepSizeX;
    posY += stepSizeY;
  } else if (direction == w) {
    posX -= stepSizeX;
  } else if (direction == nw) {
    posX -= stepSizeX;
    posY -= stepSizeY;
  }*/
  
//if (posX > (width - stepSize)) {
//  //posX = 0;
//  posX = stepSize/2;
//} else if (posX < stepSize) {
//  //posX = width;
//  posX = width-(stepSize/2)-(width%stepSize);
//}
//if (posY > (height - stepSize)) {
//  //posY = 0;
//  posY = stepSize/2;
//} else if (posY < stepSize) {
//  //posY = height;
//  posY = height-(stepSize/2)-(height%stepSize);
//}
  
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
  if (dark == true) {
    shade = int(random(15,75));
  }
  fill(shade);
  
  
  ellipse(posX, posY, stepSize, stepSize);
  

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  darkModeToggle.position(width-30, height-130);
  bodyToggle.position(width-30, height-100);
}

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
/*
function HereForCircles() {
if (bodyVisible == true) {
  bodyVisible = false;
  document.documentElement.style.setProperty('--default-opacity', '0.0');
  setTimeout(function() {
    bodyToggle.style("background-color", "#1c1c1c");
    bodyToggle.style("color", "#dedede");
    bodyToggle.html(bodyVisibleButtonText);
    }, delayInMilliseconds);
} else {
  document.documentElement.style.setProperty('--default-opacity', '0.9');
  bodyToggle.style("background-color", "#dedede");
  bodyToggle.style("color", "#1c1c1c");
  bodyToggle.html(bodyVisibleButtonText);
  bodyVisible = true;
}
} 
*/
//if (bodyVisible == true) {
//  document.getElementById("main-box").className = "dark";
//  bodyVisible == !bodyVisible;
//    console.log(bodyVisible);
//} else {
//  document.getElementById("main-box").className = "light";
//  bodyVisible == !bodyVisible;
//console.log(bodyVisible);
//}
//}





/*
'use strict';
var canvas;

var tileCount = 20;
var actRandomSeed = 0;

var rectSize = 30;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
    canvas.style('z-index', '-1');   
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  fill(192, 100, 64, 60);
}

function draw() {
  clear();

  randomSeed(actRandomSeed);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;

      var shiftX1 = mouseX / 20 * random(-1, 1);
      var shiftY1 = mouseY / 20 * random(-1, 1);
      var shiftX2 = mouseX / 20 * random(-1, 1);
      var shiftY2 = mouseY / 20 * random(-1, 1);
      var shiftX3 = mouseX / 20 * random(-1, 1);
      var shiftY3 = mouseY / 20 * random(-1, 1);
      var shiftX4 = mouseX / 20 * random(-1, 1);
      var shiftY4 = mouseY / 20 * random(-1, 1);

      push();
      translate(posX, posY);
      beginShape();
      vertex(shiftX1, shiftY1);
      vertex(rectSize + shiftX2, shiftY2);
      vertex(rectSize + shiftX3, rectSize + shiftY3);
      vertex(shiftX4, rectSize + shiftY4);
      endShape();
      pop();
    }
  }
}
*/
/*
'use strict';

var NORTH = 0;
var NORTHEAST = 1;
var EAST = 2;
var SOUTHEAST = 3;
var SOUTH = 4;
var SOUTHWEST = 5;
var WEST = 6;
var NORTHWEST = 7;
var direction;

var stepSize = 1;
var diameter = 1;

var posX;
var posY;


var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');   

    noStroke();
  fill(0, 40);

  posX = width / 2;
  posY = height / 2;
}
function draw() { 
for (var i = 0; i <= mouseX; i++) {
    direction = int(random(0, 8));

    if (direction == NORTH) {
      posY -= stepSize;
    } else if (direction == NORTHEAST) {
      posX += stepSize;
      posY -= stepSize;
    } else if (direction == EAST) {
      posX += stepSize;
    } else if (direction == SOUTHEAST) {
      posX += stepSize;
      posY += stepSize;
    } else if (direction == SOUTH) {
      posY += stepSize;
    } else if (direction == SOUTHWEST) {
      posX -= stepSize;
      posY += stepSize;
    } else if (direction == WEST) {
      posX -= stepSize;
    } else if (direction == NORTHWEST) {
      posX -= stepSize;
      posY -= stepSize;
    }

    if (posX > width) posX = 0;
    if (posX < 0) posX = width;
    if (posY < 0) posY = height;
    if (posY > height) posY = 0;

    ellipse(posX + stepSize / 2, posY + stepSize / 2, diameter, diameter);
  }
}
*/
