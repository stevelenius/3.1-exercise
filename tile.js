function setup() {
  createCanvas(200,200);
  background("#FFF")
  noLoop();
}
 
function createMarilynTile() {
    translate(0, 0);

    //tile background
    stroke(0, 0, 0);
    strokeWeight(0);
    fill(95, 159, 202);
    rect(0, 0, 200, 200);

    //dress
    fill(125, 181, 194);
    triangle(138, 158, 138, 199, 181, 199);

    //neck
    strokeWeight(4);
    fill(243, 178, 198);
    rect(60, 158, 79, 43);

    //head
    strokeWeight(6);
    ellipse(92, 107, 129, 171);

    //left eye
    strokeWeight(12);
    point(66, 101);

    //right eye
    point(114, 101);

    //left eye shadow
    strokeWeight(12);
    stroke(129, 147, 198);
    noFill();
    arc(65, 108, 35, 48, PI + QUARTER_PI, PI + HALF_PI + QUARTER_PI);

    //right eye shadow
    arc(115, 108, 35, 48, PI + QUARTER_PI, PI + HALF_PI + QUARTER_PI);

    //left brow
    stroke(0, 0, 0);
    strokeWeight(1);
    line(46, 92, 54, 80);
    line(54, 80, 70, 86);

    //right brow
    line(100, 83, 121, 80);
    line(121, 80, 135, 93);

    //nose
    line(69, 129, 78, 108);
    line(91, 113, 98, 130);
    fill(0, 0, 0);
    ellipse(83, 130, 30, 8);

    //beauty mark
    strokeWeight(4);
    point(112,137);

    //lips
    fill(139, 10, 12);
    strokeWeight(0);
    ellipse(84, 151, 43, 22);

    //teeth
    fill(255, 255, 255);
    ellipse(84, 151, 21, 8);

    //hair
    fill(243, 206, 115);
    strokeWeight(1);
    ellipse(34, 163, 16, 45);
    ellipse(144, 163, 16, 45);
    ellipse(24, 126, 28, 52);
    ellipse(149, 126, 32, 52);
    ellipse(30, 85, 28, 52);
    ellipse(157, 88, 28, 52);
    ellipse(63, 49, 79, 46);
    ellipse(90, 40, 79, 52);
    ellipse(135, 49, 50, 56);

    console.log('Inspired by Andy Warhol\'s series of Marilyn Monroe portraits');
  
  }

 
function draw() {
    createMarilynTile();
}
 