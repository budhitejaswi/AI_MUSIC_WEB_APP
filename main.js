song_1 = "";
song_2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song_1 = loadSound("song_1.mp3");
    song_2 = loadSound("song_2.mp3");
}

function setup() {
    canvas=createCanvas(700,500);
    canvas.position(340,270);
    video= createCapture(VIDEO);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0,0,700,500)
}

function modelLoaded() {
    console.log("Model Is Loaded :)")
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "   Left Wrist Y = "+ leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + "   Right Wrist Y = "+ rightWristY);
     }
}