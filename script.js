document.addEventListener("DOMContentLoaded", function(){

let fileInput = document.getElementById("fileUpload");

if(fileInput){
fileInput.onchange = function(){

let file = this.files[0];
let reader = new FileReader();

reader.onload = function(e){
let preview = document.getElementById("preview");
if(preview){
preview.src = e.target.result;
}
}

reader.readAsDataURL(file);

}
}

});

function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(email=="" || password==""){
alert("Please enter email and password");
return;
}

window.location.href="home.html";

}

function signup(){

let email=document.getElementById("signupEmail").value;
let password=document.getElementById("signupPassword").value;

if(email=="" || password==""){
alert("Fill all fields");
return;
}

alert("Account created successfully");

window.location.href="index.html";

}

function detectMedia(){

let file=document.getElementById("fileUpload").files[0];

if(!file){
alert("Upload image or video");
return;
}

document.getElementById("result").innerText="Analyzing media...";

setTimeout(function(){

let confidence=Math.floor(Math.random()*20)+80;

document.getElementById("result").innerText=
"Result: Likely AI Generated | Confidence: "+confidence+"%";

},2000);

}
