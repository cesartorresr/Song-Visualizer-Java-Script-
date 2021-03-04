
let mySound, amplitude;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('music.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log("setup")
  amplitude = new p5.Amplitude();
}

function draw() {
  background(2);
  let level = amplitude.getLevel();
  let diameter = map(level, 0 ,1, 10, 400)
  fill('red');
  ellipse(400,400,diameter,diameter);

}

function mousePressed(event) {
  if (mySound.isPlaying()) {
    mySound.stop()
  } else{
    mySound.play()
  }
}

