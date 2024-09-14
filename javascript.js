function getComputerChoice() {
    let answer = Math.random()

    if (answer < 1/3) {
        answer = 'rock'
    } else if (answer >= 1/3 && answer < 2/3) {
        answer = 'paper'
    } else {
        answer = 'scissor'
    }

    return answer
}

function getHumanChoice() {
    let answer = prompt("Please choose rock, paper or scissor.")

    return answer
}

let humanScore = 0, pcScore = 0

let pcAnswer = getComputerChoice()
let humanAnswer = getHumanChoice()





console.log(humanScore, pcScore)