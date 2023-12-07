
let Paper=document.querySelector('.p')
let Rock=document.querySelector('.r')
let Scissors=document.querySelector('.s')
let usscore=document.querySelector('#user')
let compscore=document.querySelector('#computer')
let names=["Rock","Paper","Scissors"];
let buttons=document.querySelectorAll("button")
 

 function getComputerChoice(){
     let choice=Math.floor(Math.random()*names.length);
    let final=names[choice];
    compscore.textContent=final;
    return final;
}

 
function userChoice(userSelection){
   let selected
    if(userSelection == names[0]){
         usscore.textContent=names[0];
         selected =names[0]

     }
     else if(userSelection == names[1]){
         usscore.textContent=names[1];
          selected=names[1]



     }
     else if(userSelection == names[2]){
          usscore.textContent=names[2];
           selected=names[2]


     }
     getComputerChoice();
     return selected
  }

 
 
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


// fuction to handle user choice from HTML side
function handleUserChoice(choice){
//   call user and return selected value

   let theChoice=userChoice(choice)
   let comp=getComputerChoice()
   console.log(theChoice)
   console.log(comp)

//    calling playground function when the user clicks

   
 }
 
 

      





































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

 