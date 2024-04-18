/* 
PARAMETRIC EQUATIONS

x = 5t
y = 3t +4

*/
let t = 0
const numLines = 50

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(30, 30, 32)
}

function draw() {
    background(30, 30, 32, 10)
    strokeWeight(2)

    translate(width / 2, height / 2)

    for (let i = 0; i < numLines; i++) {
        stroke(255, 60, 0)
        line(x1(t + i), y1(t + i), x2(t + i), y2(t + i))

        stroke(57, 147, 145)
        line(x3(t + i), y3(t + i), x4(t + i), y4(t + i))
    }
    t++
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

const x1 = t => {
    return cos(t / 30) * 240 + cos(t / 50) * 300
}

const y1 = t => {
    return sin(t / 75) * 245
}

const x2 = t => {
    return cos(t / 37) * 267 + cos(t / 30) * 140
}

const y2 = t => {
    return sin(t / 52) * 356
}

const x3 = t => {
    return cos(t / 20) * 240 + cos(t / 50) * 30
}

const y3 = t => {
    return sin(t / 75) * 245
}

const x4 = t => {
    return cos(t / 98) * 467 + cos(t / 30) * 238
}

const y4 = t => {
    return sin(t / 52) * 356
}
