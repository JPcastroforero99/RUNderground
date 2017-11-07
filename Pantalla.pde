package claseProcessingDisparo;

import java.util.Vector;

import processing.core.PApplet;

public class Pantalla extends PApplet {
  
  Personaje t = new Personaje(100,100);
  Enemigo e = new Enemigo(400,400);
  
  public void settings() 
  {
    size(500, 500);
  }

  public void setup()
  {
    background(255);
  }
  
  public void draw()
  {
    background(255);
    t.dibujar(this);
    e.dibujar(this);
  }
  
  public void keyPressed() 
  {
    if (key == 'a')
      t.disparar();
    if (key == 's')
      t.saltar();
      
    
  }
  
  public static void main(String args[])
  {
      PApplet.main(new String[] { "--present", "claseProcessingDisparo.Pantalla" });
  }
}