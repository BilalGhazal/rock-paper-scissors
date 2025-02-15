let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let computerSelection = "";




function getComputerChoice() {
    let number = Math.random();

    if (number <= 0.333) {
        return "rock";
    }

    else if (number > 0.333 && number <= 0.666) {
        return "paper";
    }

    else {
        return "scissors";
    }
}


function playGame() {

    const choice = document.querySelector("#choice");

    choice.addEventListener("click", (event) => {

        let target = event.target;

        switch(target.id) {

            case "paper":
                humanSelection = "paper";
                console.log(humanSelection)
                break;

            case "rock":
                humanSelection = "rock";
                console.log(humanSelection)
                break;

            case "scissors":
                humanSelection = "scissors";
                console.log(humanSelection)
                break;

        }

        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        const message = document.querySelector("#message");

        message.textContent = `Your score ${humanScore} - computer score ${computerScore}`;

        if (humanScore >= 5 || computerScore >= 5) {
            const finalMessage = document.querySelector("#final-message");
            
            if (humanScore > computerScore) {
                finalMessage.textContent = "You win!"
            }

            else {
                finalMessage.textContent = "Computer wins!"
            }
            
        }

    })

    function playRound(humanSelection, computerSelection) {

        if (humanSelection === computerSelection) {
            console.log("Tie!");
            return;
        }
    
        else if ((humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "paper")) 
            {
            
            console.log("You win!");
            humanScore++;
        }
    
        else {
            console.log("Computer wins!");
            computerScore++;
        }
    }
}


playGame();



