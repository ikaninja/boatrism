'use strict';

const countArea = document.getElementById('count-area');
const timerArea = document.getElementById('timer-area');
const startButton = document.getElementById('start-button');
const agoButton = document.getElementById('ago-button');
const showButton = document.getElementById('show-button');
const resultArea = document.getElementById('result-area');
const restartArea = document.getElementById('restart-area');
const linkArea = document.getElementById('link-area');
const tweetArea = document.getElementById('tweet-area');


var time0;
var time1;
var seconds;
var count = 0;
var countarea;
var list = [];
var result;
var resultlist = [];
var risoulist = [6.4,9.4,12.4,15.4,18.4,21.4,24.4,27.4,30.4,33.4];
var point = 0;
var text;

var music30s = new Audio();
music30s.src = 'music30spi2.mp3';
//music30s.preload = 'auto';
music30s.load();

var musicgong = new Audio();
musicgong.src = 'gong.mp3';
musicgong.load();

startButton.onclick = () => {
    if (music30s.readyState === 4) {
        music30s.play();
        time0 = new Date();    
        agoButton.innerText = '';
        startButton.remove();
        countarea = document.createElement('h3');
        countarea.innerText = '残り筋トレ回数' + (10 - count) + '回';
        countArea.appendChild(countarea); 
      } else {
        // 再生可能状態でなければ再生可能状態になった時のイベント通知をセットします
        music30s.addEventListener('canplaythrough', function (e) {
          music30s.removeEventListener('canplaythrough', arguments.callee);
          music30s.play();
        });
          time0 = new Date();    
          agoButton.innerText = '';
          startButton.remove();
          countarea = document.createElement('h3');
          countarea.innerText = '残り筋トレ 回数' + (10 - count) + '回';
          countArea.appendChild(countarea); 
      }
}

agoButton.onclick = () =>{
    if(agoButton.innerText !== ''){
        return;
    }else{
        time1 = new Date();
        seconds = (time1.getTime() - time0.getTime())/1000;
        count = count + 1;
        if(list.length < 10){
            list.push(seconds);
            countarea.innerText = '残り筋トレ回数' + (10 - count) + '回';
            if(count === 10){
                music30s.pause();
                musicgong.play();
                const header = document.createElement('h3');
                header.innerText = 'お疲れさまでした。結果を見てみましょう！';
                countArea.appendChild(header); 
            }
        } 
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
            } else if(resultlist[j] < 0.5) {
                point = point + 2;
            } else if(resultlist[j] < 0.8) {
                point = point + 1;
            } else {
                point = point + 0;
            }
        }

        if(point === 30){
            result = '不正が強く疑われるほどの天才';
        } else if(point === 0) {
            result = 'まあ、涙拭けよ';
        } else if(point > 27){
            result = '世界記録樹立レベル！';
        } else if(point > 25){
            result = 'オリンピック金メダル級';
        } else if(point > 15){
            result = 'インカレ優勝レベル';
        } else if(point > 10){
            result = 'ボート経験者レベル';
        } else if(point > 5){
            result = '新人ボート部員レベル';
        }   else {
            result = '普通の京大生';
        }

        const header = document.createElement('h1');
        text = "30点満点中　" + point + '点  ' + result ;
        header.innerText = text;
        resultArea.appendChild(header); 

        const link = document.createElement('a');
        link.href = "https://ikaninja.github.io/boatrism/title/title.html";
        link.target = '_self';
        link.innerText = "もう一回挑戦する";
        restartArea.appendChild(link);  

        const boatlink = document.createElement('a');
        boatlink.href = 'http://recruit.kyoto-univ-rowing.com/'
        boatlink.target = '_blank'
        boatlink.innerText = "京都大学ボート部の新歓ホームページはこちら";
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

