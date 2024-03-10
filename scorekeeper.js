document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");
    const span1 = document.querySelector("#p1");
    const span2 = document.querySelector("#p2");
    const playTo = document.querySelector("#playTo");
    const h4=document.querySelector("h4");
    let p1Score = 0;
    let p2Score = 0;
    let Win = 0;
    let isGameOver = false;

    playTo.addEventListener("change", function () {
        Win = parseInt(this.value);
        isGameOver = false;
        span1.innerText = "0";
        span2.innerText = "0";
        p1Score = 0;
        p2Score = 0;
        h4.innerText="Score Count";
    })
    
    btn1.addEventListener("click", function () {
        if(Win===0){
            h4.innerText="pls choose a number first";
            return;
        }
        h4.innerText="Score Count";
        if (!isGameOver) {
            p1Score += 1;
            if (p1Score === Win) {
                isGameOver = true;
                span1.classList.add("winner");
                span2.classList.add("loser");
                h4.innerText="PLAYER 1 WINNER!"
            }
            span1.innerText = p1Score
        }
    })
    btn2.addEventListener("click", function () {
        if(Win===0){
            h4.innerText="pls choose a number first";
            return;
        }
        h4.innerText="Score Count";
        if (!isGameOver) {
            p2Score += 1;
            if (p2Score === Win) {
                isGameOver = true;
                span2.classList.add("winner");
                span1.classList.add("loser");
                h4.innerText="PLAYER 2 WINNER!"
            }
            span2.innerText = p2Score;
        }
    })
    btn3.addEventListener("click", function () {
        isGameOver = false;
        span1.innerText = "0";
        span2.innerText = "0";
        p1Score = 0;
        p2Score = 0;
        span1.classList.remove('winner', 'loser');
        span2.classList.remove('winner', 'loser');
        h4.innerText="What Number Would You Like To Play To?";
    });

});