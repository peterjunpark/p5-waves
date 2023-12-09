class Wave {
  constructor(shift, color) {
    this.x = [];
    this.y = [];
    this.size = 10;
    this.num = width / this.size;

    this.amplitude = 30;
    this.angle = 0;
    this.period = 1.5;

    this.shift = shift;
    this.color = color;
  }

  display() {
    noStroke();
    fill(this.color);

    for (let i = 0; i < this.num; i++) {
      this.angle = (i / (this.num - 1)) * 360 * this.period;

      this.x[i] = this.amplitude * cos(this.angle + this.shift);

      this.y[i] = i * this.size;

      rect(this.x[i], this.y[i], this.size, this.size);
    }

    this.shift++;
  }
}
