function setup() {
  createCanvas(600, 400);
  frameRate(1); // Aggiorna il frame ogni secondo
}

function disegnaPesce(x, y, r) {
  // Corpo del pesce con contorno nero
  stroke(0);  // Colore del contorno nero
  strokeWeight(1);
  fill("#FF9800"); // Colore di riempimento del corpo
  circle(x, y, 2 * r);

  // Coda del pesce
  fill("#FF6700");
  triangle(
    x + r, y,
    x + r + r * (3 ** 0.5) / 2, y - r / 2,
    x + r + r * (3 ** 0.5) / 2, y + r / 2
  );

  // Occhio del pesce
  strokeWeight(4);
  fill(255); // Occhio bianco
  point(x - r / 3, y - r / 3);
}

function bolle(x, y, r) {
  let rColore = random(0, 50);     // Componente rossa bassa
  let gColore = random(0, 50);     // Componente verde bassa
  let bColore = random(200, 255);  // Componente blu alta
  fill(rColore, gColore, bColore, 128);  // Trasparenza fissa a 128
  noStroke();
  circle(x, y, r);
}


function draw() {
  background("#5CB5CD"); // Resetta lo sfondo

  // Disegna i pesci ogni volta
  let numeroPesci = 50;
  let raggioPesce = 15;
  let xPasso = 50;
  let y1 = 130;
  let y2 = 260;

  // Disegna le bolle in posizioni casuali
  let numeroBolle = 50;
  for (let i = 0; i < numeroBolle; i++) {
    let xBolla = random(0, 600);
    let yBolla = random(0, 400);
    let raggioBolla = random(5,20);
    bolle(xBolla, yBolla, raggioBolla);
  }

  for (let i = 0; i < numeroPesci; i++) {
    if (i % 2 == 0) {
      disegnaPesce(xPasso * i, y1, raggioPesce);
    } else {
      disegnaPesce(xPasso * i, y2, raggioPesce);
    }
  }
}
