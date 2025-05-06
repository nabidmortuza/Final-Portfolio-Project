let title = document.querySelector (".title")

let button1 = document.querySelector(".Move-Forward");
let button2 = document.querySelector(".Give-Up");

let screen1 = document.querySelector(".Save");

let option1 = document.querySelector(".Fight-Admiral");
let option2 = document.querySelector(".Go-Towards-Ace");

let screen2 = document.querySelector(".Option-one-image");

let option3 = document.querySelector(".death");
let option4 = document.querySelector(".Live");

let screen3 = document.querySelector(".option-two-screen");

let option5 = document.querySelector(".Time");

let screen4 = document.querySelector(".Lost-To-Marines");

let option6 = document.querySelector(".Kys");
let option7 = document.querySelector(".Loser");

let screen5 = document.querySelector(".escape");

let option8 = document.querySelector(".Go-on");

let screen6 = document.querySelector(".Time-Machine");

let option9 = document.querySelector(".You-Lost");

let option10 = document.querySelector(".You-Give-Up");

let screen7 = document.querySelector(".Final-Result");

let option11 = document.querySelector(".a-second-chance");
let option12 = document.querySelector(".Maybe-Not-For-You");

let opening = document.querySelector(".story-opening")

let titlebutton = document.querySelector(".buttons")


button1.onclick = function() {
title.style.display = 'none';
screen1.style.display = 'block';
}

button2.onclick= function() {
screen1.style.display = 'none';
screen6.style.display = 'block';
}

option1.onclick= function () {
  screen6.style.display = 'none';
  screen2.style.display = 'block';
}

option3.onclick= function () {
  screen2.style.display = 'none';
  screen3.style.display = 'block';
}

option5.onclick= function () {
  screen3.style.display= 'none';
  screen6.style.display= 'block';
}

option4.onclick= function () {
  screen2.style.display = 'none';
  screen4.style.display = 'block';
}

option2.onclick= function () {
  screen1.style.display = 'none';
  screen5.style.display = 'block';
}

option8.onclick= function () {
  screen5.style.display = 'none';
  screen7.style.display = 'block';
}








