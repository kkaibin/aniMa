var points = []
var m

var r1
var r2 
var g1
var g2 
var b1
var b2

function setup(){
    createCanvas(windowWidth, windowHeight)
    background(30)
    noiseDetail(1)
    angleMode(DEGREES)

    var density = 25
    var space = width / density

    //create all starting points
    for (var x=0; x<width; x+=space){
        for (var y =0; y<height; y+=space){
            var p = createVector(x + random(-50, 50),y + random(-50,50))
            points.push(p)
        }
    }

    shuffle(points, true)

    r1 = random(255)
    r2 = random(255)
    g1 = random(255)
    g2 = random(255)
    b1 = random(255)
    b2 = random(255)
    m = random(0.002, 0.01)

}

function draw(){
    noStroke()
    //fill(255)

    //make one line appear at a time (so clever!!)
    if(frameCount <= points.length){
        var max = frameCount
    }else{
        var max = points.length
    }
    
    for(var i=0;i<max; i++){

        var r = map(points[i].x, 0, width, r1, r2)
        var g = map(points[i].y, 0, height, g1, g2)
        var b = map(points[i].y, 0, height, b1, b2)
        var alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, 150, 400, 0)

       fill(r,g,b, alpha)


        //we need an angle at which each point will move
        //for this, we use the noise function which creates the flow field like structure
        var angle = map(noise(points[i].x * m, points[i].y * m), 0, 1, 0, 720)

        //add a vector to each point based on the angle
        points[i].add(createVector(cos(angle), sin(angle)))

        if (dist(width / 2, height / 2, points[i].x, points[i].y) < 150){
            ellipse(points[i].x, points[i].y, 1)
        }
        
    }
    

}

function mouseClicked(){
    saveCanvas('flowfield', 'png')
}

/*
Perlin noise is a random sequence generator producing a more naturally ordered,
harmonic succession of numbers compared to the standard random() function.
*/