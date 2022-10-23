var SpeechRecognition = window.webkitSpeechRecognition
var recog= new SpeechRecognition();
function START(){
    recog.start();
}
recog.onresult=function run(event){console.log(event)
content= event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
if(content=="take my selfie"){
    Speak();
}
}
function Speak() {
    synth = window.speechSynthesis;
    cont = "taking your selfie in 5 seconds"
    ut = new SpeechSynthesisUtterance(cont);
    synth.speak(ut)
    Webcam.attach("#camera");
    setTimeout(function(){
        pic();
        save();
    },5000)
}
Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90 
})
camera = document.getElementById("camera");

function pic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src="+data_uri+">";
    });
}

function save(){
  i1=  document.getElementById("image").src;
   a2=     document.getElementById("a1");
   a2.href=i1;
   a2.click()
}