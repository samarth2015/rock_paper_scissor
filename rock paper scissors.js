window.onload = () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("askmusic").style.display = "block"
    backmusic = document.getElementById("backmusic");
    backmusic.load();
    document.getElementById("yesside").addEventListener("click", () => {
        backmusic.play();
        document.getElementById("askmusic").style.marginLeft = "100vw";
        setTimeout(() => {
            document.getElementById("askmusic").style.marginLeft = "0";
            document.getElementById("askmusic").style.display = "none";
            document.getElementById("youtube").style.display = "block";
        }, 700);
    })
    document.getElementById("noside").addEventListener("click", () => {
        document.getElementById("askmusic").style.marginLeft = "100vw";
        setTimeout(() => {
            document.getElementById("askmusic").style.marginLeft = "0";
            document.getElementById("askmusic").style.display = "none";
            document.getElementById("youtube").style.display = "block";
        }, 700);
    })
}


function easymode() {
    cChoiceCounterInterval = 500;
    startgame();
}

function mediummode() {
    cChoiceCounterInterval = 250;
    startgame();
}

function hardmode() {
    cChoiceCounterInterval = 100;
    startgame();
}

function startgame() {
    for (let x = 1; x <= 5; x++) {
        document.getElementById("level-" + x).style.backgroundColor = "rgb(219, 219, 219)";
    }
    document.getElementById("startpage").style.marginLeft = "-100vw";
    setTimeout(() => {
        document.getElementById("startpage").style.marginLeft = "0";
        document.getElementById("startpage").style.display = "none";
        document.getElementById("mainpage").style.display = "block";
    }, 600);
    rounds = 1;
    cwin = 0;
    pwin = 0;
    document.getElementById("cscore").innerText = cwin;
    document.getElementById("pscore").innerText = pwin;
    var cChoiceCounter = 1;
    cChoiceChange = setInterval(() => {
        if (cChoiceCounter == 1) {
            document.getElementById("cchoice").innerText = "✊";
            cChoiceCounter++;
        }
        else if (cChoiceCounter == 2) {
            document.getElementById("cchoice").innerText = "🖐";
            cChoiceCounter++;
        }
        else if (cChoiceCounter == 3) {
            document.getElementById("cchoice").innerText = "✌";
            cChoiceCounter = 1;
        }
    }, cChoiceCounterInterval);
}

function computer() {
    setTimeout(() => {
        document.getElementById("fieldumpire").style.marginTop = "100vh";
        document.getElementById("pchoice").innerText = "";
        document.getElementById("cscore").innerText = cwin;
        document.getElementById("pscore").innerText = pwin;
        document.getElementsByClassName("btn")[0].removeAttribute("disabled");
        document.getElementsByClassName("btn")[1].removeAttribute("disabled");
        document.getElementsByClassName("btn")[2].removeAttribute("disabled");
        var cChoiceCounter = 1;
        cChoiceChange = setInterval(() => {
            if (cChoiceCounter == 1) {
                document.getElementById("cchoice").innerText = "✊";
                cChoiceCounter++;
            }
            else if (cChoiceCounter == 2) {
                document.getElementById("cchoice").innerText = "🖐";
                cChoiceCounter++;
            }
            else if (cChoiceCounter == 3) {
                document.getElementById("cchoice").innerText = "✌";
                cChoiceCounter = 1;
            }
        }, cChoiceCounterInterval);
        rounds++;
        if (rounds == 6 || cwin == 3 || pwin == 3) {
            clearInterval(cChoiceChange);
            document.getElementById("mainpage").style.marginTop = "-100vh";
            setTimeout(() => {
                document.getElementById("mainpage").style.marginTop = "0";
                document.getElementById("lastpage").style.display = "block";
                document.getElementById("mainpage").style.display = "none";
            }, 700);
            if (cwin > pwin) {
                document.getElementById("winning").innerHTML = "You Lose<br>🙁🙁🙁"
            }
            else if (pwin > cwin) {
                document.getElementById("winning").innerHTML = "You Win<br>🎊🎊🎊";
            }
            else {
                document.getElementById("winning").innerHTML = "Good try!<br>But draw!!!"
            }
        }
    }, 3000);
    if (rounds == 1) {
        if (pwin == 1) {
            document.getElementById("level-1").style.backgroundColor = "rgb(37, 231, 19)";
            pwinold = pwin;
            cwinold = cwin;
        }
        else if (cwin == 1) {
            document.getElementById("level-1").style.backgroundColor = "rgb(238, 44, 44)";
            cwinold = cwin;
            pwinold = pwin;
        }
        else
            document.getElementById("level-1").style.backgroundColor = "rgb(100, 100, 100)";
        cwinold = cwin;
        pwinold = pwin;
    }
    else {
        if (pwinold < pwin) {
            document.getElementById("level-" + rounds).style.backgroundColor = "rgb(37, 231, 19)";
            cwinold = cwin;
            pwinold = pwin;
        }
        else if (cwinold < cwin) {
            document.getElementById("level-" + rounds).style.backgroundColor = "rgb(238, 44, 44)";
            cwinold = cwin;
            pwinold = pwin;
        }
        else
            document.getElementById("level-" + rounds).style.backgroundColor = "rgb(100, 100, 100)";
        cwinold = cwin;
        pwinold = pwin;
    }
}

function selected(weapon) {
    document.getElementsByClassName("btn")[0].setAttribute("disabled", "true");
    document.getElementsByClassName("btn")[1].setAttribute("disabled", "true");
    document.getElementsByClassName("btn")[2].setAttribute("disabled", "true");
    clearInterval(cChoiceChange);
    if (weapon == "rock")
        document.getElementById("pchoice").innerText = "✊";
    else if (weapon == "paper")
        document.getElementById("pchoice").innerText = "🖐";
    else
        document.getElementById("pchoice").innerText = "✌";
    setTimeout(() => {
        document.getElementById("fieldumpire").style.marginTop = "-100vh";
        if (weapon == "rock" && document.getElementById("cchoice").innerText == "✌") {
            pwin++;
            document.getElementById("fieldumpire").innerHTML = "You won round " + rounds + "<br>🎉🎉🎉";
        }
        else if (weapon == "rock" && document.getElementById("cchoice").innerText == "🖐") {
            cwin++;
            document.getElementById("fieldumpire").innerHTML = "You lose round " + rounds + "<br>😔😔😔";
        }
        else if (weapon == "rock" && document.getElementById("cchoice").innerText == "✊") {
            document.getElementById("fieldumpire").innerHTML = "Round " + rounds + "<br>Its a draw<br>😯😯😯";
        }
        else if (weapon == "paper" && document.getElementById("cchoice").innerText == "✌") {
            cwin++;
            document.getElementById("fieldumpire").innerHTML = "You lose round " + rounds + "<br>😔😔😔";
        }
        else if (weapon == "paper" && document.getElementById("cchoice").innerText == "🖐") {
            document.getElementById("fieldumpire").innerHTML = "Round " + rounds + "<br>Its a draw<br>😯😯😯";
        }
        else if (weapon == "paper" && document.getElementById("cchoice").innerText == "✊") {
            pwin++;
            document.getElementById("fieldumpire").innerHTML = "You won round " + rounds + "<br>🎉🎉🎉";
        }
        else if (weapon == "scissors" && document.getElementById("cchoice").innerText == "✌") {
            document.getElementById("fieldumpire").innerHTML = "Round " + rounds + "<br>Its a draw<br>😯😯😯";
        }
        else if (weapon == "scissors" && document.getElementById("cchoice").innerText == "🖐") {
            pwin++;
            document.getElementById("fieldumpire").innerHTML = "You won round " + rounds + "<br>🎉🎉🎉";
        }
        else if (weapon == "scissors" && document.getElementById("cchoice").innerText == "✊") {
            cwin++;
            document.getElementById("fieldumpire").innerHTML = "You lose round " + rounds + "<br>😔😔😔";
        }
        computer();
    }, 500);
}

function playagain() {
    document.getElementById("lastpage").style.display = "none";
    document.getElementById("startpage").style.display = "block";
}

function help() {
    document.getElementById("startpage").style.marginTop = "-100vh";
    setTimeout(() => {
        document.getElementById("startpage").style.marginTop = "0";
        document.getElementById("startpage").style.display = "none";
        document.getElementById("helppage").style.display = "block";
    }, 700);
}

function back() {
    document.getElementById("helppage").style.marginTop = "100vh";
    setTimeout(() => {
        document.getElementById("helppage").style.marginTop = "0";
        document.getElementById("helppage").style.display = "none";
        document.getElementById("startpage").style.display = "block";
    }, 700);
}

function continuebtn()
{
    document.getElementById("youtube").style.display = "none";
    document.getElementById("startpage").style.display = "block";
}