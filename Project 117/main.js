function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/h4_1GLVlF/model.json',modelLoaded);

}
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotResult);
}
function modelLoaded(){
  console.log('modelLoaded');
}
function gotResult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result_member_name").innerHTML = result[0].label;
    document.getElementById("result_member_accuracy").innerHTML = result[0].confidence.toFixed(3);
  }
}