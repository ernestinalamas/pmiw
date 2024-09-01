//Ernestina Lamas
//Comision 1
//https://youtu.be/3UZB6fLRSxI
let obra;
let columnas;
let filas;
let tamaño;
let opacidadMaxima;

function preload() {
  obra = loadImage("data/obratp3cambiada.jpg");
}

function setup() {
  createCanvas(800, 400);
  reiniciar();
}

function draw() {
  background(0);
  tamaño = width / 2 / columnas;

  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      let x = (i * tamaño) + (width / 2) + tamaño / 2;
      let y = j * tamaño + tamaño / 2; 
      let distanciaDiagonal = dist(i, j, columnas - 1 - i, filas - 1 - j);
      let maxDistancia = dist(0, 0, columnas - 1, filas - 1);
      let size = map(distanciaDiagonal, 0, maxDistancia, tamaño * 0.1, tamaño * 0.9);

      let distancia = dist(mouseX, mouseY, x, y);
      let opacidad = calcularOpacidad(distancia, width / 2, opacidadMaxima);

      dibujarElipse(x, y, size, opacidad);
    }
  }

  image(obra, 0, 0, width / 2, height);
}

function keyPressed() {
  if (key === '+') {
    columnas++;
    filas++;
    redraw();
  } else if (key === '-') {
    columnas = max(1, columnas - 1);
    filas = max(1, filas - 1);
    redraw();
  } else if (key === 'r') {
    reiniciar();
    redraw();
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    opacidadMaxima += 10;
  } else if (mouseButton === RIGHT) {
    opacidadMaxima = max(0, opacidadMaxima - 10);
  }
}

function dibujarElipse(x, y, size, opacidad) {
  fill(255, opacidad);
  noStroke();
  ellipse(x, y, size, size);
}

function calcularOpacidad(distancia, maxDistancia, maxOpacidad) {
  return map(distancia, 0, maxDistancia, maxOpacidad, 50);
}

function reiniciar() {
  columnas = 18;
  filas = 18;
  opacidadMaxima = 255;
}
