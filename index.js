function makeBubble(){
    var clutter="";
for(var i=1;i<=75;i++){
   var rn= Math.floor(Math.random()*10)
clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbottom").innerHTML=clutter;

// differnece between `` here dynamic value is stored inside and '' here to add dynamic value + sign is used
}

var score=0;
var timer=10;
var hitrn=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}

// jispe click krenge vo elemnt pr event raise hoga, aur 
// event listener maa milne par event element ke parent par listener
// dhundega, waha bhi na milne par event parent ke parent par listener
// dundega

function runTimer(){
    var timerInt=setInterval(function(){
    if(timer >0){
     timer--;
     document.querySelector("#timerValue").textContent=timer;
        }
else{
    clearInterval(timerInt );
    document.querySelector(".pbottom").innerHTML=`<h1> Game Over! </h1>`;
}
    },1000);
}

function getNewHit(){
   hitrn=  Math.floor(Math.random()*10);
   document.querySelector("#hitVal").textContent=hitrn;
}

document.querySelector(".pbottom")
.addEventListener("click",function(details){
    // details is automatically provided by JavaScript as the event 
    // object when the event listener is triggered.
 
 var clickednum=Number(details.target.textContent);
 if(clickednum===hitrn){
    increaseScore();
    makeBubble();
    getNewHit();

 }
});



runTimer();
makeBubble();
getNewHit();
