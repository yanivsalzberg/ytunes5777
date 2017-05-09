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
  var d = map(10*mouseY, 0, height, 10, 50);
  ellipse(mouseX, mouseY, d, d);
  fill (255, 0, 0)
  ellipse(720, 80, 1000, vol*100)
  fill (255, 127, 80)
  ellipse(720, 110, 1000, vol*100)

  fill (0, 255, 0)
  ellipse(720, 140, 1000, vol*100)

  fill (0, 100, 0)
  ellipse(720, 170, 1000, vol*100)
  fill (0, 0, 255)
  ellipse(720, 200, 1000, vol*100)
}
