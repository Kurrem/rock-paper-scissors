function getComputerChoice() {
    let rand = Math.random()

    if (rand < 1/3) {
        answer = 'rock'
    } else if (rand >= 1/3 && rand < 2/3) {
        answer = 'paper'
    } else {
        answer = 'scissor'
    }
    return answer
}

function getHumanChoice() {
    let answer = prompt("Please choose rock, paper or scissor.").toLowerCase()

    return answer
}

function playRound(humanChoice, pcChoice) {
    let roundResult = 0             // 1 = human won. 2 = pc won. 0 = draw. 3 = error.
    if (humanChoice === 'rock') {
        if (pcChoice === 'scissor') {
            roundResult = 1
        } else if (pcChoice === 'paper') {
            roundResult = 2
        }
        else {
            roundResult = 0
        }
    } else if (humanChoice === 'paper') {
        if (pcChoice === 'rock') {
            roundResult = 1
        } else if (pcChoice === 'scissor') {
            roundResult = 2
        }
        else {
            roundResult = 0
        }
    } else if (humanChoice === 'scissor') {
        if (pcChoice === 'paper') {
            roundResult = 1
        } else if (pcChoice === 'rock') {
            roundResult = 2
        }
        else {
            roundResult = 0
        }
     } else {
        roundResult = 3
     }
    return roundResult
}

function playGame() {
    let humanScore = 0, pcScore = 0, draw = 0

    for (i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice()
        const pcSelection = getComputerChoice()
        result = playRound(humanSelection, pcSelection)
        
        if (result === 1) {
            humanScore = humanScore +1
            console.log(humanScore)
        } else if (result === 2) {
            pcScore = pcScore +1
        } else if (result === 0) {
            draw = draw +1
        }
    }

    if (humanScore > pcScore) {
        console.log('Human won!')
    } else if (pcScore > humanScore) {
        console.log('Computer won!')
    } else if (humanScore === pcScore) {
        console.log("it's a draw")
    }
}

playGame()