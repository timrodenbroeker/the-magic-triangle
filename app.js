let font;
let saveImageBool = false;



function preload(){
    font = loadFont('fonts/nimbus.otf');
}

function setup(){
    var canvas = createCanvas(800, 600);
    canvas.parent('sketch');
    rectMode(CENTER);
    
}

function draw(){

    // Get data
    var title = document.getElementById("title").value;
    var rule1 = document.getElementById("rule1").value;
    var rule2 = document.getElementById("rule2").value;
    // var rule3 = document.getElementById("rule3").value;
    
    let fg = document.getElementById("fg").value;
    let bg = document.getElementById("bg").value;

    background("#FFFFFF");
 
    var magX = width*0.4;
    var magY = width*0.25;
    
    noFill();
    // stroke(0);

    push();
    translate(0,-height*0.06);

    // Triangle
    push();
    translate(width/2,height/2-5);
    strokeWeight(2);
    triangle(0,-magY,magX,magY,-magX,magY);
    pop();

    // Define Font Styling
    textFont(font);
    textAlign(CENTER,CENTER);

    var fontSize = 50;
    var lineHeight = 45;

    textSize(fontSize);
    textLeading(lineHeight);

    noStroke();
    fill(0);

    // project title
    push();
    translate(width/2,height*0.65);
    text(title.toUpperCase(),0,0);
    pop();

    var offsetX = width * 0.22;
    textSize(50);
    var rotation = 52;

    textAlign(CENTER,BOTTOM);

    // rule 1
    push();
    translate(width * 0.5 - offsetX, height * 0.50);
    rotate(radians(-rotation));
    text(rule1,0,0);
    pop();



    // rule 2
    push();
    translate(width * 0.5 + offsetX, height * 0.50);
    rotate(radians(rotation));
    text(rule2,0,0);
    pop();


    textAlign(CENTER,TOP);
    // rule 3
    push();
    translate(width/2,height/2+240);


    let rectSize = 60;
    strokeWeight(1);
    // stroke(0);
    fill(0);
    fill(bg);
    rect(- rectSize / 2,0,rectSize,rectSize);
    fill(fg);
    rect(rectSize / 2,0,rectSize,rectSize);
    pop();
    translate(width*0.5, height*0.85);
    // text(rule3,0,0);
    pop();

      




    if (saveImageBool == true) {
        save("magic_triangle_" + title + ".png");
        saveImageBool = false;
    }

}

function saveImage(){
    console.log("image saved");
    saveImageBool = true;
}
