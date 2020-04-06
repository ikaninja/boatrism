'use strict';

const timerArea = document.getElementById('timer-area');
const agoButton = document.getElementById('ago-button');
const showButton = document.getElementById('show-button');
const resultArea = document.getElementById('result-area');
const restartArea = document.getElementById('restart-area');
const linkArea = document.getElementById('link-area');
const tweetArea = document.getElementById('tweet-area');


var time0;
var time1;
var seconds;
var list = [];
var result;

//var music30s = new Audio();
//music30s.src = 'music30s.mp3';

function timefunc(){
    time0 = new Date();
    //music30s.play();
}

window.onload = timefunc;

agoButton.onclick = () =>{
    time1 = new Date();
    seconds = (time1.getTime() - time0.getTime())/1000;
    if(list.length < 10){
        list.push(seconds);
    }
}

showButton.onclick = () =>{
    if(list.length<10){
        return;
    } else {
        const header = document.createElement('h1');
        result = 'すばらしい'
        header.innerText = "結果" + result;
        resultArea.appendChild(header); 

        const link = document.createElement('a');
        link.href = "https://ikaninja.github.io/boatrism/title/title.html";
        link.target = '_self';
        link.innerText = "もう一度挑戦する";
        restartArea.appendChild(link);  

        const boatlink = document.createElement('a');
        boatlink.href = 'http://kyoto-univ-rowing.com/'
        boatlink.target = '_blank'
        boatlink.innerText = "京都大学ボート部のホームページはこちら";
        linkArea.appendChild(boatlink);  
    }
}

