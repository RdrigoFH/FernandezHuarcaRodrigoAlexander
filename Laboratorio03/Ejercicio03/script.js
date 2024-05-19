document.addEventListener('DOMContentLoaded', () => {
   const words = ['ejemplo', 'programacion web', 'programming', 'developer', 'computer'];
   let selectedWord = '';
   let displayedWord = '';
   let attempts = 6;
   let guessedLetters = [];
 
   const wordDisplay = document.getElementById('word-display');
   const messageDisplay = document.getElementById('message');
   const lettersContainer = document.getElementById('letters-container');
   const attemptsDisplay = document.getElementById('attempts');
   const restartBtn = document.getElementById('restart-btn');
   const hangmanImage = document.getElementById('hangman-image');
 
   function initializeGame() {
     selectedWord = words[Math.floor(Math.random() * words.length)];
     displayedWord = '_'.repeat(selectedWord.length);
     attempts = 6;
     guessedLetters = [];
 
     wordDisplay.textContent = displayedWord.split('').join(' ');
     messageDisplay.textContent = '';
     attemptsDisplay.textContent = attempts;
     lettersContainer.innerHTML = '';
     hangmanImage.src = 'images/hangman-0.svg';
 
     for (let i = 0; i < 26; i++) {
       const letter = String.fromCharCode(65 + i);
       const letterButton = document.createElement('span');
       letterButton.textContent = letter;
       letterButton.classList.add('letter');
       letterButton.addEventListener('click', () => handleGuess(letter));
       lettersContainer.appendChild(letterButton);
     }
 
     restartBtn.style.display = 'none';
   }
 
 
   restartBtn.addEventListener('click', initializeGame);
 
   initializeGame();
 });
 