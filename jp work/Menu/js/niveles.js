 class Niveles {
	
	constructor (nivel,juego,jugador1){		
		this.nivel=nivel;
		this.juego=juego;
        this.jugador1=jugador1;
        
    }
	
tipodecontroles(juego,jugador1){	
		this.controles = juego.input.keyboard.createCursorKeys();	
}

	controlesplay(juego,jugador1){				
        jugador1.body.velocity.x = 0;
        jugador1.body.velocity.y = 0;	  
    if (controles.left.isDown) {
      jugador1.body.velocity.x = -150;
      jugador1.animations.play('izquierda');
    } else if (controles.right.isDown) {
      jugador1.body.velocity.x = 150;
      jugador1.animations.play('derecha');
    } else if (controles.down.isDown) {
      jugador1.body.velocity.y = 150;
      jugador1.animations.play('abajo');
    } else if (controles.up.isDown) {
      jugador1.body.velocity.y = -150;
      jugador1.animations.play('arriba');
    } else {
      jugador1.animations.stop();
      jugador1.frame = 9;
    }
				
		}
	
enemigos(){
	
	
	
}
	
jugador(juego,jugador1){
	
    juego.physics.arcade.enable(jugador1);
    jugador1.body.collideWorldBounds = true;
    	jugador1.animations.add('izquierda', [12, 13, 14, 15], 10, true);
    	jugador1.animations.add('derecha', [4, 5, 6, 7], 10, true);
    	jugador1.animations.add('abajo', [8, 9, 10, 11], 10, true);
    	jugador1.animations.add('arriba', [0, 1, 2, 3], 10, true); 
		
	   
}   
conseguido(){
		
	
}
	
fondo(jugador){
	
    juego.physics.startSystem(Phaser.Physics.ARCADE);
    juego.add.sprite(0, 0, 'mapa');
    juego.world.setBounds(0, 0, 1600, 1600);
	juego.camera.follow(jugador);
	
	
	    
       
    

}
}