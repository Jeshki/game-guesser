let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const compareGuesses = (userGuess, computerGuess, secretNumber) => {
    secretNumber = generateTarget 
    if (Math.abs(userGuess - secretNumber) <= Math.abs(computerGuess - secretNumber)) {
        return true;
    } else if (Math.abs(userGuess - secretNumber) > Math.abs(computerGuess - secretNumber)) {
        return false;
    } 
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1
}
