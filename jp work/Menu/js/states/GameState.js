var juego = juego || {};

juego.gamestate = {



/*var plataforma;
var barra;
var vidas=3;
var crear =false; 
var perdio;
var porro;*/



 preload: function() {
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
},
 create: function() {
	//this.fondo1= juego.add.sprite(0,0,'menu');
	 this.background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'menu');
    this.button = juego.add.button(juego.world.centerX-100, 300, 'boton', actionOnClick, this);
    this.button2 = juego.add.button(juego.world.centerX-100, 500, 'opciones', Click, this);
    this.aud = juego.add.audio('aud');
    this.boom = juego.add.audio('boom');
	this.vol=0.5;
    aud=aud.play('', 0, vol, true); 
	
	
  if (boton==0) {
	   niveles(0,'pa','','mapa');		  
  } if (boton==3) {   	
  } 
},
 update: function() {
	aud.play('', 0, 0.5, true); 
  if (boton==0) {
	  if (crear==false) {
      create();
      crear=true;
    }
    jugador.body.velocity.x = 0;
    jugador.body.velocity.y = 0;	  
    if (controles.left.isDown) {
      jugador.body.velocity.x = -150;
      jugador.animations.play('izquierda');
    } else if (controles.right.isDown) {
      jugador.body.velocity.x = 150;
      jugador.animations.play('derecha');
    } else if (controles.down.isDown) {
      jugador.body.velocity.y = 150;
      jugador.animations.play('abajo');
    } else if (controles.up.isDown) {
      jugador.body.velocity.y = -150;
      jugador.animations.play('arriba');
    } else {
      jugador.animations.stop();
      jugador.frame = 9;
    }
  } 
 },
/*function matar(mar, pla) {
  mar.kill();
  vidas=vidas-1;
  crear=false;
}
function obtener(mar, pla) {
  pla.kill();
  vel=300;
}*/
 actionOnClick: function () {
  boton=0;
},
 Click: function () {
  boton=1;
}
}