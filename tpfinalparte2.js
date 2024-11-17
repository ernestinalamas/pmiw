//Marini Joaquin Lamas Ernestina Comision 1
//https://youtu.be/Su-fQlzCuvk
let juego;
let sonidoFondo;

function preload() {
  sonidoFondo = loadSound("data/fondo.mp3");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(200);
  juego.dibujar();
    if (juego.estado === "Juego" && !sonidoFondo.isPlaying()) {
    sonidoFondo.loop(); 
  }
}

function mousePressed() {
  if (juego.estado === "Inicio") {
    juego.estado = "Juego";
  } else if (juego.estado === "Ganaste" || juego.estado === "Perdiste") {
    juego.reiniciarJuego();
  }
}

function keyPressed()  {
  juego.teclaPresionada(keyCode);
}
