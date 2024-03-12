function setup() {
  createCanvas(400, 600)
  background(100,150,100);
  for (let x = 0; x < 50; x++) {
    pattern(random(0,width), random(0,height), 30)
  }
}
function draw () {}


function pattern(xPos, yPos, size) {
  fill(100, 100, 150);
  rect(xPos, yPos, size);
  rect(xPos + 200, yPos + 200, size);
    fill (150, 100, 100);
    ellipse(xPos - 200, yPos - 200, size);
    ellipse(xPos + 200, yPos + 200, size);
}