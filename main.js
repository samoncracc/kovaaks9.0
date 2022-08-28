let score = document.getElementById("score")
let missesHTML = document.getElementById("misses")
let target = document.getElementById("target")
let tempTarget = document.getElementById("tempTarget")
let bkg = document.getElementById("wrapper")
let time = document.getElementById("timer")
let bigTimer = document.getElementById("timerScreen")
let endGamePopup = document.getElementById("gameover")
let gameSettings = document.getElementById("gamesettingswrapper")
let hitStats = document.getElementById("hitStats")
let missStats = document.getElementById("missStats")
let accuracyStats = document.getElementById("accuracyStats")
let durationStats = document.getElementById("durationStats")
let difficultyStats = document.getElementById("difficultyStats")
let checkScore = 0;
let misses = 0;
let hits = 0;
let timeleft;
let setTime;
let setDifficulty;
let second;
let cron;
bkg.style.cursor = "crosshair"



function firstTimer() {
    var timeleft = 3;
    var downloadTimer = setInterval(function () {
        if (timeleft == 3) {
            document.getElementById("homeTimer").innerHTML = "3"
        } else if (timeleft == 2) {
            document.getElementById("homeTimer").innerHTML = "2"
        } else if (timeleft == 1) {
            document.getElementById("homeTimer").innerHTML = "1"
        } else if (timeleft == 0) {
            document.getElementById("homeTimer").innerHTML = "GO!"
        } else if (timeleft == -1) {
            document.getElementById("homeTimer").innerHTML = ""
            bigTimer.style.display = "none";
            startTimer()
        }
        timeleft -= 1;
    }, 1000);
}

function hitTarget() {
    hits++
    score.innerHTML = "Score: " + hits
    checkScore++
    moveTarget()
    console.log(checkScore)
}

function moveTarget() {
    let posLeft = Math.floor(Math.random() * 94);
    let posTop = Math.floor(Math.random() * 84);

    target.style.left = posLeft + "%"
    target.style.top = posTop + "%"
}

function missFunc() {
    misses++
    missesHTML.innerHTML = "Misses: " + (misses - hits)
}

function goBack() {
    window.open("./index.html", "_self")
}

function playGame() {
    window.open("./game page.html", "_self")
}

function gameover(){
    let accuracy = (hits / misses) * 100
    accuracy = Math.floor(accuracy)
    bigTimer.style.display = "block";
    endGamePopup.style.display = "block";
    hitStats.innerHTML = "Hits: " + hits
    missStats.innerHTML = "Misses: " + (misses - checkScore)
    accuracyStats.innerHTML = "Accuracy: " + accuracy + "%"
    durationStats.innerHTML = "Duration: " + setTime + " seconds"
    difficultyStats.innerHTML = "Difficulty: " + setDifficulty

}

function startGame (){
    gameSettings.style.display = "none"
    firstTimer()
}

function setHard(){
    target.style.width = 45
    target.style.height = 45
    tempTarget.style.width = 45
    tempTarget.style.height = 45
    setDifficulty = "hard"
}
function setNormal(){
    target.style.width = 75
    target.style.height = 75
    tempTarget.style.width = 75
    tempTarget.style.height = 75
    setDifficulty = "normal"
}
function setNoob(){
    target.style.width = 105
    target.style.height = 105
    tempTarget.style.width = 105
    tempTarget.style.height = 105
    setDifficulty = "noob"
}
function set15(){
    timeleft = 14
    setTime = 15
}
function set30(){
    timeleft = 29
    setTime = 30
}
function set45(){
    timeleft = 44
    setTime = 45
}



function startTimer() {
    var downloadTimer = setInterval(function () {
        if (timeleft < 0) {
            gameover()
            console.log("finished")
        } else {
            document.getElementById("timer").innerHTML = "Time left: " + timeleft;
        }
        timeleft -= 1;

        if (timeleft == -1){
            gameover()

        }
    }, 1000);
}