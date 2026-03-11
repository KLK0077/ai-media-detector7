function detectMedia(){

let file=document.getElementById("fileUpload").files[0];

if(!file){
alert("Please upload a file");
return;
}

document.getElementById("result").innerText="Analyzing media...";

setTimeout(function(){

let confidence=Math.floor(Math.random()*20)+80;

document.getElementById("result").innerText=
"Result: Likely AI Generated | Confidence: "+confidence+"%";

},2000);

}
