let nOfHeads=0;
let nOfTails=0;

let spinSound=new Audio("./Resources/Audio/coin_flip.m4a");
let fallSound=new Audio("./Resources/Audio/coin.m4a");

//Programacion del boton reset
document.getElementById("btn_reset").addEventListener("click", function(){
    document.getElementById("qty_tail").value=0;
    document.getElementById("qty_head").value=0;
});

let imgCoin=document.querySelector("#coin_case img");
console.log(imgCoin);

let time=2;
let laps=0;
let resultado=null;
let itsATail=false;

document.getElementById("btn_toss").addEventListener("click", function(){
    imgCoin.classList.remove("evenNumber");

    imgCoin.style.animationIterationCount="infinite";
    laps=0;
    time=2;
    
    resultado=Math.floor(Math.random()*10);
    console.log(resultado);
    
});

imgCoin.addEventListener("animationiteration", function(){
    switch(laps){
        case 1:{
            time=time-1;
            break;
        }
        case 3:{
            time=time-0.5;
            break;
        }
        case 5:{
            time=time-0.2;
            spinSound.playbackRate=0.4;
            spinSound.play();
            break;
        }
        case 10:{
            time=time-0.1;
            break;
        }
        case 20:{
            time=time+0.2;
            break;
        }
        case 25:{
            time=time+0.5;
            break;
        }
        case 27:{
            time=time+1;            
            break;
        }
        case 30:{
            fallSound.playbackRate=0.5;
            fallSound.play();
            imgCoin.style.animationIterationCount=1;
            if(resultado%2==0){
                  itsATail=true; 
                  nOfTails++;                         
            }
            else{
                nOfHeads++;
            }
            RefreshQty();
            break;
        }
    }

    if(itsATail){
        imgCoin.addEventListener("animationend", addEvenNumber());       
    }
    else{
        imgCoin.style.animationDuration=time+"s";
        
    }
    laps++;
    itsATail=false;
    
});

function addEvenNumber(){ 
    imgCoin.classList.add("evenNumber");
}

function RefreshQty(){
    document.getElementById("qty_head").value=nOfHeads;
    document.getElementById("qty_tail").value=nOfTails;
}

document.getElementById("btn_reset").addEventListener("click", ()=>{
    nOfHeads=0;
    nOfTails=0;
});



