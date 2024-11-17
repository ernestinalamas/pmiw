
class Juego {
   constructor() {
     this.dibujarPersonaje();
     this.cuchillos = [];
     this.cantidadCuchillos = 100;
     this.timer = new Timer();
     this.fondo = imagenFondo; 
     this.estado = "Inicio";

     for (let i = 0; i < this.cantidadCuchillos; i++) {
       this.cuchillos[i] = new Cuchillo();
     }
   }

     dibujar() {
    if (this.estado === "Inicio") {
      this.dibujarPantallaInicial();
      this.reiniciarCuchillos();
    } else if (this.estado === "Juego") {
      this.dibujarFondo();
      this.personaje.dibujar();
      this.dibujarCuchillos();
      this.timer.dibujar();
      this.verificarColision();

      if (this.timer.llegoLimite()) {
        this.estado = "Ganaste";
      }
    } else if (this.estado === "Ganaste") {
      this.dibujarPantallaGanaste();
    } else if (this.estado === "Perdiste") {
      this.dibujarPantallaPerdiste();
    }
  }
  
   reiniciarCuchillos() {
    for (let cuchillo of this.cuchillos) {
      cuchillo.posY = random(-4000, 0);  
      cuchillo.posX = random(width);     
      cuchillo.velocidad = random(1, 3); 
    }
  }

   dibujarPantallaInicial() {
     background(0);
     image(this.fondo, 0, 0, width, height);
     fill(255);
     textAlign(CENTER, CENTER);
     textSize(20);
     text("Marini Joaquin - Lamas Ernestina", width / 2, height / 3);
     text("\nMovete usando las flechas de Izq y Der\nSi aguantas durante 15 segundos ganas y si te tocan perdes", width / 2, height / 2);
     textSize(25);
     text("Clickeá para empezar", width / 2, height / 1.5);
   }

   dibujarPantallaGanaste() {
     background(0);
     fill(0, 255, 0);
     textAlign(CENTER, CENTER);
     textSize(32);
     text("¡Ganaste! clickeá para reiniciar", width / 2, height / 2);
   }
   
   dibujarPantallaPerdiste() {
  background(0);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("¡Perdiste! Clickeá para reiniciar", width / 2, height / 2);
   }

   dibujarFondo() {
     image(this.fondo, 0, 0, width, height);
   }

   dibujarPersonaje() {
     this.personaje = new Personaje();
   }

   dibujarCuchillos() {
     for (let i = 0; i < this.cantidadCuchillos; i++) {
       this.cuchillos[i].dibujar();
     }
   }
   
   verificarColision() {
  for (let cuchillo of this.cuchillos) {
    if (cuchillo.colision(this.personaje)) {
      this.estado = "Perdiste";
      return;
    }
  }
}

   teclaPresionada(keyCode) {
     this.personaje.teclaPresionada(keyCode);
   }

   reiniciarJuego() {
     this.timer = new Timer();
     this.estado = "Inicio"; 
     this.dibujarPersonaje();
   }
}
