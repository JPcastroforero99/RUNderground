package claseProcessingDisparo;

import processing.core.PApplet;

public class Bala extends Cuadrado{

  private boolean aLaDerecha;
  
  public Bala(Cuadrado disparador, boolean aLaDerecha) {
    super((disparador.x+disparador.lado/2),
        (disparador.y+disparador.lado/2), 10);
    
    this.aLaDerecha = aLaDerecha;
  }
  
  public void dibujar(PApplet pantalla)
  {
    super.dibujar(pantalla);
    if (this.aLaDerecha == true)
    {
      this.x++;
    }
    else
      
    {
      this.x--;
    }
  }
  
}