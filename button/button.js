'use strict';

const timerArea = document.getElementById('timer-area');
const agoButton = document.getElementById('ago-button');
const showButton = document.getElementById('show-button');
const resultArea = document.getElementById('result-area');
const restartArea = document.getElementById('restart-area');
const linkArea = document.getElementById('link-area');
const tweetArea = document.getElementById('tweet-area');


//var music30s = new Audio();
//music30s.src = 'music30s.mp3';


window.onload = function(){
    var time0 = new Date();
    //music30s.play();
}

agoButton.onclick = () =>{
    var time1 = new Date();
    var seconds = (time1.getTime() - time0.getTime())/1000;
    var list = [];
    if(list.length < 11){
        list.push(seconds);
    }
}

resultArea.onclick = () =>{
    if(list.length<11){
        return;
    } else {
        const header = document.createElement('h1');
        header.innerText = '結果';
        resultArea.appendChild(header);     
    }
}

