
let Xposition = 0;
let Yposition = 0;

let font

function preload() {
    font = loadFont('PexelGrotesk-Regular.ttf')
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight)
  cnv.style("display", "block");
  background(255, 60, 0)
  textSize(130)
  textAlign(CENTER, CENTER - 100)
  textFont(font)
}

let i = 10
function draw() {
  background(255, 60, 0, 0.2)
  strokeWeight(0)
  text('Federico Walovnik', windowWidth / 2, i)
  
  stroke(30, 30, 32)
  strokeWeight(4)
  line(mouseX, mouseY, pmouseX, pmouseY)

  background(255, 60, 0, 10)

  if (i > windowHeight) {
    i = 10
  } else {
    i = i + 3
  }
}

const checkIfHitsWall = () => {
  let hitTheWall = false;

  if (Xposition <= -(width - width / 2)) {
    hitTheWall = true;
    Xposition += 10;
  } else if (Xposition >= width + width / 2) {
    Xposition += 10;
    hitTheWall = true;
  } else if (Yposition >= height - height / 2) {
    Yposition -= 10;
    hitTheWall = true;
  } else if (Yposition >= height + height / 2) {
    Yposition += 10;
    hitTheWall = true;
  }
  return hitTheWall;
};

let zero = 0;
let one = 0;
let two = 0;
let three = 0;

const chooseNextStep = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  const step = 10;
  if (!checkIfHitsWall()) {
    if (randomNumber === 0) {
      Xposition += step;
      zero++;
    } else if (randomNumber === 1) {
      Yposition += step;
      one++;
    } else if (randomNumber === 2) {
      Xposition -= step;
      two++;
    } else {
      Yposition -= step;
      three++;
    }
  }
};
