// console.log("one");
// console.log("two");

// setTimeout( () => {

//     console.log("three");

// }, 2000);

const choice = document.querySelectorAll(".choice");

const getCompChoice = ( () => {
    let chicesOfComp = ["rock","paper","scissors "];
    let indx = Math.floor(Math.random()*3);
    console.log(chicesOfComp[indx]);
    });

choice.forEach( (myChoice) => {
    myChoice.addEventListener("click", () => {
       const userChoice = myChoice.getAttribute("id");
        const compChoice = getCompChoice();
    console.log("choice was clicked");


if (userChoice == compChoice) {
    console.log("game was draw!");
}
    });
});
