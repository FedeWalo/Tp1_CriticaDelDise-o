let Xlocation = 0
let Ylocation = 0

let locationMean = 0
let locationSd = 0
let randomXLocation
let randomYLocation

let rotationMean = 0
let rotationSd = 0
let randomRotation

let sizeOfSquare = 50

function setup() {
    angleMode(DEGREES)
    var cnv = createCanvas(window.innerWidth, window.innerHeight)
    cnv.style('display', 'block')
    background(30, 30, 32)
    textSize(130)
    textAlign(CENTER, CENTER - 100)
}

function draw() {
    stroke(255, 60, 0)
    strokeWeight(4)
    line(mouseX, mouseY, pmouseX, pmouseY)
    
    strokeWeight(0)
    fill(255, 60, 0)
    textSize(30)
    text('Inspirado en', windowWidth / 2, windowHeight - 230)
    textSize(130)
    text('George Nees', windowWidth / 2, windowHeight - 100)
    strokeWeight(1)

    stroke(255, 60, 0)
    fill(0, 0, 0, 0)

    randomXLocation = randomGaussian(locationMean, locationSd)
    randomYLocation = randomGaussian(locationMean, locationSd)
    randomRotation = randomGaussian(rotationMean, rotationSd)
    push()
    translate(Xlocation + sizeOfSquare / 2, Ylocation + sizeOfSquare / 2)
    rotate(randomRotation)
    square(randomXLocation - sizeOfSquare / 2, randomYLocation - sizeOfSquare / 2, sizeOfSquare)
    pop()

    Xlocation += sizeOfSquare
    if (Xlocation > width) {
        Xlocation = 0
        Ylocation += sizeOfSquare
        rotationSd += 2
        locationSd += 0.2
    }
}
