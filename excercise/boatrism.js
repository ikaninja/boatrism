'use strict'
const boatrismButton = document.getElementById('button-area');
const resultDivided = document.getElementById('result-area');
const timeDivided = document.getElementById('time-area');
const startButton = document.getElementById('start-area');

var taptime0;
var taptime1;
var time;
var audio = new Audio();
var alerm = new Audio();
audio.src = 'audio.mp3';
alerm.src = 'alerm.mp3';

var timerID = setInterval(function(){
    alerm.play();
    if(time > 30){
        clearInterval(timerID);
    } 
},3000);

startButton.onclick = () => {
    taptime0 = new Date();
    const header0 = document.createElement('h3');
    header0.innerText = '0.000秒　開始';
    resultDivided.appendChild(header0);
    audio.play();
    timerID;
}

boatrismButton.onclick = () => {
   taptime1 = new Date();
   time = (taptime1.getTime() - taptime0.getTime())/1000;
   
   if((2.5 < time && time < 3.5) || (5.5 < time && time < 6.5) ||(8.5 < time && time < 9.5) ||(11.5 < time && time < 12.5) ||(14.5 < time && time < 15.5) ||(17.5 < time && time < 18.5) ||(20.5 < time && time < 21.5) ||(23.5 < time && time < 24.5) ||(26.5 < time && time < 27.5) ||(29.5 < time && time < 30.5)){
    const header = document.createElement('h3');
    header.innerText = time + '秒　うまい';
    resultDivided.appendChild(header); 
   } else {
    const header = document.createElement('h3');
    header.innerText = time　+ '秒　ダメダメだね';
    resultDivided.appendChild(header);
   }
}