'use strict';

let secretNumber = Math.floor(Math.random() * 10) + 1;
let score = 100;
let highscore = 0;
let i = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const resetMessage = function () {
  document.querySelector('.again').style.display = 'block';
};

document.querySelector('.check').addEventListener('click', function () {
  //Converting String to Number
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ Specify a number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '10rem';
    // document.querySelector('.check').style.display = 'none';
    document.querySelector('.again').style.display = 'block';
    // document.querySelector('.minus').disabled = true;
    // document.querySelector('.plus').disabled = true;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score = score - 10;
      document.querySelector('.score').textContent = score;
      resetMessage();
    } else if (score === 0) {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//Reset
document.querySelector('.again').addEventListener('click', function () {
  score = 100;
  secretNumber = Math.floor(Math.random() * 10) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '10rem';
  document.querySelector('.again').style.display = 'none';
  document.querySelector('.guess').value = 0;
});

const increment = document.querySelector('.plus');
const decrement = document.querySelector('.minus');

function incrementFunc() {
  i++;
  document.querySelector('.guess').value = i;
}
//When clicking (+) button
increment.addEventListener('click', function (e) {
  incrementFunc();
});

function decrementFunc() {
  if (i > 1) {
    i--;
    document.querySelector('.guess').value = i;
  } else if (i === 0) {
    displayMessage('🚫 Negative values is not allowed');
    document.querySelector('.guess').style.borderStyle = '4px solid red';
  }
}
//When clicking (-) button
decrement.addEventListener('click', function (e) {
  e.preventDefault();
  decrementFunc();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    e.preventDefault();
    incrementFunc();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    decrementFunc();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
      displayMessage('⛔️ Specify a number!');

      // When player wins
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '10rem';
      // document.querySelector('.check').style.display = 'none';
      document.querySelector('.again').style.display = 'block';
      // document.querySelector('.minus').disabled = true;
      // document.querySelector('.plus').disabled = true;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score = score - 10;
        document.querySelector('.score').textContent = score;
        resetMessage();
      } else if (score === 0) {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});
