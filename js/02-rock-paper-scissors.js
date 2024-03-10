function getUserChoice() {
    let tempChoice
    let runAgain

    do {
        runAgain=false
        tempChoice = prompt("Type rock, paper, or scissors to play against me:")
        
        if (tempChoice != "rock" && tempChoice != "paper" && tempChoice != "scissors") {
            runAgain=true
            alert("You must enter rock, paper, or scissors as your choice, using only lowercase letters.")
        }

    } while (runAgain);

    return tempChoice
}

function getComputerChoice() {
    randomNumber = Math.random()
    if (randomNumber<0.3333333) {
        return "rock"
    } else if (randomNumber>0.666666) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRockPaperScissors(userChoice, computerChoice) {
    // compare user and computer choices, once we know they're not the same

    if ((userChoice==="rock"&&computerChoice==="scissors") || (userChoice==="paper"&&computerChoice==="rock") || (userChoice==="scissors"&&computerChoice==="paper")) { // user win condition
        return `You win! Your ${userChoice} defeats my ${computerChoice}. I am sad :-(`
    } else {
        return `You lose! My ${computerChoice} defeats your ${userChoice}! I am happy :-)`
    }
}

function init() {
    // get initial choices
    let userChoice = getUserChoice()
    let computerChoice = getComputerChoice()

    // check for ties and get choices again if needed
    while (userChoice===computerChoice) {
        alert(`You and I both chose ${userChoice}! Let's play again!`)
        userChoice = getUserChoice()
        computerChoice = getComputerChoice()
    }

    // compare results and decide winner
    alert(playRockPaperScissors(userChoice, computerChoice))
}

init()