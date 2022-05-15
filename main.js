var nx = 0;
var ny = 0;

function preload(){
 mus = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");

}

function setup(){

canvas = createCanvas(300,300);
canvas.center();

video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
 
poseNet = ml5.poseNet(video, modelLoaded ); 
poseNet.on("pose", gotPoses);

}
function gotPoses(results){

if(results.length > 0){

console.log(results);

nx= results[0].pose.nose.x - 20;
ny= results[0].pose.nose.y - 20;

}

}

function modelLoaded(){

console.log("Model Has Been Loaded");
}

function draw(){

    image(video, 0, 0, 300, 300 );
image(mus, nx, ny, 50, 30);
    
}

function take_snapshot(){

    save("filter.png");

}

