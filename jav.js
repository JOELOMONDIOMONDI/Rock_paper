
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

           let userScore = 0;
            let computerScore = 0;

     function count(foo){
     if (foo === "user") {
            userScore++;
             console.log(`User Score: ${userScore}`);
         } else if (foo === "computer") {
            computerScore++;
            console.log(`Computer Score: ${computerScore}`);
        }
        else if(foo === "draw"){
            console.log("out")
            
        }

        console.log(`User Score: ${userScore} - Computer Score: ${computerScore}`);
         compScore.textContent=computerScore
         userscore.textContent=userScore
    }  
 

  // fuction to handle user choice from HTML side
     function handleUserChoice(choice){
    
//   call user and return selected value

      let theChoice=userChoice(choice)
       let compute=getComputerChoice()
//    calling playground function when the user clicks

      let theWinner=playground(compute,theChoice)
      overallWinner.textContent=theWinner;

      console.log(theWinner)
          
          count(theWinner)

    }

 
    
  
    