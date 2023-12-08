
// IMPORTED FILES FROM THE HTML
let Paper=document.querySelector('.p')
let Rock=document.querySelector('.r')
let Scissors=document.querySelector('.s')
let usscore=document.querySelector('#user')
let compscore=document.querySelector('#computer')
let names=["Rock","Paper","Scissors"];
let buttons=document.querySelectorAll("button")
let overallWinner=document.querySelector("#winner")
let compScore=document.querySelector("#span2")
let userscore=document.querySelector("#span1")
let tie=document.querySelector("#tie")
 
// FUNCTION TO GET THE COMPUTER CHOICE
 function getComputerChoice(){
     let choice=Math.floor(Math.random()*names.length);
    let final=names[choice];
    compscore.textContent=final;
    return final;
}

//  FUNCTION FOR USER CHOICE AND ALSO CALLS COMPUTER CHOICE
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

 
//  FUNCTION FOR CHECKING THE PLAYGROUND
function playground(comp, user) {
    if (comp === user) {
         return "draw";
    } else if (
        (comp === "Paper" && user === "Rock") ||
        (comp === "Rock" && user === "Scissors") ||
        (comp === "Scissors" && user === "Paper")
    ) {
         return "computer";
     } else {
         return "user";
    }
}

        
// FUNCTION TO INCREMENT THE CHOICES OF USER AND COMPUTER
     function count(foo){
     if (foo === "user") {
            userScore++;
          } else if (foo === "computer") {
            computerScore++;
         }
        else if(foo === "draw"){
            console.log("out")
            
        }

          compScore.textContent=computerScore
         userscore.textContent=userScore
    }  
 

  // MAIN FUNCTION THAT GETS HTML VALUES GIVING IT TO USER FUNCTION AS PARAMETER
     function handleUserChoice(choice){  
          let theChoice=userChoice(choice)
           let compute=getComputerChoice()
//    calling playground function when the user clicks

      let theWinner=playground(compute,theChoice)
      overallWinner.textContent=theWinner;       

     if(userScore < 5 && computerScore < 5) {
        // calling the function to increment
        count(theWinner)
          }   
         
 
  }
    // FUNCTION TO CLEAR THE SCREEN ONCE CODE IS FINISHED

    function clear(){
        document.querySelector(".user").style.display="none"
        document.querySelector(".computer").style.display="none"
        document.querySelector("#winner").style.display="none"
  
    }
        let userScore = 0;
            let computerScore = 0;
            // FUNCTION TO DISPLAY THO OUTCOME
        function displayOutcome(){
    
    if(userScore === 5 || computerScore === 5) {
            let outcome=userScore>computerScore ? "User" :"Computer" 
            tie.textContent=`${outcome} wins the game Refresh to start!!`
            clear()

        }
    else if(userScore===5 && computerScore===5){
        tie.textContent="outcome is draw refresh to start"
        clear()
    }
}
    
document.addEventListener("click",displayOutcome)

  