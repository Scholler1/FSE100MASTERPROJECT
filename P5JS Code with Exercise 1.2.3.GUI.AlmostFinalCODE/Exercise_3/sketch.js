function setup() {
  createCanvas(400, 400);
}

  let x = 100
  let y = 300
  
  let r = 256
  let g = 0
  let b = 0
  
function draw() {
  background(256);
  
  fill(256, 256, 256);
  stroke(0, 0, 0)
  strokeWeight(6)
  triangle(100, 300, 200, 150, 300, 300)
    
      
  if (mouseIsPressed === true){
    x += ceil(movedX);
    y += ceil(movedY);
  }
  
  let a = -1.5 * x + 450;
  let c = 1.5 * x -150;
  
  if(x >= 100 && x <=300 && y >=285 && y <= 315)
    {
      r = 0;
      g = 256;
    }
  else if (x >= 100 && x <= 200 && y >= a - 15 && y <= a + 15)
    {
      r = 0;
      g = 256;
    }
  else if (x >= 200 && x <= 300 && y >= c - 15 && y <= c + 15)
    {
      r = 0;
      g = 256;
    }
  else
    {
      r = 256;
      g = 0;
    }
  
  fill(r, g, b)
  noStroke()
  circle(x, y, 50)
  
}