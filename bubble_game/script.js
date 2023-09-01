let hitrn=0;
let score=0;
let timer=60;
function increasebubble(){
  score+=10;
  document.querySelector("#scoreval").textContent=score;
}
function makebubble(){
  let clluster=" ";
for(let i=1; i<=100; i++){
  let rn=Math.floor(Math.random()*10);
clluster+=`<div id="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clluster;
}
function runtime(){
  setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector("#timeinetrval").textContent=timer;
    }
    else{
      clearInterval();
      document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
    }

  },1000)
}
function gethit(){
 hitrn=Math.floor(Math.random()*10);
  document.querySelector("#hit").textContent=hitrn;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
  let clickednum=Number(dets.target.textContent);
  if(clickednum===hitrn){
    increasebubble();
    makebubble();
    runtime();
    gethit();
  }
 
})
makebubble();
runtime();
gethit();

