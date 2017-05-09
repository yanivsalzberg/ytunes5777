var song, analyzer;
var mic;

function setup() {
  background(115, 68, 68);
  createCanvas(1440, 400);
  mic =  new p5.AudioIn();
  mic.start();
  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();
  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(115, 68, 68);
  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(127);
  stroke(0);
  var vol = mic.getLevel()
  fill(random(255), 255, 255);
  //colored cursor
  var d = map(10*mouseY, 0, height, 10, 50);
  ellipse(mouseX, mouseY, d, d);
  //head
  fill (255, 255, 0);
  ellipse(720, 160, 255, 275);
  //left eye
  fill (255);
  ellipse(670, 130, 60, 40);
  //right eye
  fill (255);
  ellipse(770, 130, 60, 40);
  //cornea left eye
  // fill (255,2);
  // ellipse(670, 120, 19, 19);
  //cornea right eye
  // fill (0);
  // ellipse(770, 120, 19, 19);
  //sparkle left eye
  fill (0);
  ellipse(670, 130, 19, 19);
  //sparkle right eye
  fill (0);
  ellipse(770, 130, 19, 19);
  //mouth
  fill (255, 0, 0)
  ellipse(720, 210, 100, vol*300)

}
