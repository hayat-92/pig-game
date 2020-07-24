let scores, roundscore, gamestatus, activeplayer;
init();

// roll-button
document.querySelector(".btn-roll").addEventListener("click",function(){
    if(gamestatus){
        let dice = Math.floor(Math.random()*6)+1;

        let diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "assets/dice-"+ dice + ".png";

        if(dice!== 1){
            roundscore += dice;
            document.getElementById("current-" + activeplayer).textContent = roundscore;
        }
        else{
            nextPlayer();
        }
    }
});

// hold button
document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamestatus){
        scores[activeplayer] += roundscore;

        document.querySelector("#score-" + activeplayer).innerHTML = scores[activeplayer];

        if(scores[activeplayer]>=100){
            document.querySelector("#name-" + activeplayer).textContent = "!Winner";
            document.querySelector(".dice").style.display = "none";

            document.querySelector(".player-"+ activeplayer + "-panel").classList.add("winner");
            document.querySelector(".player-"+ activeplayer + "-panel").classList.remove("active");
            gamestatus = false;
        }
        else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
    roundscore = 0;
    activeplayer === 0 ? (activeplayer = 1) : (activeplayer = 0);

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";

}

// new game button
document.querySelector(".btn-new").addEventListener("click", init);

// initializing function
function init(){
    scores = [0, 0];
    roundscore = 0;
    activeplayer = 0;
    gamestatus = true;

    document.querySelector(".dice").style.display = "none";
    document.querySelector("#score-0").textContent="0";
    document.querySelector("#score-1").textContent="0";
    document.querySelector("#current-0").textContent="0";
    document.querySelector("#current-1").textContent="0";
    document.querySelector("#name-0").textContent ="Player 1";
    document.querySelector("#name-1").textContent="Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}



