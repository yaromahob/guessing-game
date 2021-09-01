class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.guessNumber = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessNumber = Math.floor((this.min + this.max + 1) / 2);
    return this.guessNumber;
  }

  lower() {
    this.max = this.guessNumber;
  }

  greater() {
    this.min = this.guessNumber;
  }
}

module.exports = GuessingGame;
