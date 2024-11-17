function SiguientePantalla(NuevaPantalla) {
  historial.push(pantalla); // Guardar la pantalla actual en el historial
  pantalla = NuevaPantalla;
}

function VolverPantalla() {
  if (historial.length > 0) {
    pantalla = historial.pop();
  }
}

function dibujarBoton(x, y, an, al, texto) {
  if (detectarBoton(x, y, an, al)) {
    fill(70);
  } else {
    fill(135);
  }
  rect(x, y, an, al, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto, x + an / 2, y + al / 2);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

function FondoDeTexto(texto) {
  let tamTexto = constrain(width / 40, 16, 32);
  textSize(tamTexto);
  let margen = 20;
  let anchoTexto = textWidth(texto) + margen;
  let altoTexto = textAscent() + textDescent() + margen;
  let posicionTextoY = height - altoTexto - 100;
  fill(255, 200);
  rect(width / 2 - anchoTexto / 2, posicionTextoY, anchoTexto, altoTexto, 10);
  fill(0);
  textAlign(CENTER, CENTER);
  text(texto, width / 2, posicionTextoY + altoTexto / 2);
}

function gestionarSonido(sonidoFondo) {
  if (!sonidoFondo.isPlaying()) {
    sonidoFondo.play();
  }
}
