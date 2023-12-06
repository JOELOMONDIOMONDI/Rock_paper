
let Paper=document.querySelector('.p')
let Rock=document.querySelector('.r')
let Scissors=document.querySelector('.s')
let usscore=document.querySelector('#user')
let compscore=document.querySelector('#computer')
let names=["Rock","Paper","Scissors"];
 

 function getComputerChoice(){
     let choice=Math.floor(Math.random()*names.length);
    let final=names[choice];
    compscore.textContent=final;
    return final;
}

function userInput(userSelection){
    if(userSelection == names[0]){
        return userSelection;
     }
     else if(userSelection == names[1]){
         return userSelection
     }
     else if(userSelection == names[2]){ 
         return userSelection
     }

}

function userChoice(userSelection){
     if(userSelection == names[0]){
         usscore.textContent=names[0];
         getComputerChoice();
         return userSelection;

     }
     else if(userSelection == names[1]){
         usscore.textContent=names[1];
         getComputerChoice();
         return userSelection


     }
     else if(userSelection == names[2]){
          usscore.textContent=names[2];
          getComputerChoice();
         return userSelection


     }
  }

document,addEventListener("click", userChoice)

 
function playground(comp, user) {
    if (comp === user) {
        console.log("draw")
        return "draw";
    } else if (
        (comp === "Paper" && user === "Rock") ||
        (comp === "Rock" && user === "Scissors") ||
        (comp === "Scissors" && user === "Paper")
    ) {
         console.log("computer wins");
        return "computer";
     } else {
        console.log("user wins")
        return "user";
    }
}
 let final=getComputerChoice();
  let useChoice= userInput();
  const winner=playground(final,useChoice);
  console.log(winner)


































// function game() {
//     let userScore = 0;
//     let computerScore = 0;

//     while (userScore < 5 && computerScore < 5) {
//         const userChoice = getUserInput();
//         const computerChoice = getComputerChoice();
//         console.log("Computer's choice:", computerChoice);
//         console.log("User's choice:", userChoice);

//         const winner = playground(computerChoice, userChoice);

//         if (winner === "user") {
//             userScore++;
//         } else if (winner === "computer") {
//             computerScore++;
//         }

//         console.log(`User Score: ${userScore} - Computer Score: ${computerScore}`);
//     }

//     console.log("\nFinal Score:");
//     console.log(`User: ${userScore} - Computer: ${computerScore}`);

//     if (userScore === computerScore) {
//         console.log("It's a tie!");
//     } else {
//         const overallWinner = userScore > computerScore ? "User" : "Computer";
//         console.log(`${overallWinner} wins the game!`);
//     }
// }

 