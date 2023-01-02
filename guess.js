let answer = Math.ceil(Math.random() * 100);
console.log(answer);
let guessAmount = 10;
let hasAnswered = false;
let num = 50;
console.log(num===50);

const form = document.querySelector('#form');
form.addEventListener('submit', event => {
  event.preventDefault();


    let guessedAnswer = parseInt(document.querySelector('#answer').value);
    let amountOfTries = document.querySelector('#amount');

    if(guessAmount <= 0) {
        amountOfTries.innerText = "Failed! You have no more attempts left!";
        return;
    }
    if(hasAnswered === true) return;

    if(guessedAnswer === answer) {
        document.querySelector('#trying').innerText = "Your guess is correct";
        amountOfTries.innerText = "";
        return hasAnswered = true;
    }
    else if(guessedAnswer > answer) {
        document.querySelector('#trying').innerText = "Wrong, Try lower";
        guessAmount--;
        amountOfTries.innerText = "You have only " + guessAmount + " guesses left!";
    }
    else if(guessedAnswer < answer) {
        document.querySelector('#trying').innerText = "Wrong, Try higher";
        guessAmount--;
        amountOfTries.innerText = "You have only " + guessAmount + " guesses left!";
    }
    else {
        document.querySelector('#trying').innerText = "Please enter a valid number!";
    }
});
