'use strict';
let secNumber = Math.trunc(Math.random() * 20) + 1;

let tries = 5;
let highscore = 0;
let gameWon = false;

document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (guess === secNumber) {
    document.querySelector('.message').textContent = 'You Win!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secNumber;
    if (gameWon !== true) {
      highscore++;
      document.querySelector('.highscore').textContent = highscore;
      gameWon = true;
    } else {
      return;
    }
  } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'Choose a number between 1 and 20';
  } else if (guess > secNumber) {
    document.querySelector('.message').textContent = 'Lower';
    if (tries > 1) {
      tries--;
      document.querySelector('.tries').textContent = tries;
    } else {
      document.querySelector('.message').textContent = 'You Lose!';
      document.querySelector('.tries').textContent = '0';
    }
  } else if (guess < secNumber) {
    document.querySelector('.message').textContent = 'Higher';
    if (tries > 1) {
      tries--;
      document.querySelector('.tries').textContent = tries;
    } else {
      document.querySelector('.message').textContent = 'You Lose!';
      document.querySelector('.tries').textContent = '0';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  tries = 5;
  document.querySelector('.tries').textContent = tries;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').value = '';
  gameWon = false;
});
