const btnRock = document.getElementById("btnRock");
const btnScissors = document.getElementById("btnScissors");
const btnPaper = document.getElementById("btnPaper");
const btnGroup = document.querySelector("#btnGroup")
const options = btnGroup.querySelectorAll("button");
options.forEach((option)=>{
    option.addEventListener("click", (event)=>{
        play(event.currentTarget.dataset.value);
    });

})


// btnRock.addEventListener("click", ()=>{
//     let userOpt = "rock";
//     play(userOpt);
// });

// btnScissors.addEventListener("click", ()=>{
//     let userOpt = "scissors";
//     play(userOpt);
// });

// btnPaper.addEventListener("click", ()=>{
//     let userOpt = "paper";
//     play(userOpt);
// });

function computerSelection(){
    const options = ["rock", "scissors", "paper"]; 
    const random = Math.floor(Math.random() * options.length);
    let computerOpt = (options[random]);
    return computerOpt;
}


function notTie(userOpt,computerOpt) {
let result;
    switch(userOpt){
        case "paper":
            if (computerOpt == "rock"){
            result = "user wins";
            }
            else if (computerOpt== "scissors"){
            result = "computer wins";}
            break;
        case "rock":
            if (computerOpt == "paper"){
                result = "computer wins";
                }
                else if (computerOpt== "scissors"){
                result = "user wins";}
            break;
        case "scissors":
            if (computerOpt == "rock"){
                result = "computer wins";
                }
                else if (computerOpt== "paper"){
                result = "user wins";}
            break;
        }
return result;
}



function play (userOpt){
    let computerOpt = computerSelection();
                                                //como no estoy segura del comentario siguiente,
                                                //asigno userOpt a otra variable userOpt

    result = userOpt === computerOpt ? "Tie" : notTie(userOpt, computerOpt);                             
                                                //no estoy segura de que userOpt se puede pasar de 
                                                //funcion a funcion cuando estan anidadas
    alert(userOpt);
    alert(computerOpt);                         //custom alert
    alert(result);
}


/*
function play (userOpt){
    let computerOpt = computerSelection();                     
    let result;
    if (userOpt == computerOpt) {
        result = "Tie";
    }
    else{
        switch(userOpt){                                //asi todo junto funciona
            case "paper":                               //claramente no se pasan las variables
                if (computerOpt == "rock"){             //como los comentarios previos
                result = "user wins";
                }
                else if (computerOpt== "scissors"){     //intentar con un doble ternario
                result = "computer wins";}
                break;
            case "rock":
                if (computerOpt == "paper"){
                    result = "computer wins";
                    }
                    else if (computerOpt== "scissors"){
                    result = "user wins";}
                break;
            case "scissors":
                if (computerOpt == "rock"){
                    result = "computer wins";
                    }
                    else if (computerOpt== "paper"){
                    result = "user wins";}
                break;
            }  

    }

    alert(userOpt);
    alert(computerOpt);
    alert(result);
}

*/