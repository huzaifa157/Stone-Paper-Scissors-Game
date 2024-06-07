const choices  = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user_score")
const compScorePara = document.querySelector("#comp_score")
 let userScore = 0;
 let compScore = 0;


const genCompChoice = () => {
    const options = ["rock", "paper" , "scissors"]
    const randIdx = Math.floor(Math.random() *3)
    return options[randIdx]

}

const showWinner = (userWin ,userChoice , compChoice) =>{
    userChoice = userChoice.toUpperCase()
compChoice = compChoice.toUpperCase()

    if (userWin ){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU HAVE WON! YOUR ${userChoice} BEATS ${compChoice}`;
        msg.style.backgroundColor = "seagreen"
        msg.style.color = "#fff"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU HAVE LOST! ${compChoice} HAVE BEATEN YOUR ${userChoice}`
        msg.style.backgroundColor = "red"
        msg.style.color = "#fff"
    }

}

const drawGame = () => {
msg.innerText = " GAME HAS DRAWN! PLAY AGAIN!";
msg.style.backgroundColor = "yellow"
msg.style.color = "#081b31"

 

}


const playgame = (userChoice) =>{
    console.log("user choice =", userChoice)

// comp choice 
const compChoice = genCompChoice()
console.log("comp choice =" , compChoice)



// condition for win and lose and draw 


if (userChoice === compChoice){
    drawGame()
} else {
    let userWin = true;
    if (userChoice === "rock" ){
        // if comp give paper ya phr scissors
        userWin = compChoice ===  "paper" ? false : true;
    } else if(userChoice === "paper"){
        // if comp give scissors ya phr rock 
        userWin = compChoice === "scissors" ? false : true
    } else{
            // if comp give rock ya paper 
            userWin = compChoice ==="rock" ? false : true

    }
showWinner(userWin, userChoice, compChoice);
}


}
 









 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playgame(userChoice);
    })
 })