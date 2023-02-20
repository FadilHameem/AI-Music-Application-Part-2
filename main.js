magic = "";
wavin = "";

function preload(){
    magic = loadSound("MagicInTheAir.mp3");
    wavin = loadSound("WavinFlag.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center;

    video = createCapture(VIDEO);
    video.hide;

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("Posenet Is Initialized");
}