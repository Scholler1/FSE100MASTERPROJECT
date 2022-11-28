var myp51;


var gui = function(g)
{
  let enter;
  
  let back;
  let backagain;

  let ex1;
  let ex2;
  let ex3;

  let words;
  
  g.setup = function()
  {
  let col = g.color(200,255,255)
  g.createCanvas(500, 500);
  g.background(215,0,64)
  enter = g.createButton("Homepage");
  g.textSize(32)
  g.t = g.text('Progress to Recovery', 100, 100) // disappears when press back 
  g.textFont('Times New Roman')
  enter.style('background-color',col)
  enter.position(125,200);
  enter.style('font-family','Courier')
  enter.style('font-size',"48px")
  enter.mousePressed(g.home);
  
  let col3 = g.color(15,82,186)
  let col2 = g.color(115,194,251)
  back = g.createButton("Back");
  back.style('background-color', col3);
  back.style('font-family','Comic Sans MS')
  back.style('font-size',"16px")
  back.hide();
  
  backagain = g.createButton("Back");
  backagain.style('background-color',col3)
  backagain.style('font-family','Comic Sans MS')
  backagain.style('font-size',"16px")
  backagain.hide();
   
  ex1 = g.createButton("Exercise 1");
  ex1.style('background-color',col2)
  ex1.style('font-family','Georgia')
  ex1.style('font-size',"24px")
  ex1.hide();
  
  ex2 = g.createButton("Exercise 2");
  ex2.style('background-color',col2)
  ex2.style('font-family','Georgia')
  ex2.style('font-size',"24px")
  ex2.hide();
  
  ex3 = g.createButton("Exercise 3");
  ex3.style('background-color',col2)
  ex3.style('font-family','Georgia')
  ex3.style('font-size',"24px")
  ex3.hide(); 
  
  }
  
  g.draw = function() {
  back.mousePressed(g.backPressed);
  
  backagain.mousePressed(g.backToExercises);
  
  ex1.mousePressed(g.exerciseOne);
  ex2.mousePressed(g.exerciseTwo);
  ex3.mousePressed(g.exerciseThree);

}

g.home = function()
{
  g.createCanvas(500, 500);
  g.background(215,0,64)
  enter.hide(); 
  ex1.show();
  ex1.position(160, 75);
  ex2.show();
  ex2.position(160, 200);
  ex3.show();
  ex3.position(160, 315);
  
  back.show();
  backagain.hide();
}

g.hideExercises = function()
{
  ex1.hide();
  ex2.hide();
  ex3.hide();
}


g.exerciseOne = function()
{
  words = ""
  g.textSize(28);
  g.fill(255,191,0)
  g.t = g.text("Scroll down for Exercise 1!", 100, 220);
  g.textSize(28);
  g.fill(255,191,0)
  g.textSize(16);
  g.t = g.text("Drag the circle around the ring as many times in the timeframe.", 25, 320)
  g.t = g.text("Keep the circle green.", 25, 340)
  g.t = g.text("Restart the timer by coming back to this page.", 25, 360)
  g.hideExercises();
  back.hide();
  backagain.show();
  myp51 = new p5(sketchbe)
}

g.exerciseTwo = function()
{
  g.textSize(28);
  g.fill(255,191,0)
  g.t = g.text("Scroll down for Exercise 2!", 100, 220);
  g.textSize(16)
  g.t = g.text("Press the first circle with your mouse to change its color.", 25, 320)
  g.t = g.text("Hold the first circle until the second circle's color changes.", 25, 340)
  g.t = g.text("Repeat for Points!", 25, 360)
  g.hideExercises();
  back.hide();
  backagain.show();
  myp51 = new p5(sketchs);
  
}

g.exerciseThree = function()
{
  g.textSize(28);
  g.fill(255,191,0)
  g.t = g.text("Scroll down for Exercise 3!", 100, 220);
  g.textSize(16);
  g.fill(255,191,0)
  g.t = g.text("Drag the circle around the triangle as many times in the timeframe.", 25, 320)
  g.t = g.text("Keep the circle green.", 25, 340)
  g.t = g.text("Restart the timer by coming back to this page.", 25, 360)
  g.hideExercises();
  back.hide();
  backagain.show();
  myp51 = new p5(sketch1);
}
  
g.backPressed = function()
{
  g.createCanvas(500, 500);
  g.background(215,0,64)
  g.hideExercises();
  enter.show();
  back.hide();
  g.textSize(32)
  g.t = g.text('Progress to Recovery', 100, 100);
}
  
g.backToExercises = function()
{
  g.createCanvas(500, 500)
  g.background(215,0,64)
  g.home();
  myp51.remove();
}

}



var sketch1 = function(m) {
  m.x = 100;
  m.y = 300;
  
  m.r = 255;
  m.g = 0;
  m.b = 0;
  
  m.setup = function()
  {
    m.createCanvas(400, 400);
    m.background(256);
  }
  let timer1 = 30;
  let timered = 0;
  let timegreen = 0;
  
  m.draw = function()
  {
    m.background(256);

  m.fill(256, 256, 256);
  m.stroke(0, 0, 0)
  m.strokeWeight(6)
  m.triangle(100, 300, 200, 150, 300, 300)
  m.textSize(24)
  m.text("timer: ", 230, 350) 
  if (m.frameCount % 60 == 0 && timer1 > 0) {
    timer1--;
  }
    m.text(timer1, 300, 350)
  if (timer1 == 0) {
    m.text("GAME OVER", 100, 100)
    points = points * 100;
        m.text(points.toFixed(0), 200, 250)
        m.noLoop();
  }
      
  if (m.mouseIsPressed === true){
    m.x += m.ceil(m.movedX);
    m.y += m.ceil(m.movedY);
  }
  
  let a = -1.5 * m.x + 450;
  let c = 1.5 * m.x -150;
  
  if(m.x >= 100 && m.x <=300 && m.y >=285 && m.y <= 315)
    {
      m.r = 0;
      m.g = 256;
      timegreen++;
    }
  else if (m.x >= 100 && m.x <= 200 && m.y >= a - 15 && m.y <= a + 15)
    {
      m.r = 0;
      m.g = 256;
      timegreen++;
    }
  else if (m.x >= 200 && m.x <= 300 && m.y >= c - 15 && m.y <= c + 15)
    {
      m.r = 0;
      m.g = 256;
      timegreen++;
    }
  else
    {
      m.r = 256;
      m.g = 0;
      timered++
    }
  
  points = timegreen / (timered + timegreen)
  
  
    
    
    
  m.fill(m.r, m.g, m.b)
  m.noStroke()
  m.circle(m.x, m.y, 50)
    

  }
}


var sketchs = function(s) {
  s.setup = function() {
    s.createCanvas(500,500)
    s.background(256)
    
  }
  let timer2 = 12
  let timered = 0
  let timegreen = 0
s.draw = function() {
  s.background(256)
  s.circle(350,250,100)
  s.fill('red')
  s.textSize(24)
  s.text("timer", 100, 40)
  if (s.frameCount % 60 == 0 && timer2 > 0) {
    timer2--;
  }
  s.text(timer2, 100, 80)
  if (timer2 == 0) {
    s.text("Game Over", 100, 120)  
    s.noLoop()
  }
  if (s.mouseIsPressed == false) {
  } else {
    s.fill('blue')
  }
  s.circle(150,250,100)
   s.fill('red')
  
for (step = 0; step < 3; step++) {
 setTimeout(() => {
  if (s.mouseIsPressed == true) {
    s.fill('teal') // keep this
  }
    else {
      s.fill('red')
    }
 }, 5000) // this does not loop *****
}
}
}
var sketchbe = function(be) {
 be.setup = function() {
  be.createCanvas(400, 400);

 }
let timer3 = 30;
let x = 100;
let y = 200;
let timered = 0;
let timegreen = 0;
  
be.draw = function() {
  be.background(256, 256, 256);
  be.fill(256, 256, 256)
  be.stroke(0, 0, 0)
  be.strokeWeight(6)
  be.circle(200, 200, 200);
  be.textSize(24)
  be.text("timer:", 230, 350)
  let m = 350
  
  if (be.frameCount % 60 == 0 && timer3 > 0) {
    timer3--;
  }
  
  be.text(timer3, 300, m)
  if (timer3 == 0) {
    be.text("GAME OVER", 100, 100)
  }
  
  if (be.mouseIsPressed === true){
    x += be.ceil(be.movedX);
    y += be.ceil(be.movedY);
  }
  
let startx = 100;
let starty = 200;
let endpoint = true;
  
if (x != startx && y != starty)
  {
    endpoint = false;
  }
  
let r = 30;
let g = 30;
let b = 30;

if (be.sqrt((x-200)*(x-200) + (y-200)*(y-200)) > 107)
  {
    r = 256;
    g = 0;
    b = 0;
    timered++;
  }
  
else if (be.sqrt((x-200)*(x-200) + (y-200)*(y-200)) < 83)
  {
    r = 256;
    g = 0;
    b = 0;
    timered++;
  }
  
 else
  {
    r = 0;
    g = 256;
    b = 0;
    timegreen++;
  }
  
  points = timegreen / (timegreen + timered);
  be.fill(r, g, b)
  be.noStroke();
  be.circle(x, y, 50);
  
  if (timer3 == 0)
    {
      points = points * 100;
      be.text(points.toFixed(0), 200, 200);
      be.noLoop()
    }

}

}


var myGui = new p5(gui)


