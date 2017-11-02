Obstaculos[] obstaculo;
PImage f, b, w, d, a, s, n;
int x=800, y, vy; 
boolean sal=false;
char mov;
void setup() {
  fullScreen();
  //size(800,600);
}
void draw () {
  f = loadImage("fondo.png");
  b = loadImage("mf.png");
  w = loadImage("gw.png");
  d = loadImage("gd.png");
  a = loadImage("ga.png");
  s = loadImage("gs.png");
  n = loadImage("gn.png");
  imageMode(CORNERS); 
  image(f, 0, 0, width, height ); 
  switch (mov) {
  case 'w':
  case 'W':
    {
      image(w, 350, 450);
      break;
    }
  case 's':
  case 'S':
    {
      image(s, 350, 500);
      break;
    }
  case 'd':
  case 'D':
    {
      image(d, 350, 500);
      break;
    }
  case 'a':
  case 'A':
    {
      image(a, 350, 500);
      break;
    }
  default :
    {
      image(n, 350, 500);
      break;
    }
  }
}
void keyPressed() {
  mov=key;
}
void keyReleased() {
  mov=0;
}