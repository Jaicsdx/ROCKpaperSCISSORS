
let playerScore =0;
let computerScore =0;
const rockButton = document.querySelector('.rock');
const paperButton =document.querySelector('.paper');
const scissorButton = document.querySelector('.scissors');
const container =document.querySelector('.container');

const outcomediv =document.querySelector('.outcome');
const cscorespan =document.querySelector('computer-score');
const pscorespan =document.querySelector('player-score');




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
        p.innerText= "pLAYER WON"
        outcomediv.appendChild(p);
   
        }
        

     
         
     else if
     ((playerSelection === "rock" && computerSelection==="paper") ||
     (playerSelection === "paper" && computerSelection==="scissors")||
     (playerSelection === "scissors" && computerSelection==="rock"))
     {
        computerScore++;
        const p =document.createElement('p');
        p.innerText= "COMPUTER WON";
        outcomediv.appendChild(p);
       
     }
   }
     
     function score(playerScore, computerScore)
     {
     if (playerScore===5)
     {
      const h2 =document.createElement('h2');
      h2.innerText ="PLAYER WON "
      outcomediv.appendChild(h2)
     }
else if (computerScore===5)
{const h2 = document.createElement('h2')
h2.innerText ="COMPUTER WON"
outcomediv.appendChild(h2)}
   }
   
   


   

rockButton.addEventListener("click" ,()=>

   {
      const computerSelection =computerPlay();
      const playerSelection ='rock';
      roundOne(playerSelection, computerSelection)
    
      
      score(playerScore, computerScore)
  

   })
   paperButton.addEventListener("click" ,()=>

     {const computerSelection =computerPlay();
      const playerSelection ='paper';
      roundOne(playerSelection, computerSelection)
    
      
      score(playerScore, computerScore)
      scoreboard(playerScore,computerScore)

  
     })
   scissorButton.addEventListener("click" ,()=>

      {
      
         const computerSelection =computerPlay();
      const playerSelection ='scissors';
      roundOne(playerSelection, computerSelection)

      
      score(playerScore, computerScore)

   }
   
   )

   
 