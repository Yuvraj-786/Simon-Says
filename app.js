let boxes = document.querySelector(".boxes");

let btns = ["btn-one", "btn-two", "btn-three", "btn-four"];

let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;

let h3 = document.querySelector("h3");
console.dir(h3);

let button = document.querySelector("button");
console.dir(button);


button.addEventListener("click", () => {
    if (!start) {
        console.log("game started.");
        start = true;
        setTimeout(levelUp, 500);
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randDiv = btns[randIdx];
    let randbtn = document.getElementById(randDiv);

    gameSeq.push(randDiv);
    console.log(gameSeq);

    btnFlash(randbtn);
}

function btnFlash(button) {
    button.classList.add("flash");
    setTimeout(() => {
        button.classList.remove("flash");
    }, 200);
}


function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerText = `Game Over! Click 'Start' to start the game.`;
        reset();
    }
}

function btnPress() {
    btnFlash(this);
    userSeq.push(this.id);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".boxes");

for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    start = false;
    level = 0;
}