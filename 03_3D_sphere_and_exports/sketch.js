function setup(){
    createCanvas(400, 400, WEBGL)
    angleMode(DEGREES)
}

function draw(){
    if (frameCount === 1){
        capturer.start()
    }

    background(30)
    noFill()
    stroke(255)

    rotateX(frameCount)
    rotateY(frameCount/2)
    rotateZ(frameCount/4)

    for(var i=0; i<360; i++){
        push();//what is this?

        var r = map((sin(i+frameCount)), -1, 1, 200, 100)
        var g = map((sin(i+frameCount/3)), -1, 1, 100, 200)
        var b = map((sin(i+frameCount/7)), -1, 1, 100, 200)

        stroke(r,g,b)

        rotateY(i/2)
        ellipse(0,0,200)
        pop()

    }

    if (frameCount < 60){
        capturer.capture(canvas)
    } else if (frameCount === 60){
        capturer.save()
        capturer.stop()
    }

}