let randomnumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const prevguess = document.querySelector('.guesses');
const remainingguess = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguesses = [];
let numguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //check whether no. are between 1 to 100 or not random no. not be empty
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a less than 100');
  } else {
    prevguesses.push(guess);
    if (numguess === 11) {
      displayGuess(guess);
      displaymessage(`Game over, Random no. was ${randomnumber}`);
      endgame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //checks whether guess no. are equal lower or higher
  if (guess === randomnumber) {
    displaymessage(`You guessed it right`);
    endgame();
  } else if (guess < randomnumber) {
    displaymessage(`Number is too low`);
  } else if (guess > randomnumber) {
    displaymessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  //clear the guess after submit
  userInput.value = '';
  prevguess.innerHTML += `${guess} `;
  numguess++;
  remainingguess.innerHTML = `${11 - numguess} `;
}

function displaymessage(message) {
  loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start new Game</h2>`;
  StartOver.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newGameButton = document.querySelector('#newgame');
  newGameButton.addEventListener('click', function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevguesses = [];
    numguess = 1;
    prevguess.innerHTML = '';
    remainingguess.innerHTML = `${11 - numguess} `;
    userInput.removeAttribute('disabled');
    StartOver.removeChild(p);

    playgame = true;
  });
}
