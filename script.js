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

window.location.href="login.html";

}

function detectMedia(){

let file=document.getElementById("fileUpload").files[0];

if(!file){
alert("Upload image or video");
return;
}

document.getElementById("result").innerText="Analyzing media using AI...";

setTimeout(function(){

document.getElementById("result").innerText="Result: Likely AI Generated (Confidence 83%)";

},2000);

}
