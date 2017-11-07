package claseProcessingDisparo;

import java.util.Iterator;
import java.util.Vector;

import processing.core.PApplet;

public class Personaje extends Cuadrado {

  private Vector<Bala> balas;
  private int limBalas;
  private int velSalto;
  private int velGravedad;
  private boolean saltando; 
  
  public Vector<Bala> getBalas() {
    return balas;
  }

  public Personaje(int x, int y) {
    super(x, y, 100);
    this.balas = new Vector<Bala>();
    this.limBalas = 25;
    this.velSalto = 0;
    this.saltando = false;
    this.velGravedad = 0;
  }
  
  public void dibujar(PApplet pantalla)
  {
    // Con esto dibujo el cuadrado del personaje
    super.dibujar(pantalla);
    // Y luego dibujo todas las balas de dicho personaje
    // y por ultimo, chequeo cuales hay que borrar y las borro
    Iterator<Bala> iterador = this.balas.iterator();
    while (iterador.hasNext())
    {
      Bala actual = iterador.next();
      actual.dibujar(pantalla);
      if (actual.getX()>500)
      {
        iterador.remove();
      }
    }
    
    // Si estoy saltando, modifico la coordenada y
    // con la velocidad de salto
    if (saltando == true)
    {
      this.y += this.velSalto;
      this.velSalto++;
      if (this.velSalto == 34)
      {
        saltando = false;
      }
    }
    
    // Como quiero gravedad y el piso esta en la
    // coordenada 500, mientras no halla llegado al piso
    // quiero que caiga
    if (this.y+this.lado < 450)
    {
      this.velGravedad++;
      this.y+=this.velGravedad;
    }
    
    // Si me pase, vuelvo la gravedad a cero, y me quedo en el piso
    if (this.y+this.lado >= 450)
    {
      this.velGravedad=0;
      this.y=450-this.lado;
    }
    
  
  }
  
  public void disparar()
  {
    if (this.limBalas > 0)
    {
      balas.add(new Bala(this, true));
      this.limBalas--;
    }
    
  }

  public void saltar()
  {
    if (this.saltando==false)
    {
      this.velSalto = -35;
      this.saltando = true;
    }
  }
  
  
}