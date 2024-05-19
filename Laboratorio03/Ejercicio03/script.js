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
 
 
   restartBtn.addEventListener('click', initializeGame);
 
   initializeGame();
 });
 