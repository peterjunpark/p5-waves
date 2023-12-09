let waves;
let waves2;
let waves3;

function setup() {
  createCanvas(420, 420);
  background(21, 47, 63);
  angleMode(DEGREES);
  waves = new WaveSet(8, 0, color(0, 105, 119));
  waves2 = new WaveSet(9, 90, color(156, 201, 222));
  waves3 = new WaveSet(10, 30, color(79, 148, 167));
}

function draw() {
  background(21, 47, 63, 30);
  waves.displayWaves();
  waves2.displayWaves();
  waves3.displayWaves();
}
