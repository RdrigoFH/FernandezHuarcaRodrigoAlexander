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
 
   function handleGuess(letter) {
     if (guessedLetters.includes(letter)) return;
 
     guessedLetters.push(letter);
     const letterButtons = document.querySelectorAll('.letter');
     letterButtons.forEach(btn => {
       if (btn.textContent === letter) btn.classList.add('disabled');
     });  
 
     if (selectedWord.toUpperCase().includes(letter)) {
       let newDisplayedWord = '';
       for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i].toUpperCase() === letter) {
          newDisplayedWord += selectedWord[i];
        } else {
          newDisplayedWord += displayedWord[i];
        }
      }
       displayedWord = newDisplayedWord;
       wordDisplay.textContent = displayedWord.split('').join(' ');
       if (!displayedWord.includes('_')) {
         messageDisplay.textContent = 'Congratulations! You won!';
         endGame();
       }
     } else {
       attempts--;
       attemptsDisplay.textContent = attempts;
       hangmanImage.src = `images/hangman-${6 - attempts}.svg`; 
       if (attempts === 0) {
         messageDisplay.textContent = `Game over! The word was "${selectedWord}".`;
         endGame();
       }
     }
   }
 
   function endGame() {
     const letterButtons = document.querySelectorAll('.letter');
     letterButtons.forEach(btn => btn.classList.add('disabled'));
     restartBtn.style.display = 'block';
   }
 
   restartBtn.addEventListener('click', initializeGame);
 
   initializeGame();
 });
 