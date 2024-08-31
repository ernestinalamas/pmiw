PImage obra;
int columnas;
int filas;
int tamaño;
float opacidadMaxima;

void setup() {
  size(800, 400);
  obra = loadImage("obratp3cambiada.jpg");
  reiniciar();
}

void draw() {
  background(0);
  tamaño = width / 2 / columnas;

    for (int i = 0; i < columnas; i++) {
    for (int j = 0; j < filas; j++) {
      float x = (i * tamaño) + (width / 2) + tamaño / 2;
      float y = j * tamaño + tamaño / 2; 
      float distanciaDiagonal = dist(i, j, columnas - 1 - i, filas - 1 - j);
      float maxDistancia = dist(0, 0, columnas - 1, filas - 1);
      float size = map(distanciaDiagonal, 0, maxDistancia, tamaño * 0.1, tamaño * 0.9);

      float distancia = dist(mouseX, mouseY, x, y);
      float opacidad = calcularOpacidad(distancia, width / 2, opacidadMaxima); 

      dibujarElipse(x, y, size, opacidad); 
    }
  }

  image(obra, 0, 0, width / 2, height);
}

void keyPressed() {
  if (key == '+') {
    columnas++;
    filas++;
    redraw();
  } else if (key == '-') {
    columnas = max(1, columnas - 1);
    filas = max(1, filas - 1);
    redraw();
  } else if (key == 'r') {
    reiniciar(); 
    redraw();
  }
}

void mousePressed() {
  if (mouseButton == LEFT) {
    opacidadMaxima += 10;
  } else if (mouseButton == RIGHT) {
    opacidadMaxima = max(0, opacidadMaxima - 10);
  }
}

void dibujarElipse(float x, float y, float size, float opacidad) {
  fill(255, opacidad);
  noStroke();
  ellipse(x, y, size, size);
}

float calcularOpacidad(float distancia, float maxDistancia, float maxOpacidad) {
  return map(distancia, 0, maxDistancia, maxOpacidad, 50);
}

void reiniciar() {
  columnas = 18;
  filas = 18;
  opacidadMaxima = 255;
}
