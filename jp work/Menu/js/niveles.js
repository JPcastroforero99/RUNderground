class Niveles {
	
	constructor (nivel,spritejugador,spriteenemigo,spritefondo){		
		var nivel=nivel;
		this.spritejugador=spritejugador;
		this.spriteenemigo=spriteenemigo;
		this.spritefondo=spritefondo;
	}
	
tipodecontroles(){
	if(nivel==0){
		this.entrada = juego.input.keyboard.createCursorKeys();	
		
	}
}

	controles(){
		if(nivel==0){
			
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
		}
	
enemigos(){
	
	
	
}
	
jugador(nivel){
	this.jugador = juego.add.sprite(200, 100, 'pa');
	if(nivel==0){
		jugador.animations.add('izquierda', [12, 13, 14, 15], 10, true);
    	jugador.animations.add('derecha', [4, 5, 6, 7], 10, true);
    	jugador.animations.add('abajo', [8, 9, 10, 11], 10, true);
    	jugador.animations.add('arriba', [0, 1, 2, 3], 10, true); 
		jugador.body.collideWorldBounds = true;
	   }
}
conseguido(){
		
	
}
	
fondo(nivel){
	
    juego.add.sprite(0, 0, 'spritefondo');
if(nivel==0){
	
	juego.physics.arcade.enable(jugador);
	juego.camera.follow(jugador);
	juego.physics.startSystem(Phaser.Physics.ARCADE);    
    juego.world.setBounds(0, 0, 1600, 1600);   
    
}
}
}