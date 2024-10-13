const choices = document.querySelectorAll(".choice");

 const getCompChoice = ( () => {
    let choiceOfComp = ["rock","paper","scissor"];
    let indx = Math.floor(Math.random()*3);
     return choiceOfComp[indx];
    });

    choices.forEach((choice) =>{
        choice.addEventListener("click", () =>{
        
            let userChoice = choice.id;
            console.log("your choice" ,userChoice);
            let compChoice = getCompChoice();
            console.log("comp choice",compChoice);

if (userChoice === compChoice) {
    console.log("game was draw!")

}if (userChoice === "scissor" && compChoice === "paper") {
    console.log(`your ${userChoice} beats comuter's ${compChoice} `);

 } if(userChoice === "paper" && compChoice === "scissor") {
    console.log(`computer's ${compChoice} beats your ${userChoice} `);

} if (userChoice === "paper" && compChoice === "rock") {
    console.log(`your ${userChoice} beats comuter's ${compChoice} `);
    
} if (userChoice === "rock" && compChoice === "paper") {
    console.log(`computer's ${compChoice} beats your ${userChoice} `);
    
} if(userChoice === "rock" && compChoice === "scissor") {
    console.log(`your ${userChoice} beats comuter's ${compChoice} `);
    
}if (userChoice === "scissor" && compChoice === "rock") {
    console.log(`computer's ${compChoice} beats your ${userChoice} `);
 }

});
});
