const choices = document.querySelectorAll(".choice");
const message = document.getElementById("message");
const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");

let user = 0;
let comp = 0;

const getCompChoice = () => {
    const choiceOfComp = ["rock", "paper", "scissor"];
    const indx = Math.floor(Math.random() * 3);
    return choiceOfComp[indx];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        const compChoice = getCompChoice();

        if (userChoice === compChoice) {
            message.innerHTML = "Game was a draw!";
            message.style.backgroundColor = "blue";
        } else if (
            (userChoice === "scissor" && compChoice === "paper") ||
            (userChoice === "rock" && compChoice === "scissor") ||
            (userChoice === "paper" && compChoice === "rock")
        ) {
            user++;
            message.innerHTML = `you win! Your ${userChoice} beats computer's ${compChoice}`;
            message.style.backgroundColor = "green";
        } else {
            comp++;
            message.innerHTML = `you lose! Computer's ${compChoice} beats your ${userChoice}`;
            message.style.backgroundColor = "red";
        }
        userScore.innerHTML = user;
        compScore.innerHTML = comp;
    });
});
