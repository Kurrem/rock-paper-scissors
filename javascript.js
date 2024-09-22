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

function playGame(humanSelection) {
    const buttons = document.querySelectorAll("button");
    let roundResult = 0
    let humanScore = 0, pcScore = 0

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            humanSelection = button.textContent.toLowerCase()
            roundResult = playRound(humanSelection, getComputerChoice())

            if (roundResult === 1) {
                humanScore = humanScore +1
            } else if (roundResult === 2) {
                pcScore = pcScore +1
            }

            humanScorePanel = document.querySelector('.humanScore')
            humanScorePanel.textContent = humanScore
            pcScorePanel = document.querySelector('.pcScore')
            pcScorePanel.textContent = pcScore
            if (humanScore === 5 || pcScore === 5) {
                scorePanel = document.querySelector('.scorePanel')
                
                if (humanScore === 5) {
                    winText.textContent = 'Human won!'
                } else if (pcScore === 5) {
                    winText.textContent = 'Computer won!'
                }
                humanScore = 0
                pcScore = 0
                       
            }
        })
    })

}

playGame()

const container = document.querySelector("#container");
let scorePanel = document.createElement("div");
scorePanel.classList.add('scorePanel')
let winText = document.createElement('h1')
let humanScorePanel = document.createElement("h1");
humanScorePanel.classList.add('humanScore')
let pcScorePanel = document.createElement("h1");
pcScorePanel.classList.add('pcScore')

scorePanel.appendChild(humanScorePanel);
scorePanel.appendChild(pcScorePanel);
scorePanel.appendChild(winText) 

container.appendChild(scorePanel);