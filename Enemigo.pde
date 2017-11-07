package claseProcessingDisparo;

import java.util.Iterator;
import java.util.Vector;

import processing.core.PApplet;

public class Enemigo extends Cuadrado {

  private Vector<Bala> balas;
  private int timerDisparo;
  
  public Enemigo(int x, int y) {
    super(x, y, 50);
    this.balas = new Vector<Bala>();
    this.timerDisparo = 30;
  }
  
  public void dibujar(PApplet pantalla)
  {
    super.dibujar(pantalla);
    // Y luego dibujo todas las balas de dicho personaje
      // y por ultimo, chequeo cuales hay que borrar y las borro
    Iterator<Bala> iterador = this.balas.iterator();
    while (iterador.hasNext())
    {
      Bala actual = iterador.next();
      actual.dibujar(pantalla);
      if (actual.getX()<0)
      {
        iterador.remove();
      }
    }
    
    
    this.timerDisparo --;
    
    if (this.timerDisparo == 0)
    {
      this.disparar();
      this.timerDisparo = 30;
    }
  }

  public void disparar()
  {
    balas.add(new Bala(this, false));
  }
}