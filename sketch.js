var capture;
let slider;

function setup() {

  let canvas = createCanvas(1980, 1080);
  
  
  capture = createCapture(VIDEO);
  capture.size(800, 600);

  
    slider = createSlider(0, 255, 100);
  slider.position(1000, 950);
  slider.style('width', '80px');
  
  slider2 = createSlider(0, 255, 100);
  slider2.position(900, 950);
  slider2.style('width', '80px');
  
  
  
  
  //stepSize_slider = createSlider(8, 48,12,1);
}


function preload(){
  Img1 = loadImage('monitor.jpg')
}


function draw() {
  background(230,250,200);
  capture.loadPixels();
  

 
     image(Img1,30,30,350,320)
  
  

    
     let val = slider.value();
    let val2  = slider2.value();
  
  push();
   translate (300,300)
var stepSize = floor(map(30, 0, width, 8, 20));
for (var x = 0; x < capture.width; x += stepSize) {
  for (var y = 0; y < capture.height; y += stepSize) {
    var index = ((y*capture.width) + x) * 4;
    // The code for your filter will go here!
    var redVal = capture.pixels[index];
    var greenVal = capture.pixels[index + 1];
    var blueVal = capture.pixels[index + 2];
  
    
    strokeWeight(1);
    stroke(val2);
    
    fill(val*redVal, greenVal+val, blueVal);
    // you can change the shape of the 'pixels'
    rectMode(CENTER);
    
    frameRate(2);
    rect(x, y, stepSize, stepSize/random(3), mouseX/150);
 //   rect(x, y, stepSize/4, stepSize, mouseX/150);
    
    
  }
}
  pop();
  noStroke();
    fill(230,250,200)
  rect(400,70,1000,100)

  fill(100,50,100)
  textSize(100)

  text('Identity Protector!',380,150)
  
  
  fill(100,50,100)
  textSize(40)
   text('*Target could not be located*',1100,800)
  
  
    
  fill(100,50,100)
  textSize(40)
   text('*Surveillance failed to identify target*',1000,400)
  
  
     
  fill(100,50,100)
  textSize(40)
   text('*Subject',50,600)
    text('unidentifiable*',70,650)



}