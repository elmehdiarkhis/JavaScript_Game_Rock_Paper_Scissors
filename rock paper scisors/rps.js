//-------Variables---------
var pScore=0;
var cScore=0;
var playButton = document.querySelector(".intro button");
var introScreen = document.querySelector(".intro");
var match = document.querySelector(".match");
var scoreBoard = document.querySelector(".score");
var playerHandImage = document.querySelector(".player-hand");
var computerHandImage = document.querySelector(".computer-hand");
var playerButtonArray = Array.from(document.querySelectorAll(".options button"));
var textResult = document.querySelector(".winner");
var playerScore = document.querySelector(".player-score p");
var computerScore = document.querySelector(".computer-score p");
var game= document.querySelector("section");
var computerChoice;
var playerChoice;
//-------Variables---------



 

// trigger the Parent function 
gameWrapper();





function gameWrapper(){

 //call the two Principal functions 
 startGameFadeInOut();
 playMatch();
  


 
    //onclick (fadeOut>FadeIn)
    function startGameFadeInOut(){
        playButton.addEventListener("click",()=>{
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn");
            scoreBoard.classList.add("fadeIn");
        });    
    }



    // Debut function Principale //--------------------------
    function playMatch(){

        //Boucle ForEach qui passe par chaque button des trois.
        playerButtonArray.forEach( button => {     

            button.addEventListener("click",function(){

                //choix du joueur
                playerChoice = this.textContent;  // this: c'est  playerButtonArray[i], c'est un button des trois button de choix.
 
                //choix du Computer
                var computerArrayOptions = ['rock','paper','scissors'];
                var randomZeroTwo = Math.floor(Math.random()*3);
                computerChoice = computerArrayOptions[randomZeroTwo];

                


                //Do the animation on image after click (Js~css)
                playerHandImage.style.animation = `shakePlayer 2s ease`;
                computerHandImage.style.animation = `shakeComputer 2s ease`;

                //remove animation after the end, pour la refaire dans le deuxieme click(round) (Js~css)
                playerHandImage.addEventListener("animationend",()=>{
                    playerHandImage.style.animation="";
                });
                computerHandImage.addEventListener("animationend",()=>{
                    computerHandImage.style.animation="";                   
                });


                //Delay : Afficher le resultat apres la Fin d'animation
                setTimeout( () =>{
                    //update images
                    playerHandImage.src=`/assets/${playerChoice}.png`;
                    computerHandImage.src=`/assets/${computerChoice}.png`;
                    //Show Resultat
                    compareHands_AndChangeResult(playerChoice,computerChoice);
                },1750) 
                
                
            });
        });  
    }
    // Fin function Principale //--------------------------

            



    
    
    // functions inner de playMatch() -------------------------------------------------
    function compareHands_AndChangeResult(playerChoice,computerChoice){
        
        // cas d'egalite
        if(playerChoice === computerChoice){
            textResult.textContent="It is a tie";
            return;
        }


        if(playerChoice === 'rock' ){

            if (computerChoice=== 'scissors'){
                textResult.textContent="Player Wins";
                pScore++;
                greenAnimation();
                winAnimation()
                updateScore();
                return;
            }

            if (computerChoice=== 'paper'){
                textResult.textContent="Player Loose";
                cScore++;
                redAnimation();
                looseAnimation()
                updateScore();
                return;
            }
        }

        if(playerChoice ===  'scissors' ){

            if (computerChoice=== 'rock'){
                textResult.textContent="Player Loose";
                cScore++;
                updateScore();
                looseAnimation()
                redAnimation();
                return;
            }

            if (computerChoice=== 'paper'){
                textResult.textContent="Player Wins";
                pScore++;
                greenAnimation();
                winAnimation()
                updateScore();
                return;
            }
        }


        if(playerChoice === 'paper'  ){

            if (computerChoice=== 'rock'){
                textResult.textContent="Player Wins";
                pScore++;
                greenAnimation();
                winAnimation()
                updateScore();
                return;
            }

            if (computerChoice=== 'scissors'){
                textResult.textContent="Player Loose";
                cScore++;
                updateScore();
                looseAnimation()
                redAnimation();
                return;
            }
        }


    }
 // FIN functions inner de playMatch() -------------------------------------------------
   





    // the inner functions de compareHands_AndChangeResult()---------------------------
    function updateScore(){
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    }


    function winAnimation(){
        playerScore.style.fontSize =`6rem`;
        playerScore.style.fontWeight =`900`;
        setTimeout(() => {
            playerScore.style.fontSize =`2rem`;
            playerScore.style.fontWeight =`100`;
        }, 400);    
    }

    function looseAnimation(){
        computerScore.style.fontSize =`6rem`;
        computerScore.style.fontWeight =`900`;
        setTimeout(() => {
            computerScore.style.fontSize =`2rem`;
            computerScore.style.fontWeight =`100`;
        }, 400);
    }


    function greenAnimation(){
        game.style.background="green";
        setTimeout(() => {
            game.style.background=`rgb(0, 2, 114)`;
        }, 300);
    }
    
    function redAnimation(){
        game.style.background="red";
        setTimeout(() => {
            game.style.background=`rgb(0, 2, 114)`;
        }, 300);
    }
    // END - inner functions de compareHands_AndChangeResult()---------------------------
}

