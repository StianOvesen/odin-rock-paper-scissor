// GAMELOOP
let playerScore = 0
let computerScore = 0

let htmlPlayerScore = document.getElementById('score-player')
let htmlComputerScore = document.getElementById('score-computer')
let htmlResult = document.getElementById('result')
let htmlReveal = document.getElementById('reveal')
let htmlBtnText = document.getElementById('btn-text')

htmlPlayerScore.innerHTML = playerScore
htmlComputerScore.innerHTML = computerScore

function playRound(playerChoice) {
    let computerChoice = getComputerChoice()
    let result = ''
    if (playerScore < 5 && computerScore < 5) {
        if (playerChoice == computerChoice) {
            result = "It's a tie!"
            htmlResult.style.color = 'grey'
            htmlReveal.innerHTML = `You picked <strong>${playerChoice}</strong> and the computer picked <strong>${computerChoice}</strong>.`
        } else if (
            (playerChoice == 'rock' && computerChoice == 'scissors') ||
            (playerChoice == 'paper' && computerChoice == 'rock') ||
            (playerChoice == 'scissors' && computerChoice == 'paper')
        ) {
            playerScore++
            htmlPlayerScore.innerHTML = playerScore
            result = 'You win!'
            htmlResult.style.color = 'green'
            htmlReveal.innerHTML = `You picked <strong>${playerChoice}</strong> and the computer picked <strong>${computerChoice}</strong>.`
            
        } else {
            computerScore++
            htmlComputerScore.innerHTML = computerScore
            result = 'Computer win!'
            htmlResult.style.color = 'red'
            htmlReveal.innerHTML = `You picked <strong>${playerChoice}</strong> and the computer picked <strong>${computerChoice}</strong>.`
        }
        htmlResult.innerHTML = result
    }

    if (playerScore == 5) {
        htmlResult.style.color = 'green'
        htmlResult.innerHTML = `You reached 5 points. You win!`
        htmlBtnText.innerHTML = `Play again?`
        
    }

    if (computerScore == 5) {
        htmlResult.style.color = 'red'
        htmlResult.innerHTML = `Computer reached 5 points. Computer wins!`
    }
    
    
}

// function restartGame() {
//     playerScore = 0
//     computerScore = 0
// }

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}


// UI
const gameButtons = document.querySelectorAll('#game-btn')

gameButtons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
    })
})
