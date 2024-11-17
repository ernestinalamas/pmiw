class Personaje {
  constructor() {
    this.posX = random(40, 600);
    this.posY = 370;
    this.dir = 1;
    this.tam = 10;
    this.vel = 1;
    this.imagen = loadImage('data/hombre.png'); 
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY);
  }

  moverDer() {
    if(this.posX + 15 > 530){
      return;
    }
    this.posX += 15;
  }

  moverIzq() {
    if(this.posX - 15 < 0){
      return;
    }
    this.posX -= 15;
  }

  teclaPresionada(keyCode) {
    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW) {
        this.moverDer();
      } else if (keyCode == LEFT_ARROW) {
        this.moverIzq();
      }
    }
  }
}
