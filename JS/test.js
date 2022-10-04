function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}
function preload() {
  tor = loadImage("images/choco.jpg");
}

function draw() {
  noStroke();

  
  for (var n = 1;n <=10;n++) {
    image(tor,25,25,50,50);
    translate (40,5);


  }
}