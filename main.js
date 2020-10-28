function computerPlay() {
        const choice=["rock", "paper", "scissors"];
        const idx= Math.floor(Math.random()*choice.length) //randomly generate indices of choice array so as to extract the element
        return choice[idx];
    }

function playRound(playerSelection, computerSelection) {
        return playerSelection===computerSelection ? "Tie":
        playerSelection==="rock"? computerSelection==="paper"? "computer wins" : "player wins":
        playerSelection==="paper"? computerSelection==="scissors"? "computer wins" : "player wins":
        playerSelection==="scissors" && (computerSelection==="rock"? "computer wins" : "player wins");

    }
    
function game() {
        let playScore=0;
        let compScore=0;
        
        for (let i=1; i<=5; i++){
            let playerSelection = (prompt(`Enter your choice for round ${i}- rock, paper or scissors`)).toLowerCase(); //for making it case insenstive
            let computerSelection=computerPlay();
            let result=playRound(playerSelection, computerSelection);
            if (result.includes("player")) {
                playScore++;
            }
            else if (result.includes("computer")){
                compScore++;
            }
            console.log(`For round ${i}, computer selected ${computerSelection} and who wins-> ${result}`);
        }
        return playScore > compScore ? "Player is the final winner":
        compScore > playScore ? "Computer is the final winner":
        "Everything ties up in the end";
    }

console.log(game());


   