
console.log("kamal");

//randomizing computer's warrior.
function computerPlay()
{
    let x = Math.floor(Math.random() * 3) + 1;
    if(x==1)
    {
        return "ROCK";
    }
    else if(x==2)
    {
        return "PAPER";
    }
    else
    {
        return "SCISSORS";
    }
}

//assigning warriors to pass as parameters to game function;
let computerSelection;
let playerSelection;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = (button.getAttribute("id"));
        computerSelection = computerPlay().toUpperCase();
        console.log(playRound(playerSelection, computerSelection));
    });
});


function playRound(playerSelection, computerSelection)
{
                    
    //not sure if these methods are in place or not;
    let x = computerSelection;
    let y = playerSelection;
    console.log(x);
    console.log(y);
    
    if(x==y)
    {
        return "peace";
    }
    else if((x=="ROCK" && y=="SCISSORS") || (x=="PAPER" && y=="ROCK") || (x=="SCISSORS" && y=="PAPER"))
    {
        return "you lose";
    }
    else 
    {
        return ("you win");
    }

}

