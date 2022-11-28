function setup() {
  createCanvas(400, 400);
  
 
}

let x = 100;
let y = 200;
let timered = 0;
let timegreen = 0;


function draw() {
  background(256, 256, 256);

  fill(256, 256, 256)
  stroke(0, 0, 0)
  strokeWeight(6)
  circle(200, 200, 200);
  
  if (mouseIsPressed === true){
    x += ceil(movedX);
    y += ceil(movedY);
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
  
  if (sqrt((x-200)*(x-200) + (y-200)*(y-200)) > 107)
  {
    r = 256;
    g = 0;
    b = 0;
    timered++;
  }
  else if (sqrt((x-200)*(x-200) + (y-200)*(y-200)) < 83)
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
  console.log(points);

  
  fill(r, g, b)
  noStroke();
  circle(x, y, 50);
  
}