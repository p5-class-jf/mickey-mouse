
function draw() {
    const R = height/4
    const r = R / 2
    background('white')
    noStroke()
    fill('black')
    // Face
    ellipse(width/2, height/2, R * 2)
    { // Left ear
        const p = p5.Vector.fromAngle(-TAU/4 + 0.115*TAU).mult(R + r * 0.9)
        ellipse(width/2 + p.x, height/2 + p.y, r * 2)
    }
    { // Right ear
        const p = p5.Vector.fromAngle(-TAU/4 - 0.115*TAU).mult(R + r * 0.9)
        ellipse(width/2 + p.x, height/2 + p.y, r * 2)
    }
}

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}