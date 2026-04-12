let userscore = 0;
let compscore = 0;

const game = document.querySelectorAll(".game");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");

const compscorePara = document.querySelector("#comp-score");

const generatecompchoice = () => {
    const options = ["Stone", "paper ", " Scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    msg.innerHTML = " game is draw!";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userscore++;
        userscorePara.innerHTML = userscore;
        msg.innerHTML = `you win!  Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "red";
    }
    else {
        compscore++;
        compscorePara.innerHTML = compscore;
        msg.innerHTML = `you lose! ${compchoice} beats  Your ${userchoice}`;
        msg.style.backgroundColor = "brown";
    }
};

const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compchoice = generatecompchoice();
    console.log("comp choice = ", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userchoice === "Stone") {
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userWin = compchoice === "Scissors" ? false : true;
        }
        else {
            userWin = compchoice === "Stone" ? false : true;
        }
        showWinner(userWin);
    }
};

game.forEach((game) => {
    game.addEventListener("click", () => {
        const userchoice = game.getAttribute("id");
        playgame(userchoice);
    });
});