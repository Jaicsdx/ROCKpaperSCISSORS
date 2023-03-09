
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


{
    if 
        (playerSelection === computerSelection)
        { const p =document.createElement('p');
        p.innerText= "GAME TIED"
        outcomediv.appendChild(p);
   
        }
    
   

     else if
     ((playerSelection === "rock" && computerSelection === "scissors")||
     (playerSelection ==="paper" && computerSelection ==="rock") ||
     (playerSelection ==="scissors" && computerSelection ==="paper"))

     {
        playerScore++;
        const p =document.createElement('p');
        p.innerText= "COMPUTER WON"
        outcomediv.appendChild(p);
   
        }
        

     
         
     else 
     ((playerSelection === "rock" && computerSelection==="paper") ||
     (playerSelection === "paper" && computerSelection==="scissors")||
     (playerSelection === "scissors" && computerSelection==="rock"))
     {
        computerScore++;
        const p =document.createElement('p');
        p.innerText= "PLAYER WON";
        outcomediv.appendChild(p);
       
     }
   }
     
     
     


    
   

rockButton.addEventListener("click" ,()=>

   {
      const computerSelection =computerPlay();
      const playerSelection ='rock';
      roundOne(playerSelection, computerSelection)
   })
   paperButton.addEventListener("click" ,()=>

     {const computerSelection =computerPlay();
      const playerSelection ='paper';
      roundOne(playerSelection, computerSelection)})
   
   scissorButton.addEventListener("click" ,()=>

      {const computerSelection =computerPlay();
      const playerSelection ='scissors';
      roundOne(playerSelection, computerSelection)})
   
   
   