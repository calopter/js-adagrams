const Adagrams = {
  
  letterPool: { A: 9, N: 6, B: 2, O: 8, C: 2, P: 2,
                D: 4, Q: 1, E: 12, R: 6, F: 2, S: 4,
                G: 3, T: 6, H: 2, U: 4, I: 9, V: 2, 
                J: 1, W: 2, K: 1, X: 1, L: 4, Y: 2,
                M: 2, Z: 1 },

  scores: { A: 1, N: 1, B: 3, O: 1, C: 3, P: 3,
            D: 2, Q: 10, E: 1, R: 1, F: 4, S: 1,
            G: 2, T: 1, H: 4, U: 1, I: 1, V: 4, 
            J: 8, W: 4, K: 5, X: 8, L: 1, Y: 4,
            M: 3, Z: 10 },

  scoreWord(word) {
    const scoreLetter = (letter) => this.scores[letter];
    const sum = (total, score) => total + score;
    let score = word.toUpperCase().split('')
                   .map(scoreLetter).reduce(sum, 0);

    if (word.length >= 7) {
      score += 8;
    }

    return score;
  },

  usesAvailableLetters(word, drawn) {
    let hand = {};
    
    for (const letter of drawn) {
      if (hand[letter] == undefined) {
        hand[letter] = 1;
      } else {
        hand[letter]++;
      }
    }

    for (const letter of word) {
      if (hand[letter] > 0) {
        hand[letter]--;
      } else {
        return false;
      }
    }
    
    return true;
  },

  drawLetters() {
    const pool = this.letters();
    const randomIndex = () => Math.floor(Math.random() * pool.length)
    
    return Array(10).fill().map(() => pool[randomIndex()]);
  },
  
  letters() {
    let pool = [];

    for(let letter in this.letterPool) {
      const count = this.letterPool.letter;
      const letters = Array(count).fill(letter);
      
      pool = pool.concat(letters);
    }

    return pool;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
