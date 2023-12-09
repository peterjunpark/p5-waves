class WaveSet {
  constructor(numWave, shift, color) {
    this.waves = [];
    this.numWave = numWave;
    this.shift = shift;
    this.color = color;

    for (let i = 0; i < numWave; i++) {
      this.waves[i] = new Wave(this.shift, this.color);
    }
  }

  displayWaves() {
    for (let i = 0; i < this.numWave; i++) {
      let horPosition = (i / (this.numWave - 1)) * width;
      push();
      translate(horPosition, 0);
      this.waves[i].display();
      pop();
    }
  }
}
