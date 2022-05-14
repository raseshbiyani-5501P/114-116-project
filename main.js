var nx = 0;
var ny = 0;

function preload(){}

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

nx= results[0].pose.nose.x;
ny= results[0].pose.nose.y;

}

}

function modelLoaded(){

console.log("Model Has Been Loaded");
}

function draw(){

    image(video, 0, 0, 300, 300 );
    
}

