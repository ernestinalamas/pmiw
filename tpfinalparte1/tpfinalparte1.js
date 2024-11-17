// Ernestina Lamas Marini Joaquin Comision 1
// https://youtu.be/R3Cgy1FB0MY

let textos = [];
let fondos = [];
let pantalla = 0;
let historial = [];
let bifurcacion = false;
let sonidoFondo;

function preload() {
  for (let i = 0; i < 20; i++) {
    fondos[i] = loadImage("data/imagen" + i + ".webp");
    fondos[i].resize(640, 480);
    sonidoFondo = loadSound("data/fondo.mp3");
  }
  textos = loadStrings("data/textos.txt");
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255);

  if (fondos[pantalla]) {
    image(fondos[pantalla], 0, 0);
  }

  if (pantalla === 0) {
    dibujarBoton(20, height - 60, 140, 40, "Activar Sonido", pantalla);
  }
  
  FondoDeTexto(textos[pantalla], width, height);

  if (pantalla === 4) {
    dibujarBoton(width / 2 - 160, height - 60, 140, 40, "Se van juntos", pantalla);
    dibujarBoton(width / 2 + 20, height - 60, 140, 40, "Se separan", pantalla);
    dibujarBoton(20, height - 60, 100, 40, "Atrás", pantalla);
    bifurcacion = true;
  } else if (pantalla === 8) {
    dibujarBoton(width / 2 - 160, height - 60, 140, 40, "Lo descubren y atrapan", pantalla);
    dibujarBoton(width / 2 + 20, height - 60, 140, 40, "Logra entrar sin ser visto", pantalla);
    dibujarBoton(20, height - 60, 100, 40, "Atrás", pantalla);
    bifurcacion = true;
  } else if (pantalla === 14) {
    dibujarBoton(width / 2 - 160, height - 60, 140, 40, "El lector se defiende y mata al amante", pantalla);
    dibujarBoton(width / 2 + 20, height - 60, 140, 40, "El lector muere", pantalla);
    dibujarBoton(20, height - 60, 100, 40, "Atrás", pantalla);
    bifurcacion = true;
  } else {
    bifurcacion = false;

    if (pantalla === 9 || pantalla === 15 || pantalla === 16 || pantalla === 19) {
      dibujarBoton(width / 2 - 50, height - 60, 100, 40, "Reiniciar", pantalla);
    } else {
      if (pantalla < textos.length - 1) {
        dibujarBoton(width - 120, height - 60, 100, 40, "Siguiente", pantalla);
      }
    }
    if (pantalla > 0) {
      dibujarBoton(20, height - 60, 100, 40, "Atrás", pantalla);
      gestionarSonido(sonidoFondo);
    }
  }
}

function mousePressed() {
  if (bifurcacion) {
    if (pantalla === 4) {
      if (detectarBoton(width / 2 - 160, height - 60, 140, 40)) {
        SiguientePantalla(5);
      } else if (detectarBoton(width / 2 + 20, height - 60, 140, 40)) {
        SiguientePantalla(6);
      } else if (detectarBoton(20, height - 60, 100, 40)) {
        VolverPantalla();
      }
    } else if (pantalla === 8) {
      if (detectarBoton(width / 2 - 160, height - 60, 140, 40)) {
        SiguientePantalla(9);
      } else if (detectarBoton(width / 2 + 20, height - 60, 140, 40)) {
        SiguientePantalla(10);
      } else if (detectarBoton(20, height - 60, 100, 40)) {
        VolverPantalla();
      }
    } else if (pantalla === 14) {
      if (detectarBoton(width / 2 - 160, height - 60, 140, 40)) {
        SiguientePantalla(15);
      } else if (detectarBoton(width / 2 + 20, height - 60, 140, 40)) {
        SiguientePantalla(16);
      } else if (detectarBoton(20, height - 60, 100, 40)) {
        VolverPantalla();
      }
    }
  } else {
    if (pantalla === 5 && detectarBoton(width - 120, height - 60, 100, 40)) {
      SiguientePantalla(17);
    } else if (pantalla < textos.length - 1 && detectarBoton(width - 120, height - 60, 100, 40)) {
      SiguientePantalla(pantalla + 1);
    }
    
    if ((pantalla === 9 || pantalla === 15 || pantalla === 16 || pantalla === 19) && detectarBoton(width / 2 - 50, height - 60, 100, 40)) {
      pantalla = 0;
    }
     
    if (pantalla > 0 && detectarBoton(20, height - 60, 100, 40)) {
      VolverPantalla();
    }
    if (pantalla === 0 && detectarBoton(20, height - 60, 140, 40)) {
      if (sonidoFondo.isPlaying()) {
        sonidoFondo.pause();
      } else {
        sonidoFondo.loop();
      }
    }
  }
}
