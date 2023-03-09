
let playerScore =0;
let computerScore =0;
const rockButton = document.querySelector('.rock');
const paperButton =document.querySelector('.paper');
const scissorButton = document.querySelector('.scissors');
const container =document.querySelector('.container');
const outcomediv =document.querySelector('.outcome');





function computerPlay()
{


const voucher = ["rock", "paper", "scissors"];

  var rando = voucher[Math.floor(Math.random() * voucher.length)];
  
 return rando;


}



function roundOne(playerSelection,computerSelection)
const outcomeDiv =document.createElement('div')
outcomediv.classList.add('outcome')
container.append('outcome');

{
    if 
        (playerSelection === computerSelection)
        { const p =document.createElement('p');
        p.innerText= "you tied"
        outcomediv.appendChild(p);
   
        }
    
   

     else if
     ((playerSelection === "rock" && computerSelection === "scissors")||
     (playerSelection ==="paper" && computerSelection ==="rock") ||
     (playerSelection ==="scissors" && computerSelection ==="paper"))

     {
        playerScore++;
        const p =document.createElement('p');
        p.innerText= "you won"
        outcomediv.appendChild(p);
   
        }
        

     
         
     else 
     ((playerSelection === "rock" && computerSelection==="paper") ||
     (playerSelection === "paper" && computerSelection==="scissors")||
     (playerSelection === "scissors" && computerSelection==="rock"))
     {
        computerScore++;
        const p =document.createElement('p');
        p.innerText= "COMPUTER WON";
        outcomediv.appendChild(p);
       
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
     {console.log("you lost the game")}
     else if (playerScore === computerScore)
     {console.log( "you tied the game")}
     }
   

rockButton.addEventListener("click" ,function()

   {
      const computerSelection =computerPlay();
      const playerSelection ='rock';
      roundOne(playerSelection, computerSelection)
   })
   paperButton.addEventListener("click" ,function()

     {const computerSelection =computerPlay();
      const playerSelection ='paper';
      roundOne(playerSelection, computerSelection)})
   
   scissorButton.addEventListener("click" ,function()

      {const computerSelection =computerPlay();
      const playerSelection ='scissors';
      roundOne(playerSelection, computerSelection)})}