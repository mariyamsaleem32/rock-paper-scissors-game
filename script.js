const choice = document.querySelectorAll(".choice");

    const getCompChoice = ( () => {

    let chicesOfComp = ["rock","paper","scissors "];
    let indx = Math.floor(Math.random()*3);
     return chicesOfComp[indx]

    });

choice.forEach( (myChoice) => {
myChoice.addEventListener("click",()  => {

  const userChoice = myChoice.getAttribute("id")
  const compChoice = getCompChoice();

    });
});




   
 
// if (userChoice === compChoice) {
//     console.log("game was draw!");
// }


