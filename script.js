var timer = 20;
var randomHit = 0;
var score = 0;
function scoreBoard() {
  score += 10;
  document.querySelector("#scoreupdate").textContent = score;
}
function scoreMinus() {
  score -= 10;
  document.querySelector("#scoreupdate").textContent = score;
}

function makeBubble() {
  var clutter = " ";
  for (var i = 0; i <= 79; i++) {
    var number = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble" style="opacity:1;">${number}</div>`;
  }
  document.querySelector(".pbot").innerHTML = clutter;
}

function runTimer() {
  var timingloop = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#box1").innerHTML = timer;
    } else {
      clearInterval(timingloop);
      document.querySelector(
        ".pbot"
      ).innerHTML = `<h1>Game Over ,Your Score is ${score} </h1>`;
    }
  }, 1000);
}

function makeHit() {
  randomHit = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerText = randomHit;
}

document.querySelector(".pbot").addEventListener("click", function (details) {
  var clickedNumber = Number(details.target.textContent);
  if (clickedNumber === randomHit) {
    scoreBoard();
    makeBubble();
    makeHit();
  } else {
    scoreMinus();
    makeBubble();
    makeHit();
  }
});

makeBubble();
runTimer();
makeHit();
