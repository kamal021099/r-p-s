
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

//to keep count of wins;
let compwin=0;
let playerwin=0;

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
        compwin += 1;
        return "you lose";
    }
    else 
    {
        playerwin += 1;
        return ("you win");
    }
}

//to check if the person has won or the computer in a game of 5 rounds.
function winCheck(compwin, playerwin)
{
    if(compwin==5)
    {
        alert("you lost the game");   
    }
    else if(playerwin==5)
    {
        alert("you won the game");
    }
}

//dynamically adding a div to show score
const body = document.querySelector("body")
const div1 = document.createElement('div');
const div2 = document.createElement('div');
div1.textContent = (compwin);
div2.textContent = (playerwin);

body.appendChild(div1);
body.appendChild(div2);


//on click parameters are assigned and one round is played.
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = (button.getAttribute("id"));
        computerSelection = computerPlay().toUpperCase();
        console.log(playRound(playerSelection, computerSelection));
        winCheck(compwin,playerwin);
        div1.textContent = (compwin);
        div2.textContent = (playerwin);
    });
});




