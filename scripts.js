function getComputerChoice() {
    const alternative = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * alternative.length);
    const choice = alternative[random]
    return choice
}

function getPlayerChoice() {
    const alternative = ["Rock", "Paper", "Scissors"]
    const input = prompt("Choose (1)Rock, (2)Paper, or (3) Scissors")
    const choice = alternative[Number(input) - 1]
    return choice
}

function playRound() {
    const computerChoice = getComputerChoice()
    const playerChoice = getPlayerChoice()
    

    if (computerChoice == "Rock" && playerChoice == "Paper") {
        console.log(`Computer chose: ${computerChoice}.`)
        console.log(`Player chose: ${playerChoice}.`)
        return "player"
    } else if (computerChoice == "Paper" && playerChoice == "Scissors") {
        console.log(`Computer chose: ${computerChoice}.`)
        console.log(`Player chose: ${playerChoice}.`)
        return "player"
    } else if (computerChoice == "Scissors" && playerChoice == "Rock") {
        console.log(`Computer chose: ${computerChoice}.`)
        console.log(`Player chose: ${playerChoice}.`)
        return "player"
    } else if (computerChoice == playerChoice) {
        console.log(`Computer chose: ${computerChoice}.`)
        console.log(`Player chose: ${playerChoice}.`)
        return "draw"
    } else {
        console.log(`Computer chose: ${computerChoice}.`)
        console.log(`Player chose: ${playerChoice}.`)
        return "computer"
    }
}

function bo5() {
    let playerScore = 0
    let computerScore = 0
    const textPlayerWins = `Player wins!`
    const textComputerWins = `Computer wins!`
    const textDraw = `It's a draw!`

    while ((playerScore < 5) && (computerScore < 5)) {
        const textScore = `Player Score: ${playerScore}. Computer Score: ${computerScore}`
        outcome = playRound()
        if (outcome == "player") {
            console.log(textPlayerWins)
            playerScore++
            console.log(playerScore)

        } else if (outcome == "draw") {
            console.log(textDraw)

        } else if (outcome == "computer") {
            console.log(textComputerWins)
            computerScore++
            console.log(computerScore)

        } else {
            console.log(`Unknown return value: ${outcome}`)
        }
        console.log(textScore)
    }
}