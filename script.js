var football_x = -20;
var football_y = 190;
var text_Score = '6';

function setup() {
  createCanvas(400, 300);
  frameRate(48);
}

function draw() {
  background(hintergrundfarbe);
  stroke(0); strokeWeight(0);
  
  /* ball */ 
  fill(151, 88, 40);
  ellipse(81, 100, 23, 9);
  
  /* Gras */ 
  fill(0, 136, 11);
  rect(0, 185, 400, 170);
  
  /* weisse Striche */
  stroke ('white');strokeWeight (3)
  line (327, 200, 380, 300)
  line (233, 200, 255, 300)
  line (125, 200, 131, 300)
  line (22, 200, 9, 300)
  line (0, 200, 327, 200)
  
  /* FieldGoal */
  stroke ('yellow'); strokeWeight (5)
  line (355, 180, 355, 250)
  line (343, 105, 375, 215)
  line (343, 59, 343, 161)
  line (375, 153, 375, 215)
} 

function draw() {
  background('LightBlue');
  
  fill(151, 88, 40);
  ellipse(football_x, football_y, 23, 11); 
  
  football_x = football_x + 5;
  football_y = football_y - 1; 
  
  /* Gras */ 
  fill(0, 136, 11);
  rect(0, 185, 400, 170);
  
  /* weisse Striche */
  stroke ('white');strokeWeight (3)
  line (327, 200, 380, 300)
  line (233, 200, 255, 300)
  line (125, 200, 131, 300)
  line (22, 200, 9, 300)
  line (0, 200, 327, 200)
  
  /* FieldGoal */
  stroke ('yellow'); strokeWeight (5)
  line (355, 180, 355, 250)
  line (343, 161, 375, 215)
  line (343, 59, 343, 161)
  line (375, 97, 375, 215)
  
  /* SpielerOrange */
  stroke (255, 64, 0)
  ellipse (70,208,5,5)
  ellipse (70,218,5,5)
  ellipse (80,224,5,5)
  ellipse (70,230,5,5)
  ellipse (70,240,5,5)
  ellipse (90,248,5,5)
  ellipse (70,256,5,5)
  ellipse (70,266,5,5)
  ellipse (80,272,5,5)
  ellipse (70,278,5,5)
  ellipse (70,288,5,5)
  
  /* SpielerSchwarz */
  stroke ('Black')
  ellipse (55,248,5,5)
  ellipse (52,216,5,5)
  ellipse (55,224,5,5)
  ellipse (55,232,5,5)
  ellipse (55,240,5,5)
  ellipse (55,248,5,5)
  ellipse (55,256,5,5)
  ellipse (55,264,5,5)
  ellipse (55,272,5,5)
  ellipse (52,280,5,5)
  
  /* ScoreBoard */
  fill ('Black')
  rect ( 140, 35, 120, 51)
  
  fill ('White')
  /*ScoreHintergrund*/
  rect (150,45,20,30)
  rect (230,45,20,30)
  
  /* ScoreBoard Leinen*/
  stroke ('Gray')
  line (170,0,170,35)
  line (230,0,230,35)
  
  /*Scoreboard Text*/
  strokeWeight (0)
  fill('Black');
  textSize(20);
  textAlign(CENTER); 
  text(text_Score, 161, 67);
  text('7', 241, 67);
  
  /* Quarter */
  fill('White')
  textSize (9)
  text('2nd',201,74)
  
  /*Text Aenderung*/
  if (football_x > 200 ) { 
    football_y = football_y + 2;
    text_Score = '9';
  } else {
    football_y = football_y - 1;
    text_Score = '6';
  }
  if (football_x > 355 ) { 
    text_Score = '9';
  } else {
    text_Score = '6';
  }
} 