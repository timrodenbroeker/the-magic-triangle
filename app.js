let font;
let saveImageBool = false;

function preload(){
    font = loadFont('fonts/nimbus.otf');
}

function setup(){
    var canvas = createCanvas(800, 600);
    canvas.parent('sketch');
    
}

function draw(){
    
    // Get data
    var title = document.getElementById("title").value;
    var rule1 = document.getElementById("rule1").value;
    var rule2 = document.getElementById("rule2").value;
    var rule3 = document.getElementById("rule3").value;



    background("#f1f1f1");
 
    var magX = width*0.4;
    var magY = width*0.25;
    noFill();
    stroke(0);

    push();
    translate(0,-height*0.03);

    // Triangle
    push();
    translate(width/2,height/2-5);
    strokeWeight(2);
    triangle(0,-magY,magX,magY,-magX,magY);
    pop();

    // Define Font Styling
    textFont(font);
    textAlign(CENTER,CENTER);
    textSize(height * 0.1);
    textLeading(height * 0.1);
    noStroke();
    fill(0);

    // project title
    push();
    translate(width/2,height*0.65);
    text(title.toUpperCase(),0,0);
    pop();

    var offsetX = width * 0.25;
    textSize(height * 0.08);
    var rotation = 52;


    // rule 1
    push();
    translate(width*0.5 - offsetX,height*0.47);
    rotate(radians(-rotation));
    text(rule1,0,0);
    pop();


    // rule 2
    push();
    translate(width*0.5 + offsetX,height*0.47);
    rotate(radians(rotation));
    text(rule2,0,0);
    pop();



    // rule 3
    push();
    translate(width*0.5,height*0.88);
    text(rule3,0,0);
    pop();


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
