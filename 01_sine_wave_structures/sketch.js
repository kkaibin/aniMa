var song

function preload(){
    song = loadSound('Her.mp3')
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL)
    //WEBGL => 3D mode
    angleMode(DEGREES)
    //var song = loadSound('Her.mp3')
}

function draw(){
    // background(30)

    rotateX(60)

    stroke(255)
    noFill()

    for (var i=0; i<20; i++){
        /*
        var r = map(sin(frameCount), -1, 1, 150, 250)
        var g = map(i, 0, 20, 0, 255)
        var b = map(cos(frameCount), -1, 1, 150, 250)
        stroke(r,g,b)
        noFill()
        */

        beginShape()
        for (var j=0; j<360; j+=10){
            var rad = i * 8;
            var x = rad * cos(j);
            var y = rad * sin(j);
            //var z = sin(frameCount + i*10)*50
            vertex(x,y)
        }
        endShape(CLOSE)
    }
}

function mouseClicked(){
    if(song.isPlaying()){
        song.pause()
    }else{
        song.play()
    }
}