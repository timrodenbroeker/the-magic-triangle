let font;
let saveImageBool = false;

function preload() {
  font = loadFont("fonts/nimbus.otf");
}

function setup() {
  var canvas = createCanvas(1200, 800);
  canvas.parent("sketch");
  rectMode(CENTER);
}

function draw() {
  // Get data
  var title = document.getElementById("title").value;
  var rule1 = document.getElementById("rule1").value;
  var rule2 = document.getElementById("rule2").value;
  var rule3 = document.getElementById("rule3").value;
  var txtSize = parseInt(document.getElementById("txtSize").value);

  console.log(txtSize);
  let BACKGROUND = document.getElementById("BACKGROUND").value;
  let FOREGROUND = document.getElementById("FOREGROUND").value;

  background(BACKGROUND);

  var magX = width * 0.4;
  var magY = width * 0.25;

  noFill();
  // stroke(0);

  // Define Font Styling
  textFont(font);
  textAlign(CENTER, CENTER);

  var lineHeight = 45;

  textSize(txtSize);
  textLeading(lineHeight);

  noStroke();
  fill(FOREGROUND);
  

  // project title
  push();
  translate(0, -30);

  push();
  translate(width / 2, height * 0.6);
  text(title, 0, 0);
  pop();

  var offsetX = width * 0.22;

  textSize(txtSize);
  var rotation = 52;

  textAlign(CENTER, BOTTOM);

  document.getElementById("sketch").style.background = BACKGROUND;

  // rule 1
  push();
  translate(width * 0.5 - offsetX, height * 0.5);
  rotate(radians(-rotation));
  text(rule1, 0, 0);
  pop();

  // rule 2
  push();
  translate(width * 0.5 + offsetX, height * 0.5);
  rotate(radians(rotation));
  text(rule2, 0, 0);
  pop();

  // rule 3
  push();
  textAlign(CENTER, TOP);
  push();
  translate(width / 2, height / 2 + height*0.4);
  text(rule3, 0, 0);
  pop();

  // Triangle
  push();
  translate(width / 2, height / 2 - 5);
  strokeWeight(2);
  noFill();
  stroke(FOREGROUND);
  triangle(0, -magY, magX, magY, -magX, magY);
  pop();
  pop();

  if (saveImageBool == true) {
    save("magic-triangle-" + title + ".png");
    saveImageBool = false;
  }
}

function saveImage() {
  console.log("image saved");
  saveImageBool = true;
}
