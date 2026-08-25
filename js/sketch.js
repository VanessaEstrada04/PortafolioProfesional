// ===========================
// HERO GENERATIVO
// Vanessa Estrada
// ===========================

let cantidad = 150;

let posX = [];
let posY = [];

let velX = [];
let velY = [];

let colores = [];
let transparencias = [];

let posiblesColores = [
  50, 60, 70, 80, 90,
  100, 110, 120,
  140, 150,
  200, 210, 220, 230, 240
];

// Puntos de conexión
let p1, p2, p3, p4;

// Contenedor del canvas (el hero)
let heroEl;

function setup() {

  heroEl = document.querySelector('.hero');

  let cnv = createCanvas(heroEl.offsetWidth, heroEl.offsetHeight);
  cnv.class('sketch-bg');
  cnv.parent(heroEl);

  strokeWeight(1);

  for (let i = 0; i < cantidad; i++) {

    posX[i] = random(width);
    posY[i] = random(height);

    velX[i] = random(-2, 2);
    velY[i] = random(-2, 2);

    colores[i] =
      posiblesColores[
        floor(random(posiblesColores.length))
      ];

    transparencias[i] = random(70, 180);
  }

  actualizarPuntos();
}

function draw() {

  background(10);

  // Animación muy sutil del centro
  let t = frameCount * 0.01;

  let ax = p1.x + sin(t) * 20;
  let ay = p1.y + cos(t) * 20;

  let bx = p2.x + cos(t) * 18;
  let by = p2.y + sin(t) * 18;

  let cx = p3.x + sin(t * 0.8) * 15;
  let cy = p3.y + cos(t * 0.8) * 15;

  let dx = p4.x + cos(t * 1.2) * 15;
  let dy = p4.y + sin(t * 1.2) * 15;

  for (let i = 0; i < cantidad; i++) {

    stroke(colores[i], transparencias[i]);

    line(posX[i], posY[i], ax, ay);
    line(posX[i], posY[i], bx, by);
    line(posX[i], posY[i], cx, cy);
    line(posX[i], posY[i], dx, dy);

    posX[i] += velX[i];
    posY[i] += velY[i];

    if (posX[i] < 0 || posX[i] > width) {
      velX[i] *= -1;
    }

    if (posY[i] < 0 || posY[i] > height) {
      velY[i] *= -1;
    }
  }
}

function actualizarPuntos() {

  // Centro desplazado hacia la derecha
  let centroX = width * 0.75;
  let centroY = height * 0.50;

  let separacion = min(width, height) * 0.15;

  p1 = createVector(
    centroX,
    centroY - separacion
  );

  p2 = createVector(
    centroX + separacion,
    centroY
  );

  p3 = createVector(
    centroX,
    centroY + separacion
  );

  p4 = createVector(
    centroX - separacion,
    centroY
  );
}

function windowResized() {

  resizeCanvas(heroEl.offsetWidth, heroEl.offsetHeight);

  actualizarPuntos();
}