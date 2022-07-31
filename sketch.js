var song, fft;
var back, bgIsLoaded;
var img;
var particles = [];
let colorPicker;
let inputeElement;
let userImage;
// preload the sound
function preload() {
  song = loadSound("Summertime.mp3");
  back = loadImage("redxyellow.jpg");
}

//FFT -> Fast Fourier Transform
//analysis algorithm that isolates individual audio frequencies within a waveform

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorPicker = createColorPicker("#FFFFFF");
  colorPicker.position(0, 500);
  input = createFileInput(handleFile);
  input.position(0, 0);
  angleMode(DEGREES);
  imageMode(CENTER);
  song.setVolume(0.5);
  fft = new p5.FFT();
}

function draw() {
  if (img) {
    bgIsLoaded = true;
    stroke(colorPicker.color());
    strokeWeight(5);
    noFill();

    //move circle to middle
    translate(width / 2, height / 2);

    //make particles respond to low frequencies, amp variable should be above image
    fft.analyze();
    //measure amplitude at specific frequencies, within a range of frequencies
    amp = fft.getEnergy(20, 200);

    //use push and pop function so only affects image
    push();
    if (amp > 180) {
      //rotate background image slightly to make it look like it's popping out
      rotate(random(-0.2, 0.2));
    }
    image(img, 0, 0, width + 10, height + 10 )
    pop();

    var wave = fft.waveform();

    //loop twice to draw 2 semi circles
    for (var t = -1; t <= 1; t += 2) {
      beginShape();
      for (var i = 0; i <= 180; i++) {
        var index = floor(map(i, 0, 180, 0, wave.length - 1));
        //last two numbers are min and max radius of circle
        var r = map(wave[index], -1, 1, 150, 350);

        var x = r * sin(i) * t;
        var y = r * cos(i);
        vertex(x, y);
      }
      endShape();
    }

    //create a new particle every frame
    var p = new Particle();
    //push the particles to the array
    particles.push(p);

    //iterate through the particle array backwards
    for (var i = particles.length - 1; i >= 0; i--) {
      if (!particles[i].remove_edges()) {
        particles[i].update(amp > 180);
        particles[i].show();
      } else {
        particles.splice(i, 1);
      }
    }
  } else {
    background(0, 0, 0);
  }
}

// function to pause or play song when mouse is clicked
function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    if (bgIsLoaded) {
      song.play();
    }
  }
}

function handleFile(file) {
  print(file.data);
  if (file.type === "image") {
    img = createImg(file.data, "");
    img.hide();
  } else {
    img = null;
  }
}

//creating a particle object
class Particle {
  constructor() {
    //define particle position as a vector
    //need to multiply by radius (average of min + max radius) of waveform to place it at the perimeter
    this.pos = p5.Vector.random2D().mult(250);
    this.vel = createVector(0, 0);
    //acceleration vector should have same direction as position vector
    this.acc = this.pos.copy().mult(random()).mult(random(0.0001, 0.00001));

    //randomize width of particle
    this.w = random(3, 5);
  }

  //update velocity and position of particle
  update(cond) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // if frequency is greater than 230, move particles faster
    if (cond) {
      this.vel.add(this.acc);
      this.vel.add(this.acc);
      this.vel.add(this.acc);
    }
  }

  //remove particles from array when they leave the screen
  remove_edges() {
    if (
      this.pos.x < -width / 2 ||
      this.pos.x > width / 2 ||
      this.pos.y < -height / 2 ||
      this.pos.y > height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  // function to display particles
  show() {
    noStroke();
    fill(colorPicker.color());
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}