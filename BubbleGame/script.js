var Timer=60;
var score=0;
var hitrn=0;
var timeint;

function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function makeBubble() {
    var clutter = "";
    for (var i = 0; i <= 135; i++) {
        var rn = Math.round(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`

    }

    document.querySelector("#pbtm").innerHTML = clutter;
}
function getnewhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function runTimer(){
    timeint = setInterval(function(){
        if(Timer>0){
            Timer--;
            document.querySelector("#timerval").textContent=Timer;

        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `
            <h1 id="gameOverText">Game Over</h1>
            <button id="playAgainButton">Play Again</button>
        `;
        }
        
        
    },1000);

}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var hitclick = Number(dets.target.textContent);
    if (hitclick === hitrn) {
        increasescore();
        makeBubble();
        getnewhit();
    } else if (hitclick !== hitrn) {
        clearInterval(timeint);
        document.querySelector("#pbtm").innerHTML = `
            <h1 id="gameOverText">Game Over</h1>
            <button id="playAgainButton">Play Again</button>
        `;
        document.querySelector("#playAgainButton").addEventListener("click", function () {
            location.reload();
        });
    }
});

function restartGame() {
    Timer = 60;
    score = 0;
    hitrn = 0;
    document.querySelector("#timerval").textContent = Timer;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#hitval").textContent = hitrn;
    document.querySelector("#pbtm").innerHTML = ""; // Clear the game over screen.
    runTimer();
    makeBubble();
    getnewhit();
    increasescore();
}


runTimer();
makeBubble();
getnewhit();
increasescore();

