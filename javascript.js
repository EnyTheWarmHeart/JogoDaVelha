
// Escolha do player

function getplayerChoice (player){ //parametros

    playerchoice = prompt("rock, paper or scissors?");
    

    if (playerchoice != "rock"&& playerchoice != "paper"&& playerchoice !="scissors"){

        alert("this is not a valid option");

    } else {

        alert(`you have chosen ${playerchoice}`);
        getComputerChoice(playerchoice);    //chama a função getComputerChoice para verificar resultados e enviar para outra função
    
    }
   
}

getplayerChoice();

// Escolha do computador

function getComputerChoice (playerchoice){ //parametros
 
    const random = Math.floor(Math.random() * 3 ); //array
    const choices = ["rock","paper","scissors"];

    let choRes = choices [random];

    alert(`Computer chose ${choices[random]}`); if (playerchoice == choRes) { // compara os valores


        alert("Draw!");

    }else if (playerchoice > choRes) {
        
        alert("You lost");

    } else{
        
        alert("You Won!");
    }


} 