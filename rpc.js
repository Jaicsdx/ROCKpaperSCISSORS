
let playerScore =0;
let computerScore =0;

function computerPlay()
{


const voucher = ["rock", "paper", "scissors"];

  var rando = voucher[Math.floor(Math.random() * voucher.length)];
  
 return rando;


}



function roundOne(playerSelection,computerSelection)

{
    if 
        (playerSelection === computerSelection)
        {
            return "tie";
        }
    
   

     else if
     ((playerSelection === "rock" && computerSelection === "scissors")||
     (playerSelection ==="paper" && computerSelection ==="rock") ||
     (playerSelection ==="scissors" && computerSelection ==="paper"))

     {
        playerScore++;
        return "you won";
        

     }
         
     else 
     ((playerSelection === "rock" && computerSelection==="paper") ||
     (playerSelection === "paper" && computerSelection==="scissors")||
     (playerSelection === "scissors" && computerSelection==="rock"))
     {
        computerScore++;
        return "computer won";
       
     }
     
     
     }
     


     function game()
     {
        for (let i = 0; i < 3; i++)
        {
            const playerSelection = prompt("Enter rock, paper or scissors");
            const copmuterSelection = computerPlay();
            console.log(copmuterSelection,playerSelection)
            console.log(roundOne(playerSelection,copmuterSelection));
        }
     
     if (playerScore > computerScore)
     { console.log(" you won the game")}
     else if(playerScore < computerScore)
     {console.logt("you lost the game")}
     else if (playerScore === computerScore)
     {console.log( "you tied the game")}
     }
     

     console.log(game());
