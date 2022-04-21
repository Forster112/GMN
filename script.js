'use strict';

let secretNumber = Math.floor(Math.random() * 4) + 1;
let score = 20;
let highScore = 0;


const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}


//Add an event listener
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    //test availability of user guess
    if (!guess) {
        displayMessage('⛔ No number');
    } else if (guess > 20) {
        displayMessage('🚫 Number too high');
    } else if (guess < 1) {
        displayMessage('😒 Number too low');
    } else {
        //if guess match with secret number
        if (guess === secretNumber) {
            displayMessage('✨ Correct!');

            document.body.style.backgroundColor = '#1efb1e';

            document.querySelector('.number').style.width = '30rem';

            document.querySelector('.number').innerHTML = secretNumber;

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else {
            //keeping score to 0+
            if (score > 0) {
                displayMessage('👎 Keep quessing');
                score--;
                document.querySelector('.score').textContent = score;

                document.body.style.backgroundColor = '#a70404';
                //score same as 0
                if (score === 0) {
                    document.querySelector('.score').textContent = 'You f** lost!';
                }
            }
        }
    }
});

//restoring the page to default by the click of the again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 4) + 1;

    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.body.style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
})