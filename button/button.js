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
var resultlist = [];
var risoulist = [6,9,12,15,18,21,24,27,30,33];
var point = 0;
var text;

var music30s = new Audio();
music30s.src = 'http://nakano-sound.com/freedeta/%E5%B1%B1%E3%81%AE%E9%A2%A8.mp3';

function timefunc(){
    var res = confirm("OKを押すと音楽が流れ始め30秒がスタートします")
    if(res === true) {
        time0 = new Date();
        music30s.play();
    } else {
        window.location.href = 'https://ikaninja.github.io/boatrism/title/title.html'
    }
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
        for(var i = 0; i < 10; i++){
            resultlist[i] = Math.abs(risoulist[i] - list[i]);
        }

        for(var j = 0; j < 10; j++){
            if(resultlist[j] < 0.3){
                point = point + 3;
            } else if(resultlist[i] < 0.5) {
                point = point + 2;
            } else if(resultlist[i] < 0.8) {
                point = point + 1;
            } else {
                point = point + 0;
            }
        }

        if(point > 26){
            result = '天才';
        } else if(point > 20){
            result = '才能あり';
        } else if(point > 10){
            result = '普通';
        } else {
            result = '才能なし';
        }

        const header = document.createElement('h1');
        text = "30点満点中　" + point + '点  ' + result;
        header.innerText = text;
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

        const anchor = document.createElement('a');
        const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
          + encodeURIComponent('京大ボート部筋トレリズムゲーム')
          + '&ref_src=twsrc%5Etfw';
        anchor.setAttribute('href', hrefValue);
        anchor.className = 'twitter-hashtag-button';
        anchor.setAttribute('data-text', text);
        anchor.innerText = 'Tweet #京大ボート部筋トレリズムゲーム';
        tweetArea.appendChild(anchor);
    
        
        // widgets.js の設定
        const script = document.createElement('script');
        script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        tweetArea.appendChild(script);

        showButton.remove();
    }
}

