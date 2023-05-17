let computerNumber
let userNumber = []
let attempts = 0
let maxguesses = 10

function newGame() {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function computerNumber() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumber.push('' + userNumber)
    document.getElementById('guessses').innerHTML = userNumber
    
    if(attempts < maxguesses) {
        if(userNumber > computerNumber) {
            document.getElementById('textOut').innerHTML = 'Your number'
            document.getElementById('InputBox').volue = ''
            attempts ++
            document.getElementById('attempts').innerHTML = attempts
        }
        else if (userNumber <computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too low'
            document.getElementById('inputBox').value = ''
            attemps++
            document.getElementById('attempts').innerHTML = attempts
        }
        else {
            document.getElementById('textOutput').innerHTML = 'Congratulations!!!!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') 
        }
    }
    else {
        document.getElementById('textOutput').innerHTML = 'You Lose! try again!'
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly' )
    }
}
 