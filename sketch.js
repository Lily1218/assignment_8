var people = [];

var radius = 30;
var x = 250;
var y = 220;
var incrementX = 2;
var incrementY = 2;
var value = 2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  setShakeThreshold(20);
  //frameRate(12);    
}

function draw() {
  background(value);
    
for(var i = 0; i < value; i++) {
    var myObj = new Ball(random(10,100))
    people.push(myObj)
  }
    
for(var i = 0; i < value; i++){
  people[i].display();
  people[i].move();
}
}

function deviceShaken(){
    value ++;
    if(value>255){
      value=2;
    }
    
}
function Ball(radius){
  this.radius = radius;
  this.x = random(this.radius, width-this.radius);
  this.y = random(this.radius, height-this.radius);
  
  this.incrementX = 1;
  this.incrementY = 1;
  
  this.display = function(){
    noStroke();  
    fill(random(255-value),random(255-value),random(255-value),200);
    ellipse(this.x,this.y,this.radius*2);
  }
  
  this.move = function() {
    
  this.x += this.incrementX;
  this.y += this.incrementY
  
  if( this.x >= width-radius || this.x <= 0 + radius){
    this.incrementX *= -1
  }
  
    if( this.y >= height-radius || this.y <= 0 + radius){
    this.incrementY *= -1
}
}
}