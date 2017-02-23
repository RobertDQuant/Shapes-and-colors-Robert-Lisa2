/*Typing:Lisa Driving:Robert*/

function setup() {
  //Creating a square canvas
  createCanvas(500, 500);
  //The center of our canvas is (250,250)
}

function draw() {
  //Adding a blue background color
  background(51, 153, 102);
  //Adding a purple fill to the rectangle
  fill(153, 102, 255);
  //Adding a rectangle centered on the canvas
  rect(190, 150, 120, 200);
  //Adding two legs with rectangles and a red fill
  fill(255, 0, 102);
  rect(190, 350, 20, 100);
  rect(290, 350, 20, 100);
  //Creating an oval-shaped head with a red fill
  fill(255, 0, 102);
  ellipse(250, 100, 90, 190);
  //Creating eyes with a green fill
  fill(51, 204, 51);
  ellipse(220, 80, 30, 50);
  ellipse(260, 80, 30, 50);
  //Creating a nose
  stroke(2);
  line(240, 140, 240, 100);
}