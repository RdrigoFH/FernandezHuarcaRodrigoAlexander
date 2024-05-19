document.addEventListener('DOMContentLoaded', () => {
  const keypad = document.getElementById('keypad');
  const display = document.getElementById('display');
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
});
