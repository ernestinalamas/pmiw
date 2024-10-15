let fondos = [];
let estado;
let textos = []; 

function preload() {
  
  for (let i = 0; i < 15; i++) {
    fondos[i] = loadImage("data/imagen" + i + ".png"); 
  }
}

function setup() {
  createCanvas(640, 480);
  estado = 0; 

  
  textos = [
    "Un hombre caminando hacia su hogar.",
    "Finalmente el hombre llega a su casa",
    "En cuanto llega, se sienta en su sillón verde para leer una novela.",
    "La novela cuenta como una pareja de amantes planean matar al esposo de la mujer.",
    "El hombre armado con un puñal, se dirige a la casa de su víctima",
    "El amante continua su camino, pasa por un parque y se dirige a una mansion",
    "Llega y busca la forma de no ser visto",
    "El amante recorre los pasillos de la mansión con un cuchillo en su mano",
    "",
    "",
    "",
    "",
    "",
    "",
    "Final C."
  ];
}

function draw() {
  background(255);
  
  
  if (fondos[estado]) {
    image(fondos[estado], 0, 0, width, height);
  }
  
  
  fill(0);
  textSize(24); 
  textAlign(CENTER, CENTER);
  text(textos[estado], width / 2, height - 100); 
  
  
  if (estado < 14) { 
    dibujarBoton(width - 120, height - 60, 100, 40, "Siguiente");
  }
  
  
  if (estado > 0) {
    dibujarBoton(20, height - 60, 100, 40, "Atrás");
  }
}

function mousePressed() {
  
  if (estado < 14 && detectarBoton(width - 120, height - 60, 100, 40)) {  
    estado++;  
  }
  
  if (estado > 0 && detectarBoton(20, height - 60, 100, 40)) {
    estado--;  
  }
}

function dibujarBoton(x, y, an, al, texto) {
  if (detectarBoton(x, y, an, al)) {
    fill(0, 255, 255);
  } else {
    fill(0, 0, 255);
  }
  rect(x, y, an, al, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto, x + an / 2, y + al / 2);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}
