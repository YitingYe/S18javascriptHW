"use strict";

var state = true;
function toggleLight(){
  var image = document.getElementById("image");
  state = !state;
  image.src = state ? "img/on.jpg" : "img/off.jpg";
}

var timeLeft = 0;
var count = 0;

function setTime(){
  var usertime = parseInt(document.getElementById("usertime").value);
  if (isNaN(usertime)){
    alert("Number only!");
  }else{
    clearInterval(count);
    timeLeft = usertime;
    count = setInterval(countDownTimer, 1000);
  }
}

function countDownTimer(){
  timeLeft = timeLeft - 1;
  if (timeLeft <= 0){
    document.getElementById("image").src = "img/off.jpg";
    clearInterval(count);
    state = false;
  }
  document.getElementById("timer").innerHTML = timeLeft;
}




