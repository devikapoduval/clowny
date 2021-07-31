
noseX=0;
noseY=0


function preload() {
  img=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup() {
  canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotPoses)
}

function take_snapshot() {
    save("myclown.png")
}

function draw() {
  image(video,0,0,300,300);
image(img,noseX-20,noseY-10,40,40)


}

function modelloaded(){
  console.log("modelloaded")
}

function gotPoses(results) {
  if(results.length > 0 ){
    console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    console.log("nose x="+ results[0].pose.nose.x)
    console.log("nose y="+ results[0].pose.nose.y)
  }
  
}