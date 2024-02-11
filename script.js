let playername = "";
let score = 0;
let circleelements = [];
circleelements[0] = document.getElementById("circle1");
circleelements[1] = document.getElementById("circle2");
circleelements[2] = document.getElementById("circle3");
circleelements[3] = document.getElementById("circle4");

let rectelements = document.querySelectorAll('.container2-col');
let timer = (x) => {
    let interval = setInterval(() => {
        if (x > 0) {
            x--;
            document.querySelector('.timer').innerHTML = "<b>Time: </b><br> " + x + "sec";
        } else {
            clearInterval(interval);
            document.querySelector('.container2').style.display = 'none';
            document.querySelector('.container3').style.display = 'none';
            document.querySelector('.container4').style.display = 'flex';
            document.querySelector('.display-score').innerHTML = "Your Score is: " + score;
            if (score > 20) {
                document.querySelector('.msg').innerHTML = document.querySelector('.input-name').value + " You played very well.";
            } else if (score > 13) {
                document.querySelector('.msg').innerHTML = document.querySelector('.input-name').value + " You played well. ";
            } else {
                document.querySelector('.msg').innerHTML = document.querySelector('.input-name').value + " Better luck next time. ";
            }

        }
    }, 1000);
}
setgameheader = () => {
    document.querySelector('.name').innerHTML = "<b>Name: </b><br>" + document.querySelector('.input-name').value;
    document.querySelector('.score').innerHTML = "<b>Score: </b><br> 0";
    document.querySelector('.timer').innerHTML = "<b>Time: </b> <br>25 sec";
    timer(25);
}

start = () => {
    score = 0;
    document.querySelector('.container1').style.display = "none";
    document.querySelector('.game-header').style.display = "flex";
    document.querySelector('.container4').style.display = "none";
    if (document.querySelector('.select-layout').value == "rectangle") {
        document.querySelector('.container2').style.display = "flex";
        setgameheader()
        rectanglegame(25)
    }
    else if (document.querySelector('.select-layout').value == "circle") {
        document.querySelector('.container3').style.display = "flex";
        setgameheader();
        circlegame(25);
    }
}

circlegame = (time) => {
    let flag = true;
    let x = -1;
    let clicked = -2;
    for (let i = 0; i < circleelements.length; i++) {
        circleelements[i].addEventListener('click', function (e) {
            clicked = i;
            if (x == clicked && flag) {
                flag = false;
                score++;
                document.querySelector('.score').innerHTML = "<b>Score: </b> <br>" + score;
            }
        });
    }
    let interval = setInterval(() => {
        flag = true;
        x = Math.floor(Math.random() * 4);
        if (time > 0) {
            time--;
            circleelements[x].style.backgroundColor = "rgba(250, 69, 49, 0.77)";
        } else {
            clearInterval(interval);
            circleelements[x].style.backgroundColor = "white";
        }
        setTimeout(() => {
            circleelements[x].style.backgroundColor = "white";
        }, 900)
    }, 1000)
}

rectanglegame = (time) => {
    let flag = true;
    let x = -1;
    let clicked = -2;
    for (let i = 0; i < rectelements.length; i++) {
        rectelements[i].addEventListener('click', function (e) {
            clicked = i;
            if (x == clicked && flag) {
                flag = false;
                score++;
                document.querySelector('.score').innerHTML = "<b>Score: </b><br> " + score;
            }
        });
    }
    let interval = setInterval(() => {
        flag = true;
        x = Math.floor(Math.random() * 16);
        if (time > 0) {
            time--;
            rectelements[x].style.backgroundColor = "rgba(250, 69, 49, 0.77)";
        } else {
            clearInterval(interval);
            rectelements[x].style.backgroundColor = "white";
        }
        setTimeout(() => {
            rectelements[x].style.backgroundColor = "white";
        }, 900)
    }, 1000)
}

document.querySelector('.btn-start').addEventListener("click", start);
document.querySelector('.btn-playagain').addEventListener("click", start);
document.querySelector('.btn-home').addEventListener("click", () => {
    document.querySelector('.game-header').style.display = 'none';
    document.querySelector('.container4').style.display = "none";
    document.querySelector('.container1').style.display = "flex";
});