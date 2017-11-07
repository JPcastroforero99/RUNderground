package claseProcessingDisparo;

import processing.core.PApplet;

public class Cuadrado {

  int x,y,lado;
  
  public Cuadrado(int x, int y, int lado) {
    super();
    this.x = x;
    this.y = y;
    this.lado = lado;
  }

  public void dibujar(PApplet pantalla)
  {
    pantalla.rect(this.x,this.y,this.lado,this.lado);
  }

  public int getX() {
    return x;
  }

  public void setX(int x) {
    this.x = x;
  }

  public int getY() {
    return y;
  }

  public void setY(int y) {
    this.y = y;
  }

  public int getLado() {
    return lado;
  }

  public void setLado(int lado) {
    this.lado = lado;
  }
  
}