let gameseq=[];
let userseq=[];
let btns= ['div1','div2','div3','div4'];

let level=0;
let start= false;
let finalpoint;
let best=0;

let h3= document.querySelector('h3');
document.addEventListener('keypress',()=>{
    if(start==false){
        levelup();
        start=true;
    }
})

function flash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}

function flashgreen(btn){
    btn.classList.add("flashgreen");
    setTimeout(() => {
        btn.classList.remove("flashgreen");
    }, 200);
}

function flashred(btn){
    btn.classList.add("flashred");
    setTimeout(() => {
        btn.classList.remove("flashred");
    }, 1000);
}

function randcolorflash(){
    let randind=Math.floor(Math.random()*4);
    let randcolor= btns[randind];
    let randbtn= document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    // console.log(gameseq);
    flash(randbtn);
}
 
function levelup(){
    userseq=[];
    level++;
    h3.innerText= `Level ${level}`;
    randcolorflash();
}

function checkans(){
    let lastindex= userseq.length-1;
    if(userseq[lastindex]==gameseq[lastindex]){
        if(userseq.length===gameseq.length){
            setTimeout(() => {
                levelup();
            }, 1000);
        }
        return true;
    }
    else {return false;}
}

function btnpress(){
    userseq.push(this.getAttribute('id'));
    // console.log(userseq);
    if(checkans()){
        flashgreen(this);
    }
    else{
        flashred(this);
        finalpoint=level-1;
        high=finalpoint;
        h3.innerText= `Opps! Game Over! Final Points:${finalpoint}`;
        let newh3=document.createElement('h4');
        newh3.innerText="Press any key to start again!!";
        newh3.classList.add('newh3');
        h3.append(newh3);
        bestscore(high);
        reset();
        // console.log("wrong");
    }
}

let allbtns= document.querySelectorAll('.btn');
for(allbtn of allbtns){
    allbtn.addEventListener('click',btnpress);
}

function reset(){
    level=0;
    gameseq=[];
    start=false;
}

function bestscore(high){
    if(high>best){
        best=high;
    }
    let highscore=document.createElement('h4');
    highscore.innerText=`HighScore: ${best}`;
    highscore.classList.add('newh3');
    h3.append(highscore);
}
