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


const container = document.querySelector('#container');

const p = document.createElement('p');
p.textContent = "Enter one of the choices below: ";
container.appendChild(p);

const rock = document.createElement('button');
rock.textContent="rock";
rock.setAttribute('id', 'rock');
rock.style.marginRight="10px";
container.appendChild(rock);

const paper = document.createElement('button');
paper.textContent="paper";
paper.setAttribute('id', 'paper');
paper.style.marginRight="10px";
container.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent="scissors";
scissors.setAttribute('id', 'scissors');
container.appendChild(scissors);

const res = document.createElement('div');
res.style.marginTop="20px";
container.appendChild(res);

let compScore=0;
let playScore=0;

//add event listeners

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', final);
})

function final(e) {
   
    let computerSelection=computerPlay();
    let playerSelection = e.target.id;
    let result = playRound(playerSelection, computerSelection);
    
    if (result.includes("player")){
        playScore++;
    }
    else if (result.includes("computer")){
        compScore++;
    }

    res.textContent= `Computer chose ${computerSelection} and who wins-> ${result}, P=${playScore}, C=${compScore}`;

    if (playScore ===5 || compScore === 5){
    if (playScore===5){
        res.innerHTML += " <br/> Game over. Player wins.";
    } else if (compScore ===5){
        res.innerHTML += " <br/> Game over. Computer wins.";
    }
    let rock_new = document.querySelector("#rock");
    let paper_new = document.querySelector("#paper");
    let scissors_new = document.querySelector("#scissors");
    rock_new.style.display="none";
    paper_new.style.display="none";
    scissors_new.style.display="none"
    }


}


       



   