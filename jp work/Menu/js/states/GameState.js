class Juego extends Niveles(){


/*var plataforma;
var barra;
var vidas=3;
 
var perdio;
var porro;*/
	constructor(){
var juego = new Phaser.Game(800, 600, Phaser.AUTO, 'juego', {preload: preload, create: create, update: update});
var boton;
var crear =false;
	}


 function preload () {
  juego.load.image('mapa', 'sprites/mapaM.png');
  juego.load.image('mapan1', 'sprites/mapan1.png');
  juego.load.image('plataforma', 'sprites/plataforma.png');
  juego.load.spritesheet('pa', 'sprites/sprite.png', 32, 42);
  juego.load.image('boton', 'sprites/boton0.png');
  juego.load.image('fondo', 'sprites/fondo.png');
  juego.load.image('enemigo', 'sprites/enemigo.png');
  juego.load.image('perdio', 'sprites/perdio.png');
  juego.load.image('menu', 'sprites/icono.png');
  juego.load.audio('aud', 'audio/shampoo.mp3');
  juego.load.audio('boom', 'audio/numkey.wav');
  juego.load.image('opciones', 'sprites/boton2.png');
  juego.load.image('estrella', 'sprites/estrella.png');
  juego.load.image('porro', 'sprites/porro.png');
  juego.load.image('bullet', 'sprites/bullet.png');
}
 function create () {
	//this.fondo1= juego.add.sprite(0,0,'menu');
	this.fondo1= juego.add.sprite(0,0,'menu');
    this.button = juego.add.button(juego.world.centerX-100, 300, 'boton', actionOnClick, this);
    this.button2 = juego.add.button(juego.world.centerX-100, 500, 'opciones', Click, this);
    this.aud = juego.add.audio('aud');
    this.boom = juego.add.audio('boom');
	this.vol=0.5;
	
    //this.aud=aud.play('', 0, vol, true); 
	
	
  if (boton==0) {
	   var interfaz=new niveles(0,'pa','','mapa');		
	   interfaz.jugador();
	   interfaz.fondo();
  } if (boton==1) { 
	  this.fondo1= juego.add.sprite(0,0,'porro');
  } 
}
function  update() {
	//aud.play('', 0, 0.5, true); 
  if (boton==0) {
	  if (crear==false) {
      create();
      crear=true;
    }
    
  } 
 }
/*function matar(mar, pla) {
  mar.kill();
  vidas=vidas-1;
  crear=false;
}
function obtener(mar, pla) {
  pla.kill();
  vel=300;
}*/
 function actionOnClick() {
  boton=0;
}
 function Click () {
  boton=1;
}

}