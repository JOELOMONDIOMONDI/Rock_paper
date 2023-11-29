  console.log("hello good people how are you");

function getComputerChoice(){
    let names=["Rock","Paper","Scissors"];
    let choice=Math.floor(Math.random()*names.length);
    let final=names[choice];
    return final;
}

function getUserInput(){
    let name=prompt("INPUT YOUR CHOICE (Rock, Paper, or Scissors)");
    console.log(name);
    return name;
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

function game() {
    let userScore = 0;
    let computerScore = 0;

    while (userScore < 5 && computerScore < 5) {
        const userChoice = getUserInput();
        const computerChoice = getComputerChoice();
        console.log("Computer's choice:", computerChoice);
        console.log("User's choice:", userChoice);

        const winner = playground(computerChoice, userChoice);

        if (winner === "user") {
            userScore++;
        } else if (winner === "computer") {
            computerScore++;
        }

        console.log(`User Score: ${userScore} - Computer Score: ${computerScore}`);
    }

    console.log("\nFinal Score:");
    console.log(`User: ${userScore} - Computer: ${computerScore}`);

    if (userScore === computerScore) {
        console.log("It's a tie!");
    } else {
        const overallWinner = userScore > computerScore ? "User" : "Computer";
        console.log(`${overallWinner} wins the game!`);
    }
}

game();
