let fondo;

function preload() {
  fondo = loadSound("data/fondo.mp3");
}

function setup() {
  createCanvas(600, 600);
  fondo.setVolume(0.5); // volumen de 0.0 a 1.0
  fondo.loop();         // se repite siempre
}

function draw() {
  background(255);
}


function mousePressed() {
  userStartAudio();
  if (!fondo.isPlaying()) {
    fondo.loop();
  }
}
